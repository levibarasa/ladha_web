<template>
    <apexchart type="bar" width="100%" :options="chartOptions" :series="series"></apexchart>
</template>
<script>
export default {
    name: "ApexBar",
    props: {
        unit: {
            type: String,
            default: "Ksh"
        },
        api_series: {
            type: Array,
            default: []
        },
        api_categories: {
            type: Array,
            default: []
        },
        colors: {
            type: Array,
            default: [],
        }
    },
    data(){
        return {
            series: this.api_series,
            chartOptions: {
                chart: {
                    type: 'bar',
                    height: 200
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                        endingShape: 'rounded'
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                xaxis: {
                    categories: this.api_categories,
                },
                yaxis: {
                    title: {
                        text: this.unit+' (0.00)'
                    }
                },
                fill: {
                    opacity: 1,
                    colors: this.colors
                    //colors: ['#7abcf1','#fa7ea8']
                },
                grid: {
                    xaxis: {
                        lines: {
                            show: false
                        }
                    },   
                    yaxis: {
                        lines: {
                            show: false
                        }
                    },
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                           return val + ""
                        }
                    }
                }
            },
        }
    }
}
</script>