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

var text = svg.selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .text(function(d){
      return d.num;
    })
    .attr("x",function(d,i){
      return i * (width / data.length)+43;
    })
    .attr("y",function(d){
      return height - (d.num * 20)+15;
    })
    .attr("fill","white");

    var legend = svg.append("rect")
        .attr("class","legend")
        .attr("height","100")
        .attr("width","150")
        .attr("x", "425")
        .attr("y", "50")
        .attr("fill","transparent")
        .attr("stroke","black")
        .attr("stroke-width", "2px");

    svg.select(".legend").selectAll("rect")
          .data(data)
          .enter()
          .append("rect")
          .attr("x", "450")
          .attr("y", "75")
          .attr("width","20")
          .attr("height","20")
          .attr("fill",function(d)
        {
          return d.color;
        })

}

incomeP.then(function(data)
{
  console.log("data", data);
  drawChart(data);
},
  function(err)
{
  console.log(err);
})
