angular.module('un.lol', [
  'ui.router'
])
  .config(function($stateProvider) {
    $stateProvider.state('lol', {
      // parent: 'home',
      url: '/lol',
      templateUrl: 'app/lol/lol.html',
      controller: 'LolController',
      controllerAs: 'lol',
      resolve:{
        data:function(LolService){
          return LolService.get();
        }
      }
    })
  });
