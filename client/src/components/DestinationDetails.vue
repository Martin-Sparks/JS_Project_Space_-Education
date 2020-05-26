<template>
  <div id="info-box">
    <div id="text">
      <h2>{{ englishName }}</h2>
      <ul>
        <li><span>Density: </span>{{ density }}</li>
        <li><span>Gravity: </span>{{ gravity }}</li>
        <li v-if="discoveredBy">
          <span>Discovered by: </span>{{ discoveredBy }}
        </li>
        <li v-if="discoveryDate">
          <span>Discovery date: </span>{{ discoveryDate }}
        </li>
        <li v-if="description"><span>Description: </span>{{ description }}</li>
        <li v-if="mythology"><span>Mythology: </span>{{ mythology }}</li>
      </ul>
    </div>
    <img :src="destination.db.photo" />
  </div>
</template>

<script>
export default {
  name: "destination-details",
  props: ["destination"],
  data: function() {
    return {
      englishName: this.destination.api.englishName,
      density: this.destination.api.density,
      gravity: this.destination.api.gravity,
      discoveredBy: this.destination.api.discoveredBy,
      discoveryDate: this.destination.api.discoveryDate,
    };
  },
  computed: {
    description: function() {
      if (this.destination.db) {
        return this.destination.db.description;
      }
    },

    mythology: function() {
      if (this.destination.db) {
        return this.destination.db.mythology;
      }
    },
  },
};
</script>

<style>
#info-box {
  border: 5px solid gray;
  display: flex;
  background-color: #ffffff66;
  align-items: center;
  margin: 20px;
}

ul {
  list-style: none;
}

img {
  margin: 20px;
  max-width: 300px;
  width: auto;
  height: auto;
}

#text {
  margin: 20px;
}

span {
  font-weight: bolder;
  font-style: italic;
  text-decoration: underline;
}
</style>
