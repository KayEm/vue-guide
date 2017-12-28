<template>
  <div>
    <h1>Conditional Rendering</h1>
    <div class="container">
      <div class="card">
        <h2 class="card-header">v-if is lazy</h2>
        <div class="card-body">
          <div>
            <p class="lead">Handlebar template with v-if and v-else:</p>
            <h1 v-if="ok">Yes</h1>
            <h1 v-else>No</h1>
          </div>
          <div>
            <p class="lead">Conditional Groups with v-if on template</p>
            <template v-if="ok">
              <h1>Title</h1>
              <p>Paragraph 1</p>
              <p>Paragraph 2</p>
            </template>
          </div>
          <div>
            <p class="lead">Use the v-else directive to indicate an “else block” for v-if</p>
            <div v-if="Math.random() > 0.5">Now you see me</div>
            <div v-else>Now you don't</div>
          </div>
          <div>
            <p class="lead">v-else-if serves as an “else if block” for v-if</p>
            <div v-if="type === 'A'">A</div>
            <div v-else-if="type === 'B'">B</div>
            <div v-else-if="type === 'C'">C</div>
            <div v-else>Not A/B/C</div>
          </div>
          <div>
            <p class="lead">Controlling Reusable Elements with key: inputs will be rendered from scratch each time you toggle</p>
            <template v-if="loginType === 'username'">
              <label>Username</label>
              <input class="form-control" placeholder="Enter your username" key="username-input">
            </template>
            <template v-else>
              <label>Email</label>
              <input class="form-control" placeholder="Enter your email address" key="email-input">
            </template>
          </div>
        </div>
      </div>
      <div class="card">
        <h2 class="card-header">v-show always renders</h2>
        <div class="card-body">
          <h1 v-show="ok">Hello!</h1>
        </div>
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
