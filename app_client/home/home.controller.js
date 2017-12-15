(function() {

  angular
    .module('resourceApp')
    .controller('homeCtrl', homeCtrl);

  homeCtrl.$inject = ['$scope', `SelectedData`];

  function homeCtrl($scope, SelectedData) {
    // Nasty IE9 redirect hack (not recommended)
    /*
    if (window.location.pathname !== '/') {
      window.location.href = '/#' + window.location.pathname;
    }*/
    var vm = this;
    console.log(window.location);
    
    vm.content = "Resource List";
    
    vm.selectedzip = "";
    vm.selectedtype= "";
   
    
    //check selected Zip code
    if(SelectedData.selectedzip !== null){
      vm.selectedzip = SelectedData.selectedzip;
    }
    
    //check selected Resource type
    if(SelectedData.selectedtype !== null){
      vm.selectedtype = SelectedData.selectedtype;
    }
 
  }

})();
