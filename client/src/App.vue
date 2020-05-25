<template>
  <div id="app">
    <h1>Journey Around the Solar System</h1>
    <journey-form :all_destinations="all_destinations" :details="details"/>
    <journey-display />
  </div>
</template>

<script>
import JourneyForm from "@/components/JourneyForm.vue"
import JourneyDisplay from "@/components/JourneyDisplay.vue"

export default {
  name: "app",
  data: function() {
    return {
      all_destinations: [],
      details: []
    };
  },
  methods: {
    fetchData() {
      fetch("http://localhost:3000/api/details")
      .then(response => response.json())
      .then(details => this.details = details);
    }
  },
  mounted: function() {
    this.fetchData();
    fetch("https://api.le-systeme-solaire.net/rest/bodies/")
      .then(res => res.json())
      .then(data => (this.all_destinations = data.bodies));
    
  },
  components: {
    "journey-form": JourneyForm,
    "journey-display": JourneyDisplay
  }
};
</script>

<style>
</style>