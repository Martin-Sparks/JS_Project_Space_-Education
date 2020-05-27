<template>
<!-- Ultimately unused, as random photos selected from the API were not as relevant as we had hoped -->
  <div id="photo-section">
    <img :src="randomPhoto" />
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
      return this.photos.map(photo => {
        const links = photo.links
        if (links) {
          return links[0].href;
        }
      });
    },
    randomPhoto: function() {
      return this.mappedPhotos[Math.floor(Math.random() * this.mappedPhotos.length)];
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
#photo-section {
  /* border: 3px solid blue; */
  
  display: flex;
 
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}


img {
  margin: 0px;
  padding: 0px;
  height: 200px;
  
}
</style>

   