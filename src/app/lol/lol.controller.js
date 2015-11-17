angular.module('un.lol')
  .controller('LolController', function (data) {
    var vm = this;
    console.log(JSON.parse(data.json_lists))
    vm.lists=JSON.parse(data.json_lists);
    // LolService.get()
    // .then(function(listData){
    //   vm.list=listData;
    // });

  });
