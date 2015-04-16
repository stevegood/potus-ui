var superagent = require('superagent');

function API() {

  function Presidents() {
    var host = process.env.API_HOST;

    function get(uri, callback) {
      superagent.get(host + '/presidents' + uri)
        .end(callback);
    }

    return {
      list: function(callback) {
        get('/', function(e, res){
          callback(e, res.body);
        });
      },

      findByYear: function(year, callback){
        get('/with-year/' + parseInt(year), function(e, res){
          callback(e, res.body);
        });
      },

      findByName: function(q, callback){
        get('/name-like/' + q, function(e, res){
          callback(e, res.body);
        });
      },

      getPartyCounts: function(callback){
        get('/parties', function(e, res){
          callback(e, res.body);
        });
      },

      get: function(id, callback){
        get('/' + parseInt(id), function(e, res){
          callback(e, res.body);
        });
      }
    };
  }

  return {
    presidents: new Presidents()
  };
}

module.exports = new API();
