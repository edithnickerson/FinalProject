(function() {

    angular
        .module('resourceApp')
        .controller('UtilityLoctaionsCtrl', UtilityLocationsCtrl);

    UtilityLocationsCtrl.$inject = ['$scope', 'UtilityLocations', 'UtilityLocations'];

    function Ctrl($scope, UtilityLocations, SelectedData) {
        // Nasty IE9 redirect hack (not recommended)
        /*
        if (window.location.pathname !== '/') {
          window.location.href = '/#' + window.location.pathname;
        }*/
        var vm = this;
        console.log(window.location);

        vm.content = "Utility Data";

        vm.selectedzip = "";
        vm.selectedtype = "";
       

        //check selected Departure
        if (SelectedData.selectedzip !== null) {
            vm.selectedzip = SelectedData.selectedzip;
        }

        //check selected Arrival
        if (SelectedData.selectedtype !== null) {
            vm.selectedtype = SelectedData.selectedtype;
        }

        
        //refactored for Angular 1.6 - removed success/error, used Promises...
      /*  vm.getClimbDataForWeight = function() {
            
            AirplaneData.getClimbDataForWeight(vm.selectedWeight.weight)
                .then(function(response) {
                    //since find may select many, just return the single object
                    vm.climbData = response.data[0];
                    console.log(vm.climbData);
                })
                .catch(function(e) {
                    console.log(e);
                });            
        }*/

        console.log("IN CLIMB DATA FOR WEIGHT: " + vm.selectedFoodLocations.zip);        
        
        //call services
        vm.getClimbDataForWeight();
    }

})();
