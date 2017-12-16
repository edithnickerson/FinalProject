(function() {

  angular
    .module('resourceApp')
    .service('ClothingLocationsData', ClothingLocationsData);

  ClothingLocationsData.$inject = ['$http'];
  function ClothingLocationsData ($http) {
      var getClothingLocationsData = function(){
          return $http.get('/api/ClothingLocationsData');
      }

      return {
          getClothingLocationsData : getClothingLocationsData,
      };
  }

})();