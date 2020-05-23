<template>
    <div>
        {{englishName}}
    </div>
</template>

<script>
export default {
    name: "destination-details",
    props: ["destination"],
    data: function(){
        return{
            englishName: this.destination.englishName
        }
    }

}
</script>

<style>

</style>