(function() {
  'use strict';

  angular.module('SpotifySearchApp')
  .controller('HomeController', HomeController);

  HomeController.$inject = ['SpotifyDataService', '$document', '$rootScope', '$window'];
  function HomeController(SpotifyDataService, $document, $rootScope, $window) {
    var home = this;

    // check for smaller screens
    home.isSmallScreen = false;
    console.log($window.innerWidth);
    var screenWidth = $window.innerWidth;
    if (screenWidth < 768){
      home.isSmallScreen = true;
    }

    console.log(home.isSmallScreen);

    home.searchQuery = {
      name: '',
      type: 'track',
      limit: 50
    };

    // var element = angular.element(document.getElementById('results_section'));
    home.searchNow = function() {
      home.resultsFlag = true;
      home.spinnerFlag = true;
      // $rootScope.$broadcast('spinner', { msg: 'on' });

      // Smooth Scroll To Results
      $document.scrollTo( 0, 750, [1000] );

      var Results = SpotifyDataService.getResults(home.searchQuery.name, home.searchQuery.type, home.searchQuery.limit);
      Results.then(function(results) {
        home.results = results;
        home.results['type'] = home.searchQuery.type;

        home.spinnerFlag = false;
        // $rootScope.$broadcast('spinner', { msg: 'off' });
      })
      .catch(function(error) {
        console.log(error);
      })
    };


  }

})();
