var incomeP = d3.csv("data.csv");
var drawChart = function(data)
{
  console.log(data);
  var height = 400;
  var width = 600;
  var barWidth = width/data.length;
  var svg = d3.select("body")
              .append("svg")
              .attr("height",height)
              .attr("width",width);

  svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x",function(d,i)
      {
        return i * barWidth;
      })
      .attr("y",function(d) {
        return height - d.num * 20;
      })
      .attr("width",barWidth)
      .attr("height",function(d)
      {
        return d.num * 20;
      })
      .attr("fill",function(d)
    {
      return d.color;
    })

incomeP.then(function(data)
{
  console.log("data", data);
  drawChart(data);
},
  function(err)
{
  console.log(err);
})
}
