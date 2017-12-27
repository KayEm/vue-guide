<template>
  <div id="app-0" class="container">
        <h2 class="h2-1">Template syntax</h2>
        <div class="app-1">
          <ul>
            <li>Text with mustache: {{ message }}</li>
            <li v-once>One-time interpolation with v-once. This will never change: {{message}}</li>
            <li>Raw HTML using mustaches: {{ rawHtml }}</li>
            <li>Raw HTML using v-html directive: <span v-html="rawHtml"></span></li>
            <li><button v-bind:disabled="isButtonDisabled">Button disabled using v-bind:disabled</button></li>
            <li>JavaScript expressions: {{ ok ? 'YES' : 'NO' }}</li>
            <li v-if="seen">Now you see me! Using v-if directive</li>
            <li><a v-bind:href="url">Link with v-bind:href</a></li>
            <li><a :href="url">Shorthand link with :href</a></li>
            <li><a v-on:click="alert('Clicked')">Link with v-on:click</a></li>
            <li><a @click="alert('Clicked')">Shorthand with @click</a></li>
          </ul>
        </div>
        <h2 class="h2-2">Computed properties and Watchers</h2>
        <div class="app-2">
          <ul>
            <li>In-template expression: {{ message.split('').reverse().join('') }}</li>   
            <li>Original message: "{{ message }}"</li>
            <li>Computed reversed message, computed properties are cached based on their dependencies: "{{ reversedMessage }}"</li>  
            <li>Reversed message by invoking a method, a method invocation will always run the function on re-render: "{{ reverseMessage() }}"</li>       
            <li>Use a computed property rather than an imperative watch callback: {{ fullName }}</li>
            <li>Computed properties are by default getter-only, but you can also provide a setter: {{ fullNameWithSetter }}</li>
            <li>Yes/no question using Watchers with Axois and Lodash:<p><input v-model="question"> {{ answer }}</p></li>
          </ul>
        </div>
  </div>
</template>

<script>
import debounce from 'lodash/debounce'
import capitalize from 'lodash/capitalize'
import axios from 'axios'

export default {
  name: 'Advanced',
  data () {
    return {
      message: 'Hello Vue',
      rawHtml: '<b>This is bold text</b>',
      isButtonDisabled: true,
      ok: true,
      seen: true,
      url: '"https://vuejs.org',
      firstName: 'Foo',
      lastName: 'Bar',
      question: '',
      answer: 'Ask you question...'
    }
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    },
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    },
    fullNameWithSetter: {
      // getter
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  },
  watch: {
    question: function () {
      this.answer = 'Waiting...'
      this.getAnswer()
    }
  },
  methods: {
    reverseMessage: function () {
      return this.message.split('').reverse().join('')
    },
    getAnswer: debounce(
      function () {
        if (this.question.indexOf('?') === -1) {
          this.answer = 'Questions usually contain a question mark. ;-)'
          return
        }
        this.answer = 'Thinking...'
        var vm = this
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            vm.answer = capitalize(response.data.answer)
          })
          .catch(function (error) {
            vm.answer = 'Error! Could not reach the API. ' + error
          })
      },
      500
    )
  }
}
</script>

<style scoped>
.h2-1 {
  grid-column: 1;
  grid-row: 1;
}
.app-1 {
  grid-column: 1;
  grid-row: 2;
}
.h2-2 {
  grid-column: 2;
  grid-row: 1;
}
.app-2 {
  grid-column: 2;
  grid-row: 2;
}
</style>
