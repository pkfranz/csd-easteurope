Highcharts.setOptions({
  lang: {
    thousandsSep: ","
  },
    colors: [
      '#00d3a9',
      '#5fd09a',
      '#6fa878',
      '#93b882',
      '#b5c88f',
      '#d6d8a0',
      '#f6e8b5',
      '#f0d096',
      '#ecb67b',
      '#e89b67',
      '#e47f59',
      '#dd6052',
      '#d43d51'
    ]
});

Highcharts.chart("container", {
  chart: {
    animation: true,
    plotBackgroundColor: '#389599',
    backgroundColor: '#389599',
    type: "pie"
  },
  title: {
    text: ""
  },
  subtitle: {
    text: ""
  },
  exporting: {
    sourceWidth: 2000,
    sourceHeight: 1000,
    scale: 4,
     buttons: {
         contextButton: {
             text: '<strong>Share this chart</strong>',
             menuItems: ['downloadPNG', 'downloadSVG', 'downloadPDF', '']
         }
     }
 },
  navigation: {
      buttonOptions: {
          align: 'left',
          symbolStrokeWidth: 2
      }
  },
  plotOptions: {
    pie: {
      states: {
        inactive: {
          opacity: 0.75
        }
      },
      dataLabels: {
        enabled: true,
        style: {
                    fontWeight: 'bold',
                    color: '#FAFAFA',
                    textDecoration: 'none',
                    fontSize: 16
                },
        format: "{point.name}<br> (€{point.y:,f} million)"
      }
    }
  },
  drilldown: {
    activeAxisLabelStyle: {
            color: '#FAFAFA',
            textDecoration: 'none'
        },
        activeDataLabelStyle: {
            color: '#FAFAFA',
            textDecoration: 'none'
        },
    drillUpButton: {
      position: { align: "left", y: -50 },
      relativeTo: "spacingBox"
    }
  },
  tooltip: {
    fontSize: 16,
    headerFormat:
      "<span style=\"font-size: 13px;text-align:center;margin-bottom: 5px;font-weight: bold;font-family: 'Roboto', arial, sans-serif;\"> {point.key}</span><br/>",

    pointFormatter: function() {
      var suffix = "% of total<br/>";

      var percentage = this.series.options._levelNumber
        ? (this.percentage / 10).toFixed(1)
        : this.percentage.toFixed(1);

      return parseFloat(percentage, 10) < 0.5
        ? percentage + suffix + "<br/>(" + this.y.toLocaleString() + " million Euros)"
        : percentage + suffix;
    }
  },

  series: [
    {
      name: "Overview",
      data: [
        {
          name: "Infrastructure and Maritime Transport",
          y: 23185,
          drilldown: "Infrastructure"
        },
        {
          name: "Waste Management",
          y: 250,
          drilldown: "Waste"
        },
        {
          name: "Energy",
          y: 38644,
          drilldown: "Energy"
        }
      ]
    }
  ],
  drilldown: {
    activeAxisLabelStyle: {
            color: '#FAFAFA',
            textDecoration: 'none'
        },
        activeDataLabelStyle: {
            color: '#FAFAFA',
            textDecoration: 'none'
        },
    series: [
      {
        name: "Energy",
        id: "Energy",
        data: [
          ["Albania", 567],
          ["Bosnia and Herzegovina", 150],
          ["Bosnia and Herzegovina (FBiH)", 1549],
          ["Bosnia and Herzegovina (RS)", 3343],
          ["Bulgaria", 3161],
          ["Croatia", 2904],
          ["Czech Republic", 2677],
          ["Greece", 2347],
          ["Hungary", 1921],
          ["Montenegro", 1863],
          ["North Macedonia", 1794],
          ["Romania", 1605],
          ["Serbia", 1453]
        ]
      },
      {
        name: "Infrastructure",
        id: "Infrastructure",
        data: [
          ["Albania", 1480],
          ["Bosnia and Herzegovina (RS)", 1328],
          ["Bulgaria", 229],
          ["Croatia", 565],
          ["Greece", 350],
          ["Hungary", 3520],
          ["Montenegro", 3058],
          ["North Macedonia", 580],
          ["Romania", 1200],
          ["Serbia", 10875]
        ]
      }
    ]
  }
});
