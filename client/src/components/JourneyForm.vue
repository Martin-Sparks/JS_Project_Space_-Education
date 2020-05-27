<template>
  <div>

    <form v-on:submit.prevent="handleSubmit" class="top-info" id="top-info">
      <label for="select">Select a destination: </label>
      <select id="select" v-model="selectedDestinationName">
        <option
          v-for="(destination, index) in filterPlanets"
          :key="index"
          :value="destination.englishName"
          >{{ destination.englishName }}</option
        >
      </select>
      <input class="btn" type="submit" value="Add to Journey" />
    </form>

    <div id="banner">
      <h2>
        You are currently on {{ currentLocationName }}.
        <span v-if="selectedDestination">
          {{ selectedDestination.englishName }} is
          {{ distanceToDestination | format_km }} away! 🚀
        </span>
      </h2>
    </div>

    <div class="fuel">
      <fuel-gauge :fuel="fuel"></fuel-gauge>
    </div>

  </div>
</template>

<script>
import { eventBus } from "@/main.js";
import FuelGauge from "@/components/FuelGauge.vue";

export default {
  name: "journey-form",
  props: ["all_destinations", "details"],
  data: function() {
    return {
      currentLocationName: "Earth",
      selectedDestinationName: "",
      fuel: 1000,
    };
  },
  computed: {
    // selectedDestinationName is only the name - this function will retrieve the full Object
    selectedDestination: function() {
      if (this.selectedDestinationName) {
        return this.all_destinations.find(
          (destination) =>
            destination.englishName === this.selectedDestinationName
        );
      }
    },
    selectedDestinationDetails: function() {
      if (this.selectedDestination) {
        return this.details.find(
          (destination) => destination.api_id === this.selectedDestination.id
        );
      }
    },
    filterPlanets: function() {
      return this.all_destinations.filter(
        (destination) =>
          destination.englishName != this.currentLocationName &&
          this.hasDetails(destination)
      );
    },
    currentLocation: function() {
      return this.all_destinations.find(
        (destination) => destination.englishName === this.currentLocationName
      );
    },
    currentLocationDetails: function() {
      return this.details.find(
        (destination) => destination.api_id === this.currentLocation.id
      );
    },
    distanceToDestination: function() {
      if (this.selectedDestination) {
        return this.currentLocationDetails.distance_to[
          this.selectedDestination.id
        ];
      }
    },
    fuelNeeded: function() {
      if (this.selectedDestination) {
        // You can travel 100 million km on 1 unit of fuel
        return Math.floor(this.distanceToDestination / 50000000);
      }
    },
  },
  methods: {
    handleSubmit: function() {
      if (this.fuelNeeded <= this.fuel) {
        eventBus.$emit("addToJourney", {
          api: this.selectedDestination,
          db: this.selectedDestinationDetails,
          distance: this.distanceToDestination,
        });
        this.fuel -= this.fuelNeeded;
        this.currentLocationName = this.selectedDestinationName;
      }
      this.selectedDestinationName = "";
    },
    hasDetails: function(destination) {
      return this.details.some((details) => details.api_id === destination.id);
    },
  },
  components: {
    "fuel-gauge": FuelGauge,
  },
};
</script>

<style>
.top-info .background {
  background-color: black;
  opacity: 35%;
}

#top-info {
  color: white;
  opacity: 100%;
  background-color: none;
  display: inline-flex;
  margin: 20px;
}

.info-box .background {
  background-color: black;
  opacity: 35%;
}

#info-box {
  color: white;
  opacity: 100%;
  background-color: none;
}

.btn {
  display: inline-block;
  padding: 20px 30px;
  background: var(--primary-color);
  color: #fff;
  border-radius: 5px;
  border: solid #fff 1px;
  opacity: 30%;
  position: relative;
  bottom: 30px;
  left: 20px;
  cursor: pointer;
}

#select {
  position: relative;
  display: inline-block;
  background-color: black;
  opacity: 30%;
  min-width: 160px;
  max-height: 40px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 10px 10px;
  margin: -4px 5px 0px 10px;
  border-radius: 5px;
  /* z-index: 1; */
}

.fuel {
  position: fixed;
  top: 10px;
  opacity: 70%;
  height: 30px;
  z-index: -1;
}

#banner {
  color: white;
  text-shadow: 4px 4px 3px #13131388;
}
</style>
