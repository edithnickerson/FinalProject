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
    
    vm.content = "Find Help HERE!";
    
    //vm.selectedzip = "";
    //vm.selectedtype= "";
   
    
    //check selected Zip code
    if(SelectedData.selectedFoodLocations !== null){
      vm.selectedFoodLocations = SelectedData.selectedFoodLocations;
    }
    
    //check selected Resource type
    if(SelectedData.selectedFoodLocations.type !== null){
      vm.selectedFoodLocations.type = SelectedData.selectedFoodLocations.type;
    }
 
  }

})();
