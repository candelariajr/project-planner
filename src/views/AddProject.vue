<template>
  <!-- add an event listener and prevent the default form action (submit) from happening-->
  <form @submit.prevent="handleSubmit">
    <label for="title">Title</label>
    <!-- Bind the inputs of these fields to the data object in real time-->
    <input id="title" type="text" required v-model="title">
    <label for="details">Details</label>
    <textarea id="details" required v-model="details"></textarea>
    <button>Add Project</button>
  </form>
</template>

<script>
export default {
  name: "AddProject",
  data(){
    return {
      title: '',
      details: ''
    }
  },
  methods:{
    handleSubmit(){
      //json-server adds ids manually
      let project = {
        title: this.title,
        details: this.details,
        complete: false
      };
      fetch('http://localhost:3000/projects', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(project)
      }).then(() => {
        //on completed submit, move the user to the home screen to see the added project
        this.$router.push('/');
      }).catch(err => console.log(err));
    }
  }
}
</script>

<style scoped>
form{
  background: white;
  padding: 20px;
  border-radius: 10px;
}
label{
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input{
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
textarea{
  border: 1px solid black;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}
form button{
  display: block;
  margin: 20px auto 0;
  background: #00ce89;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
}

</style>