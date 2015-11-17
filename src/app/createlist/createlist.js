angular.module('un.createlist', [
  'ui.router'
])
  .config(function($stateProvider) {
    $stateProvider.state('createlist', {
      // parent: 'home',
      url: '/createlist',
      templateUrl: 'app/createlist/createlist.html',
      controller: 'CreatelistController',
      controllerAs: 'createlist',
      resolve:{
        form:function(createlistService){
          return createlistService.get();
        }
      }
    })
  });
