<template>
    <div class="container">
      <div>
        <h1>Declarative rendering</h1>
        <h2>Declaratively render data to the DOM using straightforward template syntax</h2>
        <div>{{message}}</div>
        <h2>Bind element attributes</h2>
        <div>
            <span v-bind:title="message2">
              Hover your mouse over me for a few seconds
              to see my dynamically bound title!
            </span>
        </div>
      </div>
      <div>
        <h1>Conditionals and Loops</h1>
        <h2>Toggle the presence of an element</h2>
        <div>
          <span v-if="seen">Now you see me</span>
        </div>
        <h2>The v-for directive can be used for displaying a list of items using the data from an Array</h2>
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
        <h2>Use the v-on directive to attach event listeners that invoke methods on our Vue instances</h2>
        <div>
            <p>{{message}}</p>
            <button v-on:click="reverseMessage">Reverse message</button>
        </div>
        <h2>The v-model directive makes two-way binding between form input and app state a breeze</h2>
        <div>
            <p>{{message}}</p>
            <input v-model="message" />
        </div>
      </div>
      <div>
        <h1>Composing with components</h1>
        <h2>A component is essentially a Vue instance with pre-defined options</h2>
        <h3>Pass data from the parent scope into child components</h3>
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
