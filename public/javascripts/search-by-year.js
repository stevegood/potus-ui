!function($){
  $(document).on('ready', function(){
    var $presidents = $('#presidents');

    $('#year').on('change', function(){
      var $this = $(this),
          val = $this.val();

      if (val > 0) {
        $.ajax({
          url: '/search-by-year/' + parseInt(val),
          success: function(result) {
            var lis = [];
            for (var i=0; i < result.length; i++) {
              var president = result[i];
              lis.push(Presidents.parseHTML(president));
            }

            $presidents.html(lis.join(''));
          }
        });
      }
    });
  });
}(jQuery);
