(function() {
  'use strict';

  angular.module('Spinner')
  .component('spinner', {
    templateUrl: 'src/spinner/spinner.template.html',
    controller: SpinnerController
  });

  SpinnerController.$inject = ['$rootScope'];
  function SpinnerController($rootScope) {
    var $ctrl = this;
    
    $ctrl.showSpinner = true;

    // $ctrl.$onInit = function () {
    //   var cancel = $rootScope.$on('spinner',
    //   function(event, status){
    //     if(status.msg == 'on') {
    //       $ctrl.showSpinner = true;
    //     }
    //     else if (status.msg == 'off') {
    //       $ctrl.showSpinner = false;
    //     }
    //   });
    // };
    //
    // $ctrl.$onDestroy = function () {
    //   cancel();
    // };
  }

})();
