
Highcharts.chart('container', {
    chart: {
        type: 'bar',
        height: 500
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
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,

        labels: {
            overflow: 'justify'
        },
        title:{
        text:null
        }
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
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
      href: "http://journals.sagepub.com/doi/pdf/10.1177/2053168016658919",
      text: "Allee & Lugg 2016 | CPTPP text | TPP text"
    },
    series: [{
        name: 'Projects',
        data: [17, 16, 35, 12]
    }]
});
