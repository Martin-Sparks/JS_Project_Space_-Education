<template lang="html">
  <div id="journeyDisplay">
    <h2 id="distance">You have travelled {{ totalDistance | format_km }}.</h2>
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
  color: rgb(80, 69, 69);
  padding: 0;
  position: relative;
  bottom: 700px;
  z-index: 2;
  margin: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
}

#distance {
  color: white;
  text-shadow: 4px 4px 3px #13131388;
}
</style>
