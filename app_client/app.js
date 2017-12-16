(function () {

  angular.module('resourceApp', ['ngRoute', 'ngSanitize', 'ui.bootstrap']);

  function config ($routeProvider, $locationProvider) {
    
    console.log("Resource Application - MEAN STACK DRIVEN");
    
    $routeProvider
      .when('/', {
        templateUrl: 'home/home.view.html',
        controller: 'homeCtrl',
        controllerAs: 'vm'
      })
      .when('/FoodLocations/', {
        templateUrl: '/food/food.view.html',
        controller: 'FoodLocationsCtrl',
        controllerAs: 'vm'
      })
      .when('/ClothingLocations/', {
        templateUrl: '/clothing/clothing.view.html',
        controller: 'ClothingLocationsCtrl',
        controllerAs: 'vm'
      })
      .when('/UtilityLocations/', {
        templateUrl: '/utility/utility.view.html',
        controller: 'UtilityLocationsCtrl',
        controllerAs: 'vm'
      })
      .when('/Reviews/', {
        templateUrl: '/review/reviewModal.view.html',
        controller: 'reviewModalCtrl',
        controllerAs: 'vm'
      })
    /*  .when('/yelpapi/', {
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