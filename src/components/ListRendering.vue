<template>
  <div>
    <h1>List Rendering</h1>
    <div class="container">
      <div>
        <h2>Mapping an Array to Elements with v-for</h2>
        <div>
          <h3>Use the v-for directive to render a list of items based on an array</h3>
          <ul id="example-1"><li v-for="item in items">{{ item.message }}</li></ul>
        </div>
        <div>
          <h3>v-for also supports an optional second argument for the index of the current item</h3>
          <ul id="example-2"><li v-for="(item, index) in items">{{ parentMessage }} - {{ index }} - {{ item.message }}</li></ul>
        </div>
        <div>
          <h3>Use of as the delimiter instead of in</h3>
          <div v-for="item of items">{{ item.message }}</div>
        </div>
      </div>
      <div>
        <h2>v-for with an Object</h2>
        <div>
          <h3>Use v-for to iterate through the properties of an object</h3>
          <ul id="v-for-object" class="demo"><li v-for="value in object">{{ value }}</li></ul>
        </div>
        <div>
          <h3>Provide a second argument for the key</h3>
          <div v-for="(value, key) in object">{{ key }}: {{ value }}</div>
        </div>
        <div>
          <h3>Provide a third argument for the index</h3>
          <div v-for="(value, key, index) in object">{{ index }}. {{ key }}: {{ value }}</div>
        </div>
      </div>
      <div>
        <h2>key</h2>
        <div>
          <h3>To reuse and reorder existing elements, you need to provide a unique key attribute for each item</h3>
          <div v-for="item in items" :key="item.id">{{ item.message }}</div>
        </div>
      </div>
      <div>
        <h2>Displaying Filtered/Sorted Results</h2>
        <div>
          <h3>Create a computed property that returns the filtered or sorted array</h3>
          <li v-for="n in evenNumbers">{{ n }}</li>
        </div>
        <div>
          <h3>Use a method where computed properties are not feasible</h3>
          <li v-for="n in even(numbers)">{{ n }}</li>
        </div>
      </div>
      <div>
        <h2>v-for on a template</h2>
        <div>
          <h3>Use a template tag with v-for to render a block of multiple elements</h3>
          <ul>
            <template v-for="item in items">
              <li>{{ item.message }}</li>
              <li class="divider"></li>
            </template>
          </ul>
        </div>
      </div>
      <div>
        <h2>v-for with v-if</h2>
        <div>
          <h3>v-if will be run on each iteration of the loop separately</h3>
          <li v-for="todo in todos" v-if="!todo.isComplete">{{ todo.title }}</li>
        </div>
        <div>
          <h3>Conditionally skip execution of the loop</h3>
          <ul v-if="todos.length"><li v-for="todo in todos">{{ todo.title }}</li></ul>
          <p v-else>No todos left!</p>
        </div>
      </div>
      <div>
        <h2>v-for with a Component</h2>
        <div>
          <h3>Use props to pass the iterated data into the component</h3>
          <my-component v-for="(item, index) in items" v-bind:item="item" v-bind:index="index" v-bind:key="item.id"></my-component>
        </div>
      </div>
      <div>
        <h2>Simple todo list</h2>
        <div id="todo-list-example">
          <input
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
</template>

<script>
import Vue from 'vue'

Vue.component('todo-list-item', {
  template: '<li>{{ title }}<button v-on:click="$emit(\'remove\')">X</button></li>',
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
