<template>
    <div id="info-box">
        <h2>{{englishName}}</h2>
        <ul>
            <li>Density: {{density}}</li>
            <li>Gravity: {{gravity}}</li>
            <li v-if="discoveredBy">Discovered by: {{discoveredBy}}</li>
            <li v-if="discoveryDate">Discovery date: {{discoveryDate}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "destination-details",
    props: ["destination"],
    data: function(){
        return{
            englishName: this.destination.englishName,
            density: this.destination.density,
            gravity: this.destination.gravity,
            discoveredBy: this.destination.discoveredBy,
            discoveryDate: this.destination.discoveryDate
        }
    }

}
</script>

<style>

    #info-box {
        border: 1px solid gray;
    }

</style>