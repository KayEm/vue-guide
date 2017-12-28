<template>
  <div class="container">
    <div class="card">
      <h1 class="card-header">Template syntax</h1>
      <div class="card-body">
        <div>Text with mustache: {{ message }}</div>
        <div v-once>One-time interpolation with v-once. This will never change: {{message}}</div>
        <div>Raw HTML using mustaches: {{ rawHtml }}</div>
        <div>Raw HTML using v-html directive: <span v-html="rawHtml"></span></div>
        <div><button class="btn btn-dark" v-bind:disabled="isButtonDisabled">Button disabled using v-bind:disabled</button></div>
        <div>JavaScript expressions: {{ ok ? 'YES' : 'NO' }}</div>
        <div v-if="seen">Now you see me! Using v-if directive</div>
        <div><a v-bind:href="url">link with v-bind:href</a></div>
        <div><a :href="url">Shorthand link with :href</a></div>
        <div><a v-on:click="alert('clicked')">link with v-on:click</a></div>
        <div><a @click="alert('clicked')">Shorthand with @click</a></div>
      </div>
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
