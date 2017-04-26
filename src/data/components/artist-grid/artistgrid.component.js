(function() {
  'use strict';

  angular.module('Data')
  .component('artistGrid', {
    templateUrl: 'src/data/components/artist-grid/artistgrid.template.html',
    controller: ArtistGridController,
    bindings: {
      data: '<',
      filter: '='
    }
  });

  function ArtistGridController() {
    var $ctrl = this;

    
  }

})();
