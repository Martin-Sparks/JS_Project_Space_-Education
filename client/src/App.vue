<template>
  <div id="appbody">
    <section class="showcase">
      <div class="video-container">
        <video
          src="https://traversymedia.com/downloads/video.mov"
          autoplay
          muted
          loop
        ></video>
      </div>
    </section>

    <div id="app">
      <div class="header">
        <h1>Journey Around the Solar System</h1>
      </div>
      <div id="journey-form">
        <journey-form :all_destinations="all_destinations" :details="details" />
      </div>
      <div id="JD">
        <journey-display />
      </div>
    </div>
  </div>
</template>

<script>
import JourneyForm from "@/components/JourneyForm.vue";
import JourneyDisplay from "@/components/JourneyDisplay.vue";

export default {
  name: "app",
  data: function() {
    return {
      all_destinations: [],
      details: [],
    };
  },
  methods: {
    fetchData() {
      fetch("http://localhost:3000/api/details")
        .then((response) => response.json())
        .then((details) => (this.details = details));
    },
  },
  mounted: function() {
    this.fetchData();
    fetch("https://api.le-systeme-solaire.net/rest/bodies/")
      .then((res) => res.json())
      .then((data) => (this.all_destinations = data.bodies));
  },
  components: {
    "journey-form": JourneyForm,
    "journey-display": JourneyDisplay,
  },
};
</script>

<style>
#appbody {
  font-family: "Roboto", sans-serif;
}

@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap");

:root {
  --primary-color: #3a4052;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Open Sans", sans-serif;
  line-height: 1.5;
  background-color: black;
  background-attachment: fixed;
}

a {
  text-decoration: none;
  color: var(--primary-color);
}

h1 {
  font-weight: 300;
  font-size: 60px;
  line-height: 1.2;
  margin-bottom: 15px;
}

.showcase {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  padding: 0 20px;
}

.video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-attachment: fixed;
}

.video-container video {
  min-width: 100%;
  min-height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
}

.video-container:after {
  content: "";
  z-index: 1;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
}

.content {
  z-index: 2;
}

.btn {
  display: inline-block;
  padding: 10px 30px;
  background: var(--primary-color);
  color: #fff;
  border-radius: 5px;
  border: solid #fff 1px;
  margin-top: 25px;
  opacity: 0.7;
}

.header {
  font-family: "Montserrat", sans-serif;
  z-index: 1;
  position: relative;
  bottom: 680px;
  color: whitesmoke;
  text-align: center;
  text-shadow: 4px 4px 3px #13131388;
  font-weight: bolder;
}

#journey-form {
  position: relative;
  bottom: 680px;
  z-index: 1;
  text-align: center;
}

html,
body {
  background-attachment: fixed;
}
</style>
