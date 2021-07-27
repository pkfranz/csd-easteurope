
Highcharts.chart('container', {
    chart: {
        type: 'bar',
        plotBackgroundColor: '#FAFAFA',
        backgroundColor: '#FAFAFA'
    },
    colors: ['#283B53', '#669DA1'],
    title: {
        text: 'Project Status'
    },
    subtitle: {
        text: 'Breaking down progress on Chinese-funded projects'
    },
    xAxis: {
        categories: [
'Completed',
'Under Construction',
'Planning and Permit Stage',
'Delayed/Cancelled'],
labels: {
    overflow: 'justify',
    style: {
            fontWeight: 'bold',
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
      text: "Center for the Study of Democracy"
    },
    series: [{
        name: 'Projects',
        data: [17, 16, 35, 12]
    }]
});
