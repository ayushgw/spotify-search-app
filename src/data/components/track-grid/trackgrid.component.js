(function() {
  'use strict';

  angular.module('Data')
  .component('trackGrid', {
    templateUrl: 'src/data/components/track-grid/trackgrid.template.html',
    controller: TrackGridController,
    bindings: {
      data: '<',
      filter: '='
    }
  });

  function TrackGridController() {
    var $ctrl = this;

    $ctrl.sortType     = 'popularity'; // set the default sort type
    $ctrl.sortReverse  = true;  // set the default sort order

    // Audio Preview
    $ctrl.play = function(song, index) {
      $ctrl.isPlaying = index;
      var flag = 1;//pause previous
      if($ctrl.audio_curr != null){
        $ctrl.pause(index,flag);
      }
      $ctrl.audio_curr = new Audio(song);
      $ctrl.audio_curr.play();
    };

    $ctrl.pause = function( index,flag) {
      $ctrl.audio_curr.pause();
      if(flag==1){
        $ctrl.isPlaying = index;
      }
      else{//pause current
        $ctrl.isPlaying = null;
      }
      $ctrl.audio_curr = null;
    }
  }

})();
