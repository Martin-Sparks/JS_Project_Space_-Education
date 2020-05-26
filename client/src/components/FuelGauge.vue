<template lang="html">
    <div>
        <GChart
            :settings="{ packages: ['gauge'] }"
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
                chart: {
                    title: 'Company Performance',
                    subtitle: 'Sales, Expenses, and Profit: 2014-2017',
                }
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