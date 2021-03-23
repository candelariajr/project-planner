<template>
  <nav class="main-nav">
    <!-- Link to routes by name instead of hard-wired hyperlink-->
    <!-- Note: when Vue outputs these to the DOM, they are anchor tags-->
    <router-link :to="{name: 'Home'}">Projects</router-link>
    <router-link :to="{name: 'AddProject'}">New Project</router-link>
  </nav>
</template>

<script>
export default {
name: "Nav"
}
</script>

<style scoped>
.main-nav{
  text-align: center;
  margin: 40px auto;
}
.main-nav a {
  display: inline-block;
  text-decoration: none;
  margin: 0 10px;
  color: #999;
  font-size: 18px;
}
a.router-link-active{
  border-bottom: 2px solid #00ce89;
  padding-bottom: 4px;
}
</style>