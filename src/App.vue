<!-- This is the root as defined by main.js -->
<template>
  <Nav />
  <router-view/>
</template>
<script>
import Nav from "@/components/Nav";

export default{
  components: {Nav}
}

</script>
<style>
/*Added basic CSS to general app*/
/*Global styles*/
body{
  background-color: #f2f2f2;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: 0 auto;
  color: #555;
}

*{
  /* webapps shouldn't allow you to highlight things */
  user-select: none;
}
</style>
