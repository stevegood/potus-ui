!function($){
  $(document).on('ready', function(){
    var $presidents = $('#presidents');

    $('#search-btn').on('click', function(){
      var $q = $('#q'),
          val = $q.val().trim();

      if (val !== '') {
        $.ajax({
          url: '/search-by-name/' + val,
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
