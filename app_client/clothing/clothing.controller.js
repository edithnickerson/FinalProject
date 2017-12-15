(function() {

    angular
        .module('resourceApp')
        .controller('ClothingLocationsCtrl', ClothingLocationsCtrl);

    landingCtrl.$inject = ['$scope', 'ClothingLocations', 'ClothingLocations'];

    function ClothingLocationsCtrl($scope, SelectedData, ClothingLocations) {
        // Nasty IE9 redirect hack (not recommended)
        /*
        if (window.location.pathname !== '/') {
          window.location.href = '/#' + window.location.pathname;
        }*/
        var vm = this;
        console.log(window.location);

        vm.content = "Clothing Resources";

        vm.selectedzip = "";
        vm.selectedtype = "";
      

        //check selected Zip Code
        if (SelectedData.selectedzip !== null) {
            vm.selectedzip = SelectedData.selectedzip;
        }

        //check selected Resource Type
        if (SelectedData.selectedtype !== null) {
            vm.selectedtype = SelectedData.selectedtype;
        }

     

        //refactored for Angular 1.6 - removed success/error, used Promises...
      /*  vm.getLandingDataForWeight = function() {
            
            AirplaneData.getClimbDataForWeight(vm.selectedWeight.weight)
                .then(function(response) {
                    //since find may select many, just return the single object
                    vm.takeoffData = response.data;
                    console.log(vm.takeoffData);
                })
                .catch(function(e) {
                    console.log(e);
                });            
        }

    }

})
();*/
