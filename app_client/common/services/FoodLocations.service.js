(function() {

  angular
    .module('resourceApp')
    .service('FoodLocationstData', FoodLocationsData);

  FoodLocationsData.$inject = ['$http'];
  function FoodLocationsData ($http) {
      var getFoodLocationsData = function(){
          return $http.get('/api/FoodLocationsData');
      }

      return {
          getFoodLocationsData : getFoodLocationsData,
      };
  }

})();