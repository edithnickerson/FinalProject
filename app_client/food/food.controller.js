(function() {

  angular
    .module('resourceApp')
    
    .controller('foodCtrl', foodCtrl);

FoodLocationsCtrl.$inject = ['$scope', 'FoodLocationsCtrl', 'FoodLocations', 'SelectedData'];

  function foodCtrl($scope, FoodLocations, FoodLocations, SelectedData) {
    // Nasty IE9 redirect hack (not recommended)
    /*
    if (window.location.pathname !== '/') {
      window.location.href = '/#' + window.location.pathname;
    }*/
    console.log(window.location);    
   
    
    var vm = this;
    vm.content = "Food";
    vm.selectedzip = "";
    vm.selectedtype = "";
    
    //check selected Departure
    if(SelectedData.selectedFoodLocations.zip !== null){
      vm.selectedzip = SelectedData.selectedzip;
    }
    
    //check selected Arrival
    if(SelectedData.selectedtype !== null){
      vm.selectedtype = SelectedData.selectedtype;
    }
    
   

    //refactored for Angular 1.6 - removed success/error, used Promises...
    vm.getFoodLocations = function() {
      FoodLocations.getFoodLocations()
        .then(function(response) {
          vm.food = response.data;
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
          vm.clothing = response.data;
          console.log(vm.clothing);
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
      
      vm.selectedzip = null;
      vm.selectedtype = null;
      
    }
    
    //saved departure
    $scope.$watch(
      function(){
        return vm.selectedzip;    
      }, 
      function (newValue, oldValue) {
        console.log(oldValue);
        console.log(newValue);
        if (newValue.icao !== oldValue.icao){
          SelectedData.selectedzip = newValue;
        } 
      }, 
      true
    );
    
    //saved arrival
    $scope.$watch(
      function(){
        return vm.selectedtype;
      }, 
      function (newValue, oldValue) {
        console.log(oldValue);
        console.log(newValue);
        if (newValue.icao !== oldValue.icao){
          SelectedData.selectedtype = newValue;
        } 
      }, 
      true
    );
    
    

    //call services
    vm.getFoodLocations();
    vm.getClothingLocations();

  }

})();
