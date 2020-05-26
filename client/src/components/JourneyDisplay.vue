<template lang="html">
  <div id="journeyDisplay">
    <p id="distance">Total distance traveled: {{ totalDistance | format_km }}.</p>
    <destination-details
      v-for="(destination, index) in journey"
      :key="index"
      :destination="destination"
    />
  </div>
</template>

<script>
import { eventBus } from "../main.js";
import DestinationDetails from "./DestinationDetails.vue";

export default {
  name: "journey-display",
  data() {
    return {
      journey: [],
      totalDistance: 0,
    };
  },
  components: {
    "destination-details": DestinationDetails,
  },
  mounted() {
    eventBus.$on("addToJourney", (destination) => {
      this.journey.push(destination);
      this.totalDistance += destination.distance;
    });
  },
};
</script>

<style>
#journeyDisplay {
  /* border: 20px solid red; */
  color: rgb(80, 69, 69);
  padding: 0;
  position: relative;
  bottom: 700px;
  z-index: 2;
  margin: 40px;
  display: inline-flex;
  flex-wrap: wrap;
  list-style: none;
  
}

#distance {
    color: white;
}
</style>
