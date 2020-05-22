<template>
    <div>
        <form>
            <label for="selected">Select a destination: </label>
            <input type="text" name="selected" id="selected" list="destinations" v-model="selectedDestinationName" />
            <datalist id="destinations">
                <option v-for="(destination, index) in destinations" :key="index" :value="destination.englishName">{{ destination.englishName }}</option>
            </datalist>
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
        selectedDestination: function () {
            return this.destinations.find(destination => destination.englishName === this.selectedDestinationName);
        }
    }
}
</script>

<style>

</style>