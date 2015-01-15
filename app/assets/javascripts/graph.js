// Horizonal Bar Graph Data
$.ajax({
  type: "GET",
  contentType: "application/json; charset=utf-8",
  url: 'graphs/data',
  dataType: 'json',
  success: function (data) {
    horizontalBar(data);
    pieChart(data)
  },
  error: function (result) {
    error();
  }
});
 
function horizontalBar(data) {
  var color = d3.scale.category20b();

  var width = 600,
      barHeight = 20;

  var x = d3.scale.linear()
      .range([0, width])
      .domain([0, d3.max(data)]);

  var chart = d3.select("#horizBar")
      .attr("width", width)
      .attr("height", barHeight * data.length);

  var bar = chart.selectAll("g")
      .data(data)
      .enter().append("g")
      .attr("transform", function (d, i) {
        return "translate(0," + i * barHeight + ")";
      });

  bar.append("rect")
      .attr("width", x)
      .attr("height", barHeight - 1)
      .style("fill", function (d) {
        return color(d)
      })

  bar.append("text")
      .attr("x", function (d) {
        return x(d) - 30;
      })
      .attr("y", barHeight / 2)
      .attr("dy", ".35em")
      .style("fill", "white")
      .text(function (d) {
        return d;
      });
}

function pieChart(data) {
  var width = 500;
  var height = 150;
  var radius = height / 2;

  var arc = d3.svg.arc()
                  .innerRadius(radius - 40)
                  .outerRadius(radius);

  var pie = d3.layout.pie()
                     .padAngle(.02);

  var color = d3.scale.category10();

  var svg = d3.select('#pieChart')
               .append('svg')
               .attr('width', width)
               .attr('height', height)
               .append('g')
               .attr('transform', 'translate(' + width / 3 + ',' + height / 2 + ')');

  svg.selectAll('path')
      .data(pie(data))
      .enter()
      .append('path')
      .style('fill', function(d, i){
        return color(i);
      })
      .attr('d', arc);
}
 
function error() {
    console.log("error")
}