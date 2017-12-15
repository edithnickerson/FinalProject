(function () {

  angular.module('resourceApp', ['ngRoute', 'ngSanitize', 'ui.bootstrap']);

  function config ($routeProvider, $locationProvider) {
    
    console.log("Resource Application - MEAN STACK DRIVEN");
    
    $routeProvider
      .when('/', {
        templateUrl: '/home/home.view.html',
        controller: 'homeCtrl',
        controllerAs: 'vm'
      })
      .when('/FoodLocations/', {
        templateUrl: '/FoodLocations/food.view.html',
        controller: 'FoodLocactionsCtrl',
        controllerAs: 'vm'
      })
      .when('/ClothingLocations/', {
        templateUrl: '/ClothingLocations/clothing.view.html',
        controller: 'ClothingLocationsCtrl',
        controllerAs: 'vm'
      })
      .when('/UtilityLocations/', {
        templateUrl: '/UtilityLocations/utility.view.html',
        controller: 'UtilityLocationsCtrl',
        controllerAs: 'vm'
      })
/*        templateUrl: '/airport/airport.view.html',
        controller: 'airportCtrl',
        controllerAs: 'vm'
      })
      .when('/yelpapi/', {
        templateUrl: 'yelpapi/weather.view.html',
        controller: 'weatherCtrl',
        controllerAs: 'vm'
      })*/      
      .otherwise({redirectTo: '/'});

    // use the HTML5 History API
    $locationProvider.html5Mode(
      {
        enabled: true,
        requireBase: false,
        rewriteLinks: true
      }
    );
  }

  angular
    .module('resourceApp')
    .config(['$routeProvider', '$locationProvider', config]);

})();