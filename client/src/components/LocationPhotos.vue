<template>
  <div> 
    <div v-for=" (photo, index) in mappedPhotos" :key="index" :value="photo" >
      <img :src="photo" />
    </div>
  </div> 
</template>

<script>
import { eventBus } from "@/main.js";

export default {
  name: "location-photos",
  props: ["currentLocation"],
  data: function() {
    return {
      photos: []
    };
  },
  methods: {
    fetchPhotos: function(englishName) {
      fetch(`https://images-api.nasa.gov/search?q=${englishName}`)
        .then(res => res.json())
        .then(photos => (this.photos = photos.collection.items));
    }
  },

  computed: {
    mappedPhotos: function() {
      return this.photos.map(photo => photo.links[0].href).slice(0,9);
    }
  },

  mounted: function() {
    eventBus.$on("addToJourney", destination =>
      this.fetchPhotos(destination.api.englishName)
    );
  }
};
</script>

<style>
</style>