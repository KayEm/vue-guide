<template>
    <div>
        <h1>Class and Style Bindings</h1>
        <div class="container">
            <div class="card">
              <h2 class="card-header">Binding HTML classes</h2>
              <div class="card-body">
                <div v-bind:class="{ active: isActive }">v-bind:class to dynamically toggle classes</div>
                <div class="static" v-bind:class="{ active: isActive, 'text-danger': hasError }">
                    v-bind:class directive can also co-exist with the plain class attribute
                </div>
                <div v-bind:class="classObject">The bound object doesn’t have to be inline: v-bind:class="classObject"</div>
                <div v-bind:class="computedClassObject">Bind to a computed property that returns an object</div>
                <div v-bind:class="[activeClass, errorClass]">Pass an array to v-bind:class to apply a list of classes</div>
                <div v-bind:class="[isActive ? activeClass : '', errorClass]">Toggle a class in the list conditionally</div>
                <div v-bind:class="[{ active: isActive }, errorClass]">Use the object syntax inside array syntax</div>
              </div>
            </div>
            <div class="card">
              <h2 class="card-header">Binding inline styles</h2>
              <div class="card-body">
                <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">v-bind:style</div>
                <div v-bind:style="styleObject">Bind to a style object directly</div>
                <div v-bind:style="[baseStyles, overridingStyles]">Apply multiple style objects to the same element with array syntax</div>
                <div v-bind:style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">Provide an array of multiple (prefixed) values to a style property</div>
              </div>
            </div>
        </div>    
    </div>
</template>

<script>
export default {
  name: 'ClassStyleBindings',
  data () {
    return {
      isActive: true,
      hasError: false,
      classObject: {
        active: true,
        'text-danger': false
      },
      activeClass: 'active',
      errorClass: 'text-danger',
      activeColor: 'red',
      fontSize: 30,
      styleObject: {
        color: 'red',
        fontSize: '13px'
      }
    }
  },
  computed: {
    computedClassObject: function () {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }
}
</script>

<style scoped>

</style>
