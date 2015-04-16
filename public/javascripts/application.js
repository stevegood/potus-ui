!function($){
  window.Presidents = {
    parseHTML: function(president) {
      var li = ['<li class="president-detail">'];

      li.push('<a href="/president/' + president._id + '">');
      li.push('<strong>' + president.name + '</strong>');
      li.push('</a>');
      li.push('<br/>');
      li.push('Party: <span> <em>' + president.party + '</em></span>');
      li.push('<br/>');
      li.push('Years in office:');
      li.push('<ul>');

      for (var n=0; n < president.years.length; n++) {
        li.push('<li>' + president.years[n] + '</li>');
      }

      li.push('</ul>');
      li.push('</li>');

      return li.join('');
    }
  }
}(jQuery);
