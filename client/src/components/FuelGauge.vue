<template lang="html">
    <div>
        <GChart
            :settings="{ packages: ['corechart', 'gauge'] }"
            type="Gauge"
            :data="chartData"
            :options="chartOptions"
        />
    </div>
</template>

<script>
import { GChart } from 'vue-google-charts'

export default {
    name: 'fuel-gauge',
    props: ['fuel'],
    data: function () {
        return {
            chartOptions: {
                redFrom: 0,
                redTo: 25,
                yellowFrom: 25,
                yellowTo: 75,
                minorTicks: 10,
                max: 500
            }
        }
    },
    computed: {
        chartData: function () {
            return [
                ['Label', 'Value'],
                ['Fuel', this.fuel]
            ];
        }
    },
    components: {
        GChart
    }
}
</script>

<style>

</style>