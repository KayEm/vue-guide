<template>
  <div>
    <h1>Form Input Bindings</h1>
    <div class="container">
      <div class="card">
        <h2 class="card-header">Basic Usage</h2>
        <div class="card-body">
          <div>
            <p class="lead">Use the v-model directive to create two-way data bindings on form input and textarea elements</p>
            <div>
              <p class="lead">Text</p>
              <input class="form-control" v-model="message" placeholder="edit me">
              <p>Message is: {{ message }}</p>
            </div>
            <div>
              <p class="lead">Multiline text</p>
              <span>Multiline message is:</span>
              <p style="white-space: pre-line;">{{ message }}</p><br>
              <textarea  class="form-control" v-model="message" placeholder="add multiple lines"></textarea>
            </div>
            <div>
              <p class="lead">Checkbox</p>
              <input type="checkbox" id="checkbox" v-model="checked">
              <label for="checkbox">{{ checked }}</label>
            </div>
            <div>
              <p class="lead">Multiple checkboxes, bound to the same Array</p>
              <div id='example-3'>
                <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
                <label for="jack">Jack</label>
                <input type="checkbox" id="john" value="John" v-model="checkedNames">
                <label for="john">John</label>
                <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
                <label for="mike">Mike</label>
                <br>
                <span>Checked names: {{ checkedNames }}</span>
              </div>
            </div>
            <div>
              <p class="lead">Radio</p>
              <input type="radio" id="one" value="One" v-model="picked">
              <label for="one">One</label>
              <br>
              <input type="radio" id="two" value="Two" v-model="picked">
              <label for="two">Two</label>
              <br>
              <span>Picked: {{ picked }}</span>
            </div>
            <div>
              <p class="lead">Single select</p>
              <select class="form-control" v-model="selected">
                <option disabled value="">Please select one</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
              <span>Selected: {{ selected }}</span>
            </div>
            <div>
              <p class="lead">Multiple select (bound to Array)</p>
              <select class="form-control" v-model="selected" multiple>
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
              <br>
              <span>Selected: {{ selected }}</span>
            </div>
            <div>
              <p class="lead">Dynamic options rendered with v-for</p>
              <select class="form-control" v-model="selectedOption">
                <option v-for="option in options" v-bind:value="option.value">
                  {{ option.text }}
                </option>
              </select>
              <span>Selected: {{ selectedOption }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <h2 class="card-header">Value Bindings</h2>
        <div class="card-body">
          <div>
            <p class="lead">The v-model binding values are usually static strings (or booleans for checkbox)</p>
            <p class="lead">`picked` is a string "a" when checked</p>
            <input type="radio" v-model="picked" value="a">
            <p class="lead">`toggle` is either true or false</p>
            <input type="checkbox" v-model="toggle">
            <p class="lead">`selected` is a string "abc" when selected</p>
            <select class="form-control" v-model="selected">
              <option value="abc">ABC</option>
            </select>
          </div>
          <div>
            <p class="lead">Bind the value to a dynamic property on the Vue instance and bind the input value to non-string values with v-bind</p>
            <input type="checkbox" v-model="toggle" true-value="yes" false-value="no">
            <input type="radio" v-model="pick" v-bind:value="a">
            <select class="form-control" v-model="selected"><option v-bind:value="{ number: 123 }">123</option></select>
          </div>
        </div>
      </div>
      <div class="card">
        <h2 class="card-header">Modifiers</h2>
        <div class="card-body">
          <div>
            <p class="lead">Add the lazy modifier to sync after change events instead of after each input event</p>
            <input class="form-control" v-model.lazy="msg" >
          </div>
          <div>
            <p class="lead">Add the number modifier to your v-model managed inputs to automatically typecast user input as a number</p>
            <input class="form-control" v-model.number="age" type="number">
          </div>
          <div>
            <p class="lead">Add the trim modifier to your v-model managed inputs to trimmed user input automatically</p>
            <input class="form-control" v-model.trim="msg">
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'FormInputBindings',
  data () {
    return {
      checkedNames: [],
      selected: '',
      selectedOption: 'A',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ]
    }
  }
}
</script>
