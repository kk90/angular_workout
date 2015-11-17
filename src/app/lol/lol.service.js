angular.module('un.lol')
  .service('LolService', function ($http, toastr) {
    return {
      get: function() {
        var url='http://localhost:1337/169.254.143.239:8080/'
        //var url='http://localhost:3000/jsons/list.json'
        return $http.get(url)
          .then(function(response) {
            return response.data;
          })
          .catch(function(response){
             toastr.error('spadaj ciulu', 'Error');
          });
      }
    }
  });
