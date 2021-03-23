<template>
  <!-- Dynamic class adds complete to the class if project.complete is true-->
  <div class="project" :class="{complete: project.complete}">
    <div class="actions">
      <!-- Toggle showDetails for this component-->
      <h3 @click="showDetails = !showDetails">{{project.title}}</h3>
      <div class="icons">
        <!--
        The material font location is hosted on a Google server.
        It overrides the regular fonts by setting font-family to "Material Icons"
        the woff2 file is received with the src url and it contains the font family
        Instead of keying off one symbol per character like regular fonts,
        it keys off of groups of characters for a symbol.
        -->
        <span class="material-icons">edit</span>
        <span @click="deleteProject" class="material-icons">delete</span>
        <span @click="toggleComplete" class="material-icons check">done</span>
      </div>
    </div>
    <!-- Only show details if showDetails is true (defaults to false)-->
    <div v-if="showDetails">
      <p>{{project.details}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleProject",
  //accept the project argument
  props: ['project'],
  data(){
    return {
      showDetails: false,
      //several actions are going to rely on this endpoint
      //putting this here reduces the amount of times it has to be typed and makes
      //it easier to change
      uri: "http://localhost:3000/projects/" + this.project.id
    }
  },
  methods:{
    deleteProject(){
      //this works with the json-server
      fetch(this.uri, {
        method: 'DELETE'
      //Custom event. Personally I think this should be done with a call to the
      //data source to verify the action actually happened, but this design pattern
      //is based on making as few class to the 'server' as possible and updating the
      //local data structures instead
      }).then(() => this.$emit('deletethis', this.project.id))
        .catch(err => console.log(err));
    },
    toggleComplete(){
      fetch(this.uri, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({complete: !this.project.complete})
      }).then(() => this.$emit('completethis', this.project.id))
        .catch(err => console.log(err));
    }
  }
}
</script>

<style scoped>
.project{
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 5px rgba(0,0,0,0.05);
  border-left: 10px solid #e90074;
}
h3{
  cursor: pointer;
}
.actions{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.material-icons{
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}
.material-icons:hover{
  color: #777;
}
.project.complete{
  border-left: 10px solid #00ce89;
}

.project.complete .check{
  color: #00ce89;
}
</style>