<template>
    <div class="container">
      <div>
        <h1>Declarative rendering</h1>
        <div>{{message}}</div>
        <div>
            <span v-bind:title="message2">
              Hover your mouse over me for a few seconds
              to see my dynamically bound title!
            </span>
        </div>
      </div>
      <div>
        <h1>Conditionals and Loops</h1>
        <div>
          <span v-if="seen">Now you see me</span>
        </div>
        <div>
            <ol>
                <li v-for="todo in todos">
                  {{ todo.text }}
                </li>
            </ol>
        </div>
      </div>
      <div>
        <h1>Handling user input</h1>
        <div>
            <p>{{message}}</p>
            <button v-on:click="reverseMessage">Reverse message</button>
        </div>
        <div>
            <p>{{message}}</p>
            <input v-model="message" />
        </div>
      </div>
      <div>
        <h1>Composing with components</h1>
        <div>
            <ol>
                <todo-item
                    v-for="item in groceryList"
                    v-bind:todo="item"
                    v-bind:key="item.id">                    
                </todo-item>
            </ol>
        </div>
      </div>
    </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'Introduction',
  data () {
    return {
      message: 'Hello Vue',
      message2: 'You loaded this page on ' + new Date().toLocaleString(),
      seen: true,
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ],
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Orange juice' },
        { id: 2, text: 'Dinner' }
      ]
    }
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
}

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
</script>

<style scoped>

</style>
