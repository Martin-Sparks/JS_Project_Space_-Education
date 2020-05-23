<template>
    <div>
        <form>
            <label for="selected">Select a destination: </label>
            <input type="text" name="selected" id="selected" list="destinations" v-model="selectedDestinationName" />
            <datalist id="destinations">
                <option v-for="(destination, index) in destinations" :key="index" :value="destination.englishName">{{ destination.englishName }}</option>
            </datalist>
            <div v-if="selectedDestinationName">
                <p>{{ selectedDestination.englishName }}</p>
                <input type="submit" value="Add to Journey" />
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'journey-form',
    props: ['destinations'],
    data: function () {
        return {
            selectedDestinationName: ""
        }
    },
    computed: {
        // selectedDestinationName is only the name - this function will retrieve the full Object
        selectedDestination: function () {
            return this.destinations.find(destination => destination.englishName === this.selectedDestinationName);
        }
    }
}
</script>

<style>

</style>