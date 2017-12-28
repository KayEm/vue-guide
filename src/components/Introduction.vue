<template>
    <div class="container">
      <div class="card">
        <h2 class="card-header">Declarative rendering</h2>
        <div class="card-body">
          <p class="lead">Declaratively render data to the DOM using straightforward template syntax</p>
          <div>{{message}}</div>
          <p class="lead">Bind element attributes</p>
          <div>
              <span v-bind:title="message2">
                Hover your mouse over me for a few seconds
                to see my dynamically bound title!
              </span>
          </div>
        </div>
      </div>
      <div class="card">
        <h2 class="card-header">Conditionals and Loops</h2>
        <div class="card-body">
          <p class="lead">Toggle the presence of an element</p>
          <div>
            <span v-if="seen">Now you see me</span>
          </div>
          <p class="lead">The v-for directive can be used for displaying a list of items using the data from an Array</p>
          <div>
              <ol>
                  <li v-for="todo in todos">
                    {{ todo.text }}
                  </li>
              </ol>
          </div>
        </div>
      </div>
      <div class="card">
        <h2 class="card-header">Handling user input</h2>
        <div class="card-body">
          <p class="lead">Use the v-on directive to attach event listeners that invoke methods on our Vue instances</p>
          <div>
              <p>{{message}}</p>
              <button class="btn btn-dark" v-on:click="reverseMessage">Reverse message</button>
          </div>
          <p class="lead">The v-model directive makes two-way binding between form input and app state a breeze</p>
          <div>
              <p>{{message}}</p>
              <input class="form-control" v-model="message" />
          </div>
        </div>
      </div>
      <div class="card">
        <h2 class="card-header">Composing with components</h2>
        <div class="card-body">
          <p class="lead">A component is essentially a Vue instance with pre-defined options</p>
          <p class="lead">Pass data from the parent scope into child components</p>
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
