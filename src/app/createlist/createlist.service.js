angular.module('un.createlist')
  .service('createlistService', function ($http) {
    return {
      get: function() {
        var url='http://localhost:1337/169.254.143.239:8080/create_list/'
        //var url='http://localhost:3000/jsons/createlist.json'
        return $http.get(url)
          .then(function(response) {

            return JSON.parse(response.data.remote_form_dict);
          })
          .catch(function(response){
            console.log(response);
          });
      },
      post:function(form){
        var url='http://localhost:1337/169.254.143.239:8080/create_list/'
        return $http.post(url,form)
        .then(function(response) {

          console.log(response);
        })
        .catch(function(response){
          console.log(response);
        });
      }
    }
  });
