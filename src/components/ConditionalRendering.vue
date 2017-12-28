<template>
  <div>
    <h1>Conditional Rendering</h1>
    <div class="container">
      <div>
        <h2>v-if is lazy</h2>
        <div>
          <h3>Handlebar template with v-if and v-else:</h3>
          <h1 v-if="ok">Yes</h1>
          <h1 v-else>No</h1>
        </div>
        <div>
          <h3>Conditional Groups with v-if on template</h3>
          <template v-if="ok">
            <h1>Title</h1>
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
          </template>
        </div>
        <div>
          <h3>Use the v-else directive to indicate an “else block” for v-if</h3>
          <div v-if="Math.random() > 0.5">Now you see me</div>
          <div v-else>Now you don't</div>
        </div>
        <div>
          <h3>v-else-if serves as an “else if block” for v-if</h3>
          <div v-if="type === 'A'">A</div>
          <div v-else-if="type === 'B'">B</div>
          <div v-else-if="type === 'C'">C</div>
          <div v-else>Not A/B/C</div>
        </div>
        <div>
          <h3>Controlling Reusable Elements with key: inputs will be rendered from scratch each time you toggle</h3>
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
