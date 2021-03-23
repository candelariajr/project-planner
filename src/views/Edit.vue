<template>
  <form @submit.prevent="saveProject">
    <label for="title">Title</label>
    <!-- Bind the inputs of these fields to the data object in real time-->
    <input id="title" type="text" required v-model="title">
    <label for="details">Details</label>
    <textarea id="details" required v-model="details"></textarea>
    <button>Save Project</button>
  </form>
</template>

<script>
export default {
  name: "Edit",
  props: ['id'],
  data(){
    return {
      title: '',
      details: '',
      uri: "http://localhost:3000/projects/" + this.id
    }
  },
  mounted(){
    fetch(this.uri)
      .then(res => res.json())
      .then(data =>  {
        //this sets the local model = to what was received from the GET request
        this.title = data.title;
        this.details = data.details;
      })
      .catch(err => console.log(err));
  },
  methods:{
    saveProject(){
      fetch(this.uri, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title: this.title, details: this.details})
      }).then(() => {
        this.$router.push('/');
      }).catch(err => console.log(err));
    }
  }
}
</script>

<style scoped>

</style>