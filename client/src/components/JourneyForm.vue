<template>
  <div>
    <header>
      <h1>Solar System Explorer</h1>
    </header>

    <div id="form">
      <fuel-gauge :fuel="fuel" id="gauge"></fuel-gauge>
      <form v-on:submit.prevent="handleSubmit">
        <select id="select" v-model="selectedDestinationName">
          <option value="" disabled>Select Destination</option>
          <option
            v-for="(destination, index) in filterPlanets"
            :key="index"
            :value="destination.englishName"
            >{{ destination.englishName }}</option>
        </select>
        <input class="btn" type="submit" value="Add to Journey" />
      </form>
    </div>

    <div id="banner">
      <h2>
        You are currently on {{ currentLocationName }}.
        <span v-if="selectedDestination">
          {{ selectedDestination.englishName }} is
          {{ distanceToDestination | format_km }} away! 🚀
        </span>
      </h2>
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
      fuel: 600,
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
        // You can travel 40 million km on 1 unit of fuel
        return Math.floor(this.distanceToDestination / 40000000);
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
#form {
  display: flex;
  justify-content: center;
  align-items: center;
}

#info-box {
  color: white;
  opacity: 100%;
  background-color: none;
}

select, input {
  font-family: inherit;
  font-size: 100%;
  background: var(--primary-color);
  opacity: 80%;
  color: #ffffffbb;
  border-radius: 5px;
  border: solid #ffffffbb 1px;
  cursor: pointer;
  height: 50px;
  width: 180px;
  margin: 20px;
  text-align: center;
}

#banner {
  color: white;
  text-shadow: 4px 4px 3px #13131388;
  margin: 10px;
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  font-family: "Montserrat", sans-serif;
  color: white;
  text-shadow: 4px 4px 3px #13131388;
  font-weight: bolder;
}

#gauge {
  opacity: 70%;
}
</style>
