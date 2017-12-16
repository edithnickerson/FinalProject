(function() {

    angular
        .module('resourceApp')
        .service('yelpapi', yelpapi);

    yelpapi.$inject = ['$http'];

    function yelpapi($http) {
        var getReviews = function(reviews) {
            
            return $http.get('/api/yelpapi' + '/' + reviews);
        };
        
        return {
            getReviews: getReviews,
        };
    }
})();
