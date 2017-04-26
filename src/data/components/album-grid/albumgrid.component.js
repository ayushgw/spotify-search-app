(function() {
  'use strict';

  angular.module('Data')
  .component('albumGrid', {
    templateUrl: 'src/data/components/album-grid/albumgrid.template.html',
    controller: AlbumGridController,
    bindings: {
      data: '<',
      filter: '='
    }
  });

  function AlbumGridController() {
    var $ctrl = this;

  }

})();
