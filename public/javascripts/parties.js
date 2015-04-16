!function($){
  $(document).on('ready', function(){
    $.ajax({
      url: '/parties/json',
      success: function(data){
        var ctx = document.getElementById('chart').getContext('2d');
        var pieChart = new Chart(ctx).Pie(data,{
          legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%><%if(segments[i].value){%>: <%=segments[i].value%><%}%></li><%}%></ul>"
        });
        $('#legend').html(pieChart.generateLegend());
      }
    });
  });
}(jQuery);
