function getPointCategoryName(point, dimension) {
  var series = point.series,
    isY = dimension === 'y',
    axis = series[isY ? 'yAxis' : 'xAxis'];
  return axis.categories[point[isY ? 'y' : 'x']];
}

Highcharts.chart('container', {

  chart: {
    type: 'heatmap',
    marginTop: 100,
    marginBottom: 80,
    plotBorderWidth: 1,
    height: chartHeight
  },


  title: {
    text: showName + " Episode Ratings"
  },

  xAxis: {
    opposite:true,
    categories: ['1', '2', '3', '4', '5','6', '7', '8', '9', '10'],
    title: {
       text: "Season"
    },
  },

  yAxis: {
    reversed:true,
    categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
    title: {
       text: "Episode"
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
      return `<b> ${episodeNames[this.point.index]} (${this.point.value}) </b><br> ${episodeDesc[this.point.index]}`
      },
     style: {
        width:320,
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