<template>
    <div>
        <form v-on:submit.prevent="handleSubmit">
            <label for="selected">Select a destination: </label>
            <input type="text" name="selected" id="selected" list="destinations" v-model="selectedDestinationName" />
            <datalist id="destinations">
                <option v-for="(destination, index) in all_destinations" :key="index" :value="destination.englishName">{{ destination.englishName }}</option>
            </datalist>
            <div v-if="selectedDestinationName">
                <p>{{ selectedDestination.englishName }}</p>
                <input type="submit" value="Add to Journey"/>
            </div>
        </form>
    </div>
</template>

<script>
import { eventBus } from '@/main.js'


export default {
    name: 'journey-form',
    props: ['all_destinations'],
    data: function () {
        return {
            selectedDestinationName: ""
        }
    },
    computed: {
        // selectedDestinationName is only the name - this function will retrieve the full Object
        selectedDestination: function () {
            return this.all_destinations.find(destination => destination.englishName === this.selectedDestinationName);
        }
    },
    methods: {
        handleSubmit: function(){
            eventBus.$emit('addToJourney', this.selectedDestination);
        }
    }
}
</script>

<style>

</style>