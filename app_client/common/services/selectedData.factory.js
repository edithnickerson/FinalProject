(function() {

  angular
    .module('resourceApp')
    .factory('SelectedData', selectedData);

  //selectedData.$inject = ['$http'];
  function selectedData () {
      return {
          selectedData : '',
         selectedtype : ''
         
      };
  }

})();