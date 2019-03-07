var data = [66,61,55,67]
  var h = 500;
  var w = 500;
  var barWidth = w/data.length;
  var svg = d3.select("body")
              .append("svg")
              .attr("height",h)
              .attr("width",w);

  svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", function(d,i){
        return i * (w/data.length);
      })
      .attr("y", function(d){
        return h - (d * 4);
      })
      .attr("width",50)
      .attr("height",function(d){
        return d * 4;
      });
  svg.selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text(function(d){
        return d;
      })
      .attr("x",function(d,i){
        return i * (w/data.length) + 5;
      })
      .attr("y",function(d){
        return h - (d * 4) + 15;
      })
      .attr("fill","white");


/*causeDataP.then(function(data)
{
  console.log("data",data)
  drawChart(data);
},
function(err)
{
  console.log(err);
})*/
