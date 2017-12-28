<template>
  <div>
    <h1>Event Handling</h1>
    <div class="container">
      <div class="card">
        <h2 class="card-header">Listening to events</h2>
        <div class="card-body">
          <div>
            <p class="lead">Use the v-on directive to listen to DOM events and run some JavaScript when they’re triggered</p>
            <div id="example-1">
              <button class="btn btn-dark" v-on:click="counter += 1">Add 1</button>
              <p>The button above has been clicked {{ counter }} times.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <h2 class="card-header">Method event handlers</h2>
        <div class="card-body">
          <div>
            <p class="lead">v-on can also accept the name of a method you’d like to call.</p>
            <div id="example-2"><button class="btn btn-dark" v-on:click="greet">Greet</button></div>
          </div>
        </div>
      </div>
      <div class="card">
        <h2 class="card-header">Methods in Inline Handlers</h2>
        <div class="card-body">
          <div>
            <p class="lead">Use methods in an inline JavaScript statement</p>
            <div id="example-3">
              <button class="btn btn-dark" v-on:click="say('hi')">Say hi</button>
              <button class="btn btn-dark" v-on:click="say('what')">Say what</button>
            </div>
          </div>
          <div>
            <p class="lead">pass it the original DOM event in an inline statement handler into a method using the special $event variable</p>
            <button class="btn btn-dark" v-on:click="warn('Form cannot be submitted yet.', $event)">Submit</button>
          </div>
        </div>
      </div>
      <div class="card">
        <h2 class="card-header">Event Modifiers</h2>
        <div class="card-body">
          <div>
            <p class="lead">Vue provides event modifiers for v-on</p>
            <p class="lead">the click event's propagation will be stopped</p>
            <a v-on:click.stop="doThis"></a>
            <p class="lead">the submit event will no longer reload the page</p>
            <form v-on:submit.prevent="onSubmit"></form>
            <p class="lead">modifiers can be chained</p>
            <a v-on:click.stop.prevent="doThat"></a>
            <p class="lead">just the modifier</p>
            <form v-on:submit.prevent></form>
            <p class="lead">use capture mode when adding the event listener</p>
            <p class="lead">i.e. an event targeting an inner element is handled here after being handled by that element</p>
            <div v-on:click.capture="doThis">...</div>
            <p class="lead">only trigger handler if event.target is the element itself</p>
            <p class="lead">i.e. not from a child element</p>
            <div v-on:click.self="doThat">...</div>
            <p class="lead">the click event will be triggered at most once</p>
            <a v-on:click.once="doThis"></a>
          </div>
        </div>
      </div>
      <div class="card">
        <h2 class="card-header">Key Modifiers</h2>
        <div class="card-body">
          <div>
            <p class="lead">Adding key modifiers for v-on when listening for key events</p>
            <p class="lead">only call `vm.submit()` when the `keyCode` is 13</p>
            <input class="form-control" v-on:keyup.13="submit">
          </div>
          <div>
            <p class="lead">Vue provides aliases for the most commonly used keys</p>
            <p class="lead">same as above</p>
            <input class="form-control" v-on:keyup.enter="submit">
            <p class="lead">also works for shorthand</p>
            <input class="form-control" @keyup.enter="submit">
          </div>
          <div>
            <p class="lead">Use any valid key names exposed via KeyboardEvent.key as modifiers by converting them to kebab-case</p>
            <input class="form-control" @keyup.page-down="onPageDown">
          </div>
        </div>
      </div>
      <div class="card">
        <h2 class="card-header">System Modifier Keys</h2>
        <div class="card-body">
          <div>
            <p class="lead">Use modifiers to trigger mouse or keyboard event listeners only when the corresponding modifier key is pressed</p>
            <p class="lead">Alt + C</p>
            <input class="form-control" @keyup.alt.67="clear">
            <p class="lead">Ctrl + Click</p>
            <div @click.ctrl="doSomething">Do something</div>
          </div>
          <div>
            <p class="lead">.exact modifier allows control of the exact combination of system modifiers needed to trigger an event</p>
            <p class="lead">this will fire even if Alt or Shift is also pressed</p>
            <button class="btn btn-dark" @click.ctrl="onClick">A</button>
            <p class="lead">this will only fire when Ctrl and no other keys are pressed</p>
            <button class="btn btn-dark" @click.ctrl.exact="onCtrlClick">A</button>
            <p class="lead">this will only fire when no system modifiers are pressed</p>
            <button class="btn btn-dark" @click.exact="onClick">A</button>
          </div>
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
