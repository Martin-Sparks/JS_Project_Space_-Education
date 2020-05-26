<template>
  <div>
    <div id="test">
            <div>
            <p>You are currently on {{currentLocationName}}.</p>
            </div>
            
      <form v-on:submit.prevent="handleSubmit">
        <label for="select">Select a destination:</label>
        <select id="select" v-model="selectedDestinationName">
          <option
            v-for="(destination, index) in filterPlanets"
            :key="index"
            :value="destination.englishName"
          >{{ destination.englishName }}</option>
        </select>
         <input type="submit" value="Add to Journey" />
      </form>

                  <!-- below provides further details -->
            <div v-if="selectedDestination">
                <p>{{ selectedDestination.englishName }} is {{ distanceToDestination | format_km }} away.</p>
                <p>Learn more by taking a journey to visit this destination.</p>
            </div>
    
        <div id="photos-grid">
            <location-photos :currentLocation="currentLocation"></location-photos>
        </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";

import LocationPhotos from "@/components/LocationPhotos.vue";

export default {
  name: "journey-form",
  props: ["all_destinations", "details"],
  data: function() {
    return {
      currentLocationName: "Earth",
      selectedDestinationName: "",
      fuel: 500
    };
  },
  computed: {
    // selectedDestinationName is only the name - this function will retrieve the full Object
    selectedDestination: function() {
      if (this.selectedDestinationName) {
        return this.all_destinations.find(
          destination =>
            destination.englishName === this.selectedDestinationName
        );
      }
    },
    selectedDestinationDetails: function() {
      if (this.selectedDestination) {
        return this.details.find(
          destination => destination.api_id === this.selectedDestination.id
        );
      }
    },
    filterPlanets: function() {
      return this.all_destinations.filter(
        destination =>
          destination.isPlanet &&
          destination.englishName != this.currentLocationName &&
          this.hasDetails(destination)
      );
    },
    currentLocation: function() {
      return this.all_destinations.find(
        destination => destination.englishName === this.currentLocationName
      );
    },
    currentLocationDetails: function() {
      return this.details.find(
        destination => destination.api_id === this.currentLocation.id
      );
    },
    distanceToDestination: function() {
      if (this.selectedDestination) {  
        return this.currentLocationDetails.distance_to[
            this.selectedDestination.id
        ];
      }
    },
    fuelNeeded: function () {
      if (this.selectedDestination) {  
        // You can travel 100 million km on 1 unit of fuel
        return Math.floor(this.distanceToDestination/100000000);
      }
    }
  },
  methods: {
    handleSubmit: function() {
      if (this.fuelNeeded <= this.fuel) {
        eventBus.$emit("addToJourney", {
            api: this.selectedDestination,
            db: this.selectedDestinationDetails,
            distance: this.distanceToDestination
        });
        this.fuel -= this.fuelNeeded;
        this.currentLocationName = this.selectedDestinationName;
      }
      this.selectedDestinationName = "";
    },
    hasDetails: function(destination) {
      return this.details.some(details => details.api_id === destination.id);
    }
  },
  components: {
    "location-photos": LocationPhotos
  }
};
</script>

<style>
    #test{
        border: 10px blueviolet solid;
    }
</style>