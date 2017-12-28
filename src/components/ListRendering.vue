<template>
  <div>
    <h1>List Rendering</h1>
    <div class="container">
      <div class="card">
        <h2 class="card-header">Mapping an Array to Elements with v-for</h2>
        <div class="card-body">
          <div>
            <p class="lead">Use the v-for directive to render a list of items based on an array</p>
            <ul id="example-1"><li v-for="item in items">{{ item.message }}</li></ul>
          </div>
          <div>
            <p class="lead">v-for also supports an optional second argument for the index of the current item</p>
            <ul id="example-2"><li v-for="(item, index) in items">{{ parentMessage }} - {{ index }} - {{ item.message }}</li></ul>
          </div>
          <div>
            <p class="lead">Use of as the delimiter instead of in</p>
            <div v-for="item of items">{{ item.message }}</div>
          </div>
        </div>
      </div>
      <div class="card">
        <h2 class="card-header">v-for with an Object</h2>
        <div class="card-body">
          <div>
            <p class="lead">Use v-for to iterate through the properties of an object</p>
            <ul id="v-for-object" class="demo"><li v-for="value in object">{{ value }}</li></ul>
          </div>
          <div>
            <p class="lead">Provide a second argument for the key</p>
            <div v-for="(value, key) in object">{{ key }}: {{ value }}</div>
          </div>
          <div>
            <p class="lead">Provide a third argument for the index</p>
            <div v-for="(value, key, index) in object">{{ index }}. {{ key }}: {{ value }}</div>
          </div>
        </div>
      </div>
      <div class="card">
        <h2 class="card-header">key</h2>
        <div class="card-body">
          <div>
            <p class="lead">To reuse and reorder existing elements, you need to provide a unique key attribute for each item</p>
            <div v-for="item in items" :key="item.id">{{ item.message }}</div>
          </div>
        </div>
      </div>
      <div class="card">
        <h2 class="card-header">Displaying Filtered/Sorted Results</h2>
        <div class="card-body">
          <div>
            <p class="lead">Create a computed property that returns the filtered or sorted array</p>
            <li v-for="n in evenNumbers">{{ n }}</li>
          </div>
          <div>
            <p class="lead">Use a method where computed properties are not feasible</p>
            <li v-for="n in even(numbers)">{{ n }}</li>
          </div>
        </div>
      </div>
      <div class="card">
        <h2 class="card-header">v-for on a template</h2>
        <div class="card-body">
          <div>
            <p class="lead">Use a template tag with v-for to render a block of multiple elements</p>
            <ul>
              <template v-for="item in items">
                <li>{{ item.message }}</li>
                <li class="divider"></li>
              </template>
            </ul>
          </div>
        </div>
      </div>
      <div class="card">
        <h2 class="card-header">v-for with v-if</h2>
        <div class="card-body">
          <div>
            <p class="lead">v-if will be run on each iteration of the loop separately</p>
            <li v-for="todo in todos" v-if="!todo.isComplete">{{ todo.title }}</li>
          </div>
          <div>
            <p class="lead">Conditionally skip execution of the loop</p>
            <ul v-if="todos.length"><li v-for="todo in todos">{{ todo.title }}</li></ul>
            <p v-else>No todos left!</p>
          </div>
        </div>
      </div>
      <div class="card">
        <h2 class="card-header">v-for with a Component</h2>
        <div class="card-body">
          <div>
            <p class="lead">Use props to pass the iterated data into the component</p>
            <my-component v-for="(item, index) in items" v-bind:item="item" v-bind:index="index" v-bind:key="item.id"></my-component>
          </div>
        </div>
      </div>
      <div class="card">
        <h2 class="card-header">Simple todo list</h2>
        <div class="card-body">
          <div id="todo-list-example">
            <input class="form-control"
              v-model="newTodoText"
              v-on:keyup.enter="addNewTodo"
              placeholder="Add a todo"
            >
            <ul>
              <li
                is="todo-list-item"
                v-for="(todo, index) in todos"
                v-bind:key="todo.id"
                v-bind:title="todo.title"
                v-on:remove="todos.splice(index, 1)"
              ></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
import Vue from 'vue'

Vue.component('todo-list-item', {
  template: '<li>{{ title }}<button class="btn btn-dark" v-on:click="$emit(\'remove\')">X</button></li>',
  props: ['title']
})

export default {
  name: 'ListRendering',
  data () {
    return {
      parentMessage: 'Parent',
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ],
      object: {
        firstName: 'John',
        lastName: 'Doe',
        age: 30
      },
      numbers: [ 1, 2, 3, 4, 5 ],
      newTodoText: '',
      todos: [
        {
          id: 1,
          title: 'Do the dishes'
        },
        {
          id: 2,
          title: 'Take out the trash'
        },
        {
          id: 3,
          title: 'Mow the lawn',
          isComplete: true
        }
      ],
      nextTodoId: 4
    }
  },
  computed: {
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  },
  methods: {
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0
      })
    },
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
}
</script>

<style scoped>

</style>
