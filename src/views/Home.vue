<template>
  <div class="home">
    <!-- Only render this div if there is more than 0 projects -->
    <div v-if="projects.length">
      <!-- For each project in the projects array - primary key is the id-->
      <div v-for="project in projects" :key="project.id">
        <p>{{project.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {},
  data(){
    return{
      projects: []
    }
  },
  //mounted is called as soon as this component has mounted the DOM
  mounted(){
    //use fetch API
    //This is where the json-server is rendering the JSON file. port 3000 is the default port when
    //you start json-server without a --port argument.
    fetch('http://localhost:3000/projects')
        //on receiving the reply, parse it as JSON
    .then(res => res.json())
        //on successful parsing JSON
        //populate local data object with the results of the call to json-server
    .then(data => this.projects = data)
        //if any error is encountered in this process
    .catch(err => console.log(err))
  }
}
</script>
