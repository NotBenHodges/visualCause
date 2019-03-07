var causeDataP = d3.csv("data.csv")
var drawChart = function(data)
{
  var h = 500;
  var w = 500;
  var barWidth = width/data.length;
  var svg = d3.select("body")
              .append("svg");
              .attr("height",h)
              .attr("width",w);
  svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x",function(d,i){
        return h - d.num * 20;
      })
      .attr("width",barWidth)
      .attr("h",function(d){
        return d.num * 20;
      })
      .attr("fill","blue")
      
}
