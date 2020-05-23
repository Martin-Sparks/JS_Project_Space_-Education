<template lang="html">
    <div id="journeyDisplay">
        <destination-details v-for="(destination, index) in journey" :key="index" :destination="destination" />
    </div>
</template>

<script>
import { eventBus } from '../main.js';
import DestinationDetails from './DestinationDetails.vue';

export default {
    name: "journey-display",
    data() {
        return {
            journey: []
        }
    },
    components: {
        'destination-details': DestinationDetails
    },
    mounted() {
        eventBus.$on('addToJourney', destination => this.journey.push(destination))
        
    }

}
</script>

<style>

