<template>
  <div id="info-box">
    <div id="text">
      <h2>{{ englishName }} - {{ symbol }}</h2>
      <br>
      <ul>
        <li>
          <span class="label">Mean Diameter: </span>{{ diameter }} kilometers
        </li>
        <li>
          <span class="label">Gravity: </span>{{ gravity }} m/s per second
        </li>
        <li><span class="label">Escape Velocity: </span>{{ escape }} Meters per second</li>
        <li>
          <span class="label">Density: </span>{{ density }} grams per cubic cm
        </li>
        <li v-if="moonCount">
          <span class="label">Number Of Moons: </span>{{ moonCount }}
        </li>
        <li v-if="discoveredBy">
          <span class="label">Discovered By: </span>{{ discoveredBy }}
        </li>
        <li v-if="discoveryDate">
          <span class="label">Discovery Date: </span>{{ discoveryDate }}
        </li>
        <br>
        <li v-if="description">
          <span class="label">Description: </span>{{ description }}
        </li>
        <br>
        <li v-if="mythology">
          <span class="label">Mythology: </span>{{ mythology }}
        </li>
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
      escape: this.destination.api.escape,
      diameter: Math.floor(this.destination.api.meanRadius * 2),
      discoveredBy: this.destination.api.discoveredBy,
      discoveryDate: this.destination.api.discoveryDate,
    };
    console.log(this.moonCount);
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
    symbol: function() {
      if (this.destination.db) {
        return this.destination.db.symbol;
      }
    },
    moonCount: function(){
      if (this.destination.api.moons) {
          return this.destination.api.moons.length;
      }
    }
  }
};
</script>

<style>
#info-box {
  border: 5px solid gray;
  display: flex;
  background-color: #ffffff33;
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

.label {
  font-weight: bolder;
  font-style: italic;
  text-decoration: underline;
}
</style>
