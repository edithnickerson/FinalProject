(function () {

  angular
    .module('resourceApp')
    .controller('reviewModalCtrl', reviewModalCtrl);

  reviewModalCtrl.$inject = ['$modalInstance', 'FoodLocationsData', 'FoodLocationData'];
  function reviewModalCtrl ($modalInstance, FoodLocationsData, FoodLocationsData) {
    var vm = this;
    vm.FoodLocationsData = FoodLocationsData;

    vm.onSubmit = function () {
      vm.formError = "";
      if (!vm.formData.name || !vm.formData.rating || !vm.formData.reviewText) {
        vm.formError = "All fields required, please try again";
        return false;
      } else {
        vm.doAddReview(vm.FoodLocationsData.FoodLocationsid, vm.formData);
      }
    };

    vm.doAddReview = function (FoodLocationsid, formData) {
      FoodLocationsData.addReviewById(FoodLocationsid, {
        author : formData.name,
        rating : formData.rating,
        reviewText : formData.reviewText
      })
        .success(function (data) {
          vm.modal.close(data);
        })
        .error(function (data) {
          vm.formError = "Your review has not been saved, please try again";
        });
      return false;
    };

    vm.modal = {
      close : function (result) {
        $modalInstance.close(result);
      },
      cancel : function () {
        $modalInstance.dismiss('cancel');
      }
    };

  }

})();