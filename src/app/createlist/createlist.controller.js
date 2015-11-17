angular.module('un.createlist')
  .controller('CreatelistController', function (form,createlistService, toastr) {
    var vm = this;
    vm.form=form;
    function markFieldsAsDirty(form) {
        Object.keys(form).filter(function (key) {
            return key[0] !== '$';
        }).forEach(function (fieldName) {
            form[fieldName].$setDirty();
        });
    }

    vm.submit=function(form){
      console.log(form);
      markFieldsAsDirty(form);
      if(form.$valid){
        for (var k in vm.list){
          //if (vm.list.hasOwnProperty(k)) {
            if(vm.list[k]==null)
               vm.list[k]="";
               vm.list[k]+="";
          //}
        }
        createlistService.post(vm.list)
      }else{
         toastr.error('Invalid form', 'Error');
      }
    }
    vm.clear=function(form){
      form.$setPristine();


    for (var k in vm.form.fields){
    if (vm.form.fields.hasOwnProperty(k)) {
         vm.list[k]="";
    }
}

    }
  });
