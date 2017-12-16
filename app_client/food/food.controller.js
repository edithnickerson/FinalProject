(function() {

  angular
    .module('resourceApp')
    
    .controller('FoodLocationsCtrl', FoodLocationsCtrl);

  FoodLocationsCtrl.$inject = ['$scope', 'FoodLocationsCtrl', 'FoodLocations', 'SelectedData'];

  function FoodLocationCtrl($scope, FoodLocationsCtrl, FoodLocations, SelectedData) {
    // Nasty IE9 redirect hack (not recommended)
    /*
    if (window.location.pathname !== '/') {
      window.location.href = '/#' + window.location.pathname;
    }*/
    console.log(window.location);    
   
    
    var vm = this;
    vm.content = "Food";
    vm.selectedFoodLocations.zip = "";
    vm.selectedFoodLocations.type = "";
    
    //check selected Departure
    if(SelectedData.selectedFoodLocations.zip !== null){
      vm.selectedFoodLocations.zip = SelectedData.selectedFoodLocations.zip;
    }
    
    //check selected Arrival
    if(SelectedData.selectedFoodLocation.type !== null){
      vm.selectedFoodLocations.type = SelectedData.selectedFoodLoctaions.type;
    }
    
   

    //refactored for Angular 1.6 - removed success/error, used Promises...
    vm.getFoodLocations = function() {
      FoodLocations.getFoodLocations()
        .then(function(response) {
          vm.FoodLocations = response.data;
          console.log(response);
        })
        .catch(function(e) {
          console.log(e);
        });
    }

    //refactored for Angular 1.6 - removed success/error, used Promises...
    vm.getClothingLocations = function() {
      ClothingLocations.getClothingLocations()
        .then(function(response) {
          vm.ClothingLocations = response.data;
          console.log(response);
        })
        .catch(function(e) {
          console.log(e);
        });
    }

    vm.toggleMenu = function() {
      if (vm.class === "toggled") {
        vm.class = "";
      }
      else {
        vm.class = "toggled";
      }
      console.log(vm.class + " is good");
    };
    
    vm.clearSelectedData = function(){
      
      vm.selectedFoodLocations.zip = null;
      vm.selectedFoodLocation.type = null;
      
    }
    
    //saved departure
    $scope.$watch(
      function(){
        return vm.selectedFoodLocations.zip;    
      }, 
      function (newValue, oldValue) {
        console.log(oldValue);
        console.log(newValue);
        if (newValue.zip !== oldValue.zip){
          SelectedData.selectedFoodLocations.zip = newValue;
        } 
      }, 
      true
    );
    
    //saved arrival
    $scope.$watch(
      function(){
        return vm.selectedFoodLocations.type;
      }, 
      function (newValue, oldValue) {
        console.log(oldValue);
        console.log(newValue);
        if (newValue.type !== oldValue.type){
          SelectedData.selectedFoodLocations.type = newValue;
        } 
      }, 
      true
    );
    
    

    //call services
    vm.getFoodLocations();
    vm.getClothingLocations();

  }

})();
