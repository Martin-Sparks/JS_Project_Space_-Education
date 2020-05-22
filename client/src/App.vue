<template>
  <div id="app">
    <h1>Journey Around the Solar System</h1>
    <journey-form :destinations="destinations"></journey-form>
  </div>
</template>

<script>
import JourneyForm from "@/components/JourneyForm.vue"

export default {
  name: "app",
  data: function() {
    return {
      destinations: []
    };
  },
  mounted: function() {
    fetch("https://api.le-systeme-solaire.net/rest/bodies/")
      .then(res => res.json())
      .then(data => (this.destinations = data.bodies));
  },
  components: {
    "journey-form": JourneyForm
  }
};
</script>

<style>
</style>