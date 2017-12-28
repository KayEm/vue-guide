<template>  
    <div>
        <h1>Computed properties and Watchers</h1>
        <div class="container">
          <div class="card">
            <h2 class="card-header">Computed properties</h2>
            <div class="card-body">
              <div>In-template expression: {{ message.split('').reverse().join('') }}</div>   
              <div>Original message: "{{ message }}"</div>
              <div>Computed reversed message, computed properties are cached based on their dependencies: "{{ reversedMessage }}"</div>  
              <div>Reversed message by invoking a method, a method invocation will always run the function on re-render: "{{ reverseMessage() }}"</div>       
              <div>Use a computed property rather than an imperative watch callback: {{ fullName }}</div>
              <div>Computed properties are by default getter-only, but you can also provide a setter: {{ fullNameWithSetter }}</div>
            </div>
          </div>
          <div class="card">
            <h2 class="card-header">Watchers</h2>
            <div class="card-body">
              <div>Yes/no question using Watchers with Axois and Lodash:<p><input class="form-control" v-model="question"> {{ answer }}</p></div>
            </div>
          </div>
      </div>
    </div>  
</template>

<script>
import debounce from 'lodash/debounce'
import capitadivze from 'lodash/capitalize'
import axios from 'axios'

export default {
  name: 'Advanced',
  data () {
    return {
      message: 'Hello Vue',
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
            vm.answer = capitadivze(response.data.answer)
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
