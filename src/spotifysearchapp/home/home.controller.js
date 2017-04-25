(function() {
  'use strict';

  angular.module('SpotifySearchApp')
  .controller('HomeController', HomeController);

  HomeController.$inject = ['SpotifyDataService'];
  function HomeController(SpotifyDataService) {
    var home = this;

    home.searchQuery = {
      name: '',
      type: 'track',
      limit: 50
    };

    home.searchNow = function() {
      var Result = SpotifyDataService.getResults(home.searchQuery.name, home.searchQuery.type, home.searchQuery.limit);

      Result.$promise.then(function(result) {
        console.log(result);
      }, function(error) {
        console.log(error);
      });
    };

  }

})();
