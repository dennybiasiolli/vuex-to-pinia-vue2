<template>
  <div id="app">
    <p>
      <router-link to="/">Home Page</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/counter">Counter</router-link>
      |
      <router-link to="/todo-list">To-Do List</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
