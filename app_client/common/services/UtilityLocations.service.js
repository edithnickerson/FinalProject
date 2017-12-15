(function() {

  angular
    .module('resourceApp')
    .service('UtilityLocationsData', UtilityLocationsData);

  UtilityLocationsData.$inject = ['$http'];
  function UtilityLocationsData ($http) {
      var getUtilityLocationsData = function(){
          return $http.get('/api/UtilityLocationsData');
      }

      return {
          getUtlityLocationsData : getUtilityLocationsData,
      };
  }

})();