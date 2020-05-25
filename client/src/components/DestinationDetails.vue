<template>
    <div id="info-box">
        <h2>{{englishName}}</h2>
        <ul>
            <li>Density: {{density}}</li>
            <li>Gravity: {{gravity}}</li>
            <li v-if="discoveredBy">Discovered by: {{discoveredBy}}</li>
            <li v-if="discoveryDate">Discovery date: {{discoveryDate}}</li>
            <li v-if="mythology">Mythology: {{mythology}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "destination-details",
    props: ["destination"],
    data: function(){
        return{
            englishName: this.destination.api.englishName,
            density: this.destination.api.density,
            gravity: this.destination.api.gravity,
            discoveredBy: this.destination.api.discoveredBy,
            discoveryDate: this.destination.api.discoveryDate
        }
    },
    computed: {
        mythology: function () {
            if (this.destination.db) {
                return this.destination.db.mythology;
            }
        }
    }
}
</script>

<style>

    #info-box {
        border: 1px solid gray;
    }

</style>