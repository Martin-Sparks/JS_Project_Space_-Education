<template>
  <div id="app">
    <h1>Journey Around the Solar System </h1>
    <p>{{ destinations }}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      destinations: []
    }
  },
  mounted: function () {
    fetch('https://api.le-systeme-solaire.net/rest/bodies/')
      .then(res => res.json())
      .then(data => this.destinations = data);
  }
}
</script>

<style>

</style>