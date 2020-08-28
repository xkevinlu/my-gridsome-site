function getPointCategoryName(point, dimension) {
  var series = point.series,
    isY = dimension === 'y',
    axis = series[isY ? 'yAxis' : 'xAxis'];
  return axis.categories[point[isY ? 'y' : 'x']];
}

Highcharts.chart('container', {

  chart: {
    type: 'heatmap',
    marginTop: 25,
    marginBottom: 80,
    marginLeft:50,
    marginRight:50,
    plotBorderWidth: 1,
    height: chartHeight,
  },
  credits: {
    enabled: false
  },

  title: {
    text: ""
  },

  xAxis: {
    opposite:true,
    categories: ['S1', 'S2', 'S3', 'S4', 'S5','S6', 'S7', 'S8', 'S9', 'S10'],
    title: {
      enabled: false,
    },
  },

  yAxis: {
    reversed:true,
    categories: ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10', 'E11', 'E12', 'E13', 'E14', 'E15', 'E16', 'E17', 'E18', 'E19', 'E20', 'E21', 'E22', 'E23', 'E24', 'E25', 'E26', 'E27', 'E28', 'E29', 'E30'],
    title: {
      enabled: false,
    },
  },

  accessibility: {
    point: {
      descriptionFormatter: function (point) {
        var ix = point.index + 1,
          xName = getPointCategoryName(point, 'x'),
          yName = getPointCategoryName(point, 'y'),
          val = point.value;
        return ix + '. ' + xName + ' sales ' + yName + ', ' + val + '.';
      }
    }
  },

  colorAxis: {
    min:5,
    max:10,
    stops: [
      [0.2, '#E5594A'],
      [0.6, '#EECE61'],
      [0.9, '#5C9E53']
    ],
  },

  legend: {
    enabled:false,
  },

  tooltip: {
    formatter: function () {
      return `<b>S${getPointCategoryName(this.point, 'x')}E${getPointCategoryName(this.point, 'y')}: ${episodeNames[this.point.index]} (${this.point.value}) </b><br> ${episodeDesc[this.point.index]}`
      },
     style: {
        width:250,
     }
  },

  series: [{
    name: 'Rating per episode',
    borderWidth: 1,
    data: episodeRatings,
    dataLabels: {
      enabled: true,
      color: '#000000',
      style: {
        textOutline:0
      }
    }
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500,
      },
      chartOptions: {
        yAxis: {
          labels: {
            formatter: function () {
              return this.value.charAt(0);
            }
          }
        }
      }
    }]
  }

});