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
                redTo: 99,
                yellowFrom: 100,
                yellowTo: 250,
                minorTicks: 10,
                max: 1000,
                height: 500,
                width: 150
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