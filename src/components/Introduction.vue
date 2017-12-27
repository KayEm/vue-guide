<template>
    <div id="app-0" class="container">
        <h2 class="h2-1">Declarative rendering</h2>
        <div class="app-1">
            {{message}}
        </div>
        <div class="app-2">
            <span v-bind:title="message2">
                Hover your mouse over me for a few seconds
                to see my dynamically bound title!
            </span>
        </div>
        <h2 class="h2-2">Conditionals and Loops</h2>
        <div class="app-3">
            <span v-if="seen">Now you see me</span>
        </div>
        <div class="app-4">
            <ol>
                <li v-for="todo in todos">
                    {{ todo.text }}
                </li>
            </ol>
        </div>
        <h2 class="h2-3">Handling user input</h2>
        <div class="app-5">
            <p>{{message}}</p>
            <button v-on:click="reverseMessage">Reverse message</button>
        </div>
        <div class="app-6">
            <p>{{message}}</p>
            <input v-model="message" />
        </div>
        <h2 class="h2-4">Composing with components</h2>
        <div class="app-7">
            <ol>
                <todo-item
                    v-for="item in groceryList"
                    v-bind:todo="item"
                    v-bind:key="item.id">                    
                </todo-item>
            </ol>
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
.h2-1 {
  grid-column: 1;
  grid-row: 1;
}
.app-1 {
  grid-column: 1;
  grid-row: 2;
}
.app-2 { 
  grid-column: 1;
  grid-row: 3;
}
.h2-2 {
  grid-column: 2;
  grid-row: 1;    
}
.app-3 {
  grid-column: 2;
  grid-row: 2;
}
.app-4 {
  grid-column: 2;
  grid-row: 3;
}
.h2-3 {
  grid-column: 1;
  grid-row: 4;
}
.app-5 { 
  grid-column: 1;
  grid-row: 5;
}
.app-6 {
  grid-column: 1;
  grid-row: 6;
}
.h2-4 {
  grid-column: 2;
  grid-row: 4;
}
.app-7 {
  grid-column: 2;
  grid-row: 5;
}
</style>
