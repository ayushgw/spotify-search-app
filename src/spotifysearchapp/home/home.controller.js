(function() {
  'use strict';

  angular.module('SpotifySearchApp')
  .controller('HomeController', HomeController);

  HomeController.$inject = ['SpotifyDataService', '$document'];
  function HomeController(SpotifyDataService, $document) {
    var home = this;

    home.searchQuery = {
      name: '',
      type: 'track',
      limit: 50
    };

    home.searchNow = function() {
      var Results = SpotifyDataService.getResults(home.searchQuery.name, home.searchQuery.type, home.searchQuery.limit);
      Results.then(function(results) {
        console.log(results);
        home.results = results;
        home.results['type'] = home.searchQuery.type;

        // Smooth Scroll To Results
        $document.scrollTo( 0, 700, [1000] );
      })
      .catch(function(error) {
        console.log(error);
      })
    };


  }

})();
