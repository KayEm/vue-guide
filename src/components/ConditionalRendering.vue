<template>
  <div>
    <h1>Conditional Rendering</h1>
    <div class="container">
      <div>
        <h2>v-if is lazy</h2>
        <div>Handlebar template with v-if and v-else:
          <h1 v-if="ok">Yes</h1>
          <h1 v-else>No</h1>
        </div>
        <div>Conditional Groups with v-if on template
          <template v-if="ok">
            <h1>Title</h1>
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
          </template>
        </div>
        <div>use the v-else directive to indicate an “else block” for v-if
          <div v-if="Math.random() > 0.5">Now you see me</div>
          <div v-else>Now you don't</div>
        </div>
        <div>v-else-if serves as an “else if block” for v-if
          <div v-if="type === 'A'">A</div>
          <div v-else-if="type === 'B'">B</div>
          <div v-else-if="type === 'C'">C</div>
          <div v-else>Not A/B/C</div>
        </div>
        <div>Controlling Reusable Elements with key: inputs will be rendered from scratch each time you toggle
          <template v-if="loginType === 'username'">
            <label>Username</label>
            <input placeholder="Enter your username" key="username-input">
          </template>
          <template v-else>
            <label>Email</label>
            <input placeholder="Enter your email address" key="email-input">
          </template>
        </div>
      </div>
      <div>
        <h2>v-show always renders</h2>
        <h1 v-show="ok">Hello!</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConditionalRendering',
  data () {
    return {
      ok: true,
      loginType: 'username'
    }
  }
}
</script>

<style scoped>

</style>
