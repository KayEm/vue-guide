<template>
  <div>
    <h1>Form Input Bindings</h1>
    <div class="container">
      <div>
        <h2>Basic Usage</h2>
        <div>
          <h3>Use the v-model directive to create two-way data bindings on form input and textarea elements</h3>
          <div>
            <h4>Text</h4>
            <input v-model="message" placeholder="edit me">
            <p>Message is: {{ message }}</p>
          </div>
          <div>
            <h4>Multiline text</h4>
            <span>Multiline message is:</span>
            <p style="white-space: pre-line;">{{ message }}</p><br>
            <textarea v-model="message" placeholder="add multiple lines"></textarea>
          </div>
          <div>
            <h4>Checkbox</h4>
            <input type="checkbox" id="checkbox" v-model="checked">
            <label for="checkbox">{{ checked }}</label>
          </div>
          <div>
            <h4>Multiple checkboxes, bound to the same Array</h4>
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
            <h4>Radio</h4>
            <input type="radio" id="one" value="One" v-model="picked">
            <label for="one">One</label>
            <br>
            <input type="radio" id="two" value="Two" v-model="picked">
            <label for="two">Two</label>
            <br>
            <span>Picked: {{ picked }}</span>
          </div>
          <div>
            <h4>Single select</h4>
            <select v-model="selected">
              <option disabled value="">Please select one</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
            <span>Selected: {{ selected }}</span>
          </div>
          <div>
            <h4>Multiple select (bound to Array)</h4>
            <select v-model="selected" multiple>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
            <br>
            <span>Selected: {{ selected }}</span>
          </div>
          <div>
            <h4>Dynamic options rendered with v-for</h4>
            <select v-model="selectedOption">
              <option v-for="option in options" v-bind:value="option.value">
                {{ option.text }}
              </option>
            </select>
            <span>Selected: {{ selectedOption }}</span>
          </div>
        </div>
      </div>
      <div>
        <h2>Value Bindings</h2>
        <div>
          <h3>The v-model binding values are usually static strings (or booleans for checkbox)</h3>
          <h4>`picked` is a string "a" when checked</h4>
          <input type="radio" v-model="picked" value="a">
          <h4>`toggle` is either true or false</h4>
          <input type="checkbox" v-model="toggle">
          <h4>`selected` is a string "abc" when selected</h4>
          <select v-model="selected">
            <option value="abc">ABC</option>
          </select>
        </div>
        <div>
          <h3>Bind the value to a dynamic property on the Vue instance and bind the input value to non-string values with v-bind</h3>
          <input type="checkbox" v-model="toggle" true-value="yes" false-value="no">
          <input type="radio" v-model="pick" v-bind:value="a">
          <select v-model="selected"><option v-bind:value="{ number: 123 }">123</option></select>
        </div>
      </div>
      <div>
        <h2>Modifiers</h2>
        <div>
          <h3>Add the lazy modifier to sync after change events instead of after each input event</h3>
          <input v-model.lazy="msg" >
        </div>
        <div>
          <h3>Add the number modifier to your v-model managed inputs to automatically typecast user input as a number</h3>
          <input v-model.number="age" type="number">
        </div>
        <div>
          <h3>Add the trim modifier to your v-model managed inputs to trimmed user input automatically</h3>
          <input v-model.trim="msg">
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
