Highcharts.chart('container', {
    chart: {
        type: 'bar',
        plotBackgroundColor: '#389599',
        backgroundColor: '#389599'
    },
    colors: ['#283B53', '#669DA1'],
    title: {
        text: '<strong>Project Status</strong>',
        style: {
    color: '#FAFAFA',
    fontWeight: 'bold'
        }
    },
    subtitle: {
        text: 'Breaking down progress on Chinese-funded projects',
        style: {
    color: '#FAFAFA',
    fontWeight: 'bold'
        }
    },
    xAxis: {
        categories: [
          'Completed',
          'Under Construction',
          'Planning and Permit Stage',
          'Delayed/Cancelled'
        ],
    labels: {
      overflow: 'justify',
      style: {
            fontWeight: 'bold',
            color: '#FAFAFA',
            fontSize: 16
            }
    },
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        labels: {
            overflow: 'justify',
            style: {
                    fontWeight: 'bold',
                    color: '#FAFAFA',
                    fontSize: 16
                }
        },
        title:{
        text:null
        }
    },
    plotOptions: {
      series: {
    events: {
        legendItemClick: function() {
          return false;
        }
    }
},
        bar: {
          dataLabels: {
            enabled: true,
            style: {
                        fontWeight: 'bold',
                        fontSize: 16
                    }
          }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'center',
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    },
    credits: {
      enabled: true,
      href: false,
      text: "<span style='color: #FAFAFA;'>Center for the Study of Democracy</span>"
    },
    exporting: {
       buttons: {
           contextButton: {
               text: '<strong>Share this chart</strong>'
           }
       }
   },
    navigation: {
        buttonOptions: {
            align: 'left',
            buttonSpacing: 5,
            symbolStrokeWidth: 2
        }
    },
    series: [{
        name: 'Projects',
        data: [17, 16, 35, 12]
    }]
});
