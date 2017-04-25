(function() {
  'use strict';

  angular.module('Data')
  .component('trackGrid', {
    templateUrl: 'src/data/components/track-grid/trackgrid.template.html',
    controller: TrackGridController,
    bindings: {
      data: '<'
    }
  });

  function TrackGridController() {
    var $ctrl = this;

  }

})();
