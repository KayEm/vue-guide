<template>
  <div class="container">
    <div>
      <h1>Template syntax</h1>
      <div>Text with mustache: {{ message }}</div>
      <div v-once>One-time interpolation with v-once. This will never change: {{message}}</div>
      <div>Raw HTML using mustaches: {{ rawHtml }}</div>
      <div>Raw HTML using v-html directive: <span v-html="rawHtml"></span></div>
      <div><button v-bind:disabled="isButtonDisabled">Button disabled using v-bind:disabled</button></div>
      <div>JavaScript expressions: {{ ok ? 'YES' : 'NO' }}</div>
      <div v-if="seen">Now you see me! Using v-if directive</div>
      <div><a v-bind:href="url">divnk with v-bind:href</a></div>
      <div><a :href="url">Shorthand divnk with :href</a></div>
      <div><a v-on:cdivck="alert('Cdivcked')">divnk with v-on:cdivck</a></div>
      <div><a @cdivck="alert('Cdivcked')">Shorthand with @cdivck</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Template',
  data () {
    return {
      message: 'Hello Vue',
      rawHtml: '<b>This is bold text</b>',
      isButtonDisabled: true,
      ok: true,
      seen: true,
      url: '"https://vuejs.org'
    }
  }
}
</script>

<style scoped>

</style>
