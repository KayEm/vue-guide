<template>
  <div>
    <h1>Event Handling</h1>
    <div class="container">
      <div>
        <h2>Listening to events</h2>
        <div>
          <h3>Use the v-on directive to listen to DOM events and run some JavaScript when they’re triggered</h3>
          <div id="example-1">
            <button v-on:click="counter += 1">Add 1</button>
            <p>The button above has been clicked {{ counter }} times.</p>
          </div>
        </div>
      </div>
      <div>
        <h2>Method event handlers</h2>
        <div>
          <h3>v-on can also accept the name of a method you’d like to call.</h3>
          <div id="example-2"><button v-on:click="greet">Greet</button></div>
        </div>
      </div>
      <div>
        <h2>Methods in Inline Handlers</h2>
        <div>
          <h3>Use methods in an inline JavaScript statement</h3>
          <div id="example-3">
            <button v-on:click="say('hi')">Say hi</button>
            <button v-on:click="say('what')">Say what</button>
          </div>
        </div>
        <div>
          <h3>pass it the original DOM event in an inline statement handler into a method using the special $event variable</h3>
          <button v-on:click="warn('Form cannot be submitted yet.', $event)">Submit</button>
        </div>
      </div>
      <div>
        <h2>Event Modifiers</h2>
        <div>
          <h3>Vue provides event modifiers for v-on</h3>
          <h4>the click event's propagation will be stopped</h4>
          <a v-on:click.stop="doThis"></a>
          <h4>the submit event will no longer reload the page</h4>
          <form v-on:submit.prevent="onSubmit"></form>
          <h4>modifiers can be chained</h4>
          <a v-on:click.stop.prevent="doThat"></a>
          <h4>just the modifier</h4>
          <form v-on:submit.prevent></form>
          <h4>use capture mode when adding the event listener</h4>
          <h4>i.e. an event targeting an inner element is handled here after being handled by that element</h4>
          <div v-on:click.capture="doThis">...</div>
          <h4>only trigger handler if event.target is the element itself</h4>
          <h4>i.e. not from a child element</h4>
          <div v-on:click.self="doThat">...</div>
          <h4>the click event will be triggered at most once</h4>
          <a v-on:click.once="doThis"></a>
        </div>
      </div>
      <div>
        <h2>Key Modifiers</h2>
        <div>
          <h3>Adding key modifiers for v-on when listening for key events</h3>
          <h4>only call `vm.submit()` when the `keyCode` is 13</h4>
          <input v-on:keyup.13="submit">
        </div>
        <div>
          <h3>Vue provides aliases for the most commonly used keys</h3>
          <h4>same as above</h4>
          <input v-on:keyup.enter="submit">
          <h4>also works for shorthand</h4>
          <input @keyup.enter="submit">
        </div>
        <div>
          <h3>Use any valid key names exposed via KeyboardEvent.key as modifiers by converting them to kebab-case</h3>
          <input @keyup.page-down="onPageDown">
        </div>
      </div>
      <div>
        <h2>System Modifier Keys</h2>
        <div>
          <h3>Use modifiers to trigger mouse or keyboard event listeners only when the corresponding modifier key is pressed</h3>
          <h4>Alt + C</h4>
          <input @keyup.alt.67="clear">
          <h4>Ctrl + Click</h4>
          <div @click.ctrl="doSomething">Do something</div>
        </div>
        <div>
          <h3>.exact modifier allows control of the exact combination of system modifiers needed to trigger an event</h3>
          <h4>this will fire even if Alt or Shift is also pressed</h4>
          <button @click.ctrl="onClick">A</button>
          <h4>this will only fire when Ctrl and no other keys are pressed</h4>
          <button @click.ctrl.exact="onCtrlClick">A</button>
          <h4>this will only fire when no system modifiers are pressed</h4>
          <button @click.exact="onClick">A</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventHandling',
  data () {
    return {
      counter: 0,
      name: 'Vue.js'
    }
  },
  methods: {
    greet: function (event) {
      // `this` inside methods points to the Vue instance
      alert('Hello ' + this.name + '!')
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName)
      }
    },
    say: function (message) {
      alert(message)
    },
    warn: function (message, event) {
      // now we have access to the native event
      if (event) event.preventDefault()
      alert(message)
    }
  }
}
</script>
