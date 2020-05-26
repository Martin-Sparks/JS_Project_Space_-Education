<template>
  <div id="app">
    <div class="header">
      <h1>Journey Around the Solar System</h1>
    </div>
    <journey-form id="journey-form" :all_destinations="all_destinations" :details="details" />
    <div id="JD">
    <journey-display />
    </div>
  </div>
</template>

<script>
import JourneyForm from "@/components/JourneyForm.vue";
import JourneyDisplay from "@/components/JourneyDisplay.vue";

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
        .then(details => (this.details = details));
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
#app {
  border: 10px solid green;
}

.header {
  background-color: yellow;
}

#journey-form {
  border: 10px black solid ;
}

#JD {
  border: 10px blue solid;
}
</style>