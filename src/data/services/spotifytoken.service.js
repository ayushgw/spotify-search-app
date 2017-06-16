(function() {
  'use strict';

  angular.module('Data')
  .factory('SpotifyTokenFactory', SpotifyTokenFactory);

  SpotifyTokenFactory.$inject = ['SpotifyTokenBase', '$http'];
  function SpotifyTokenFactory(SpotifyTokenBase, $http) {
    return {
      getToken: function() {
        return $http({
          method: 'POST',
          url: SpotifyTokenBase,
          data: "grant_type=client_credentials",
          headers: {'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Basic YWZjZWViMTZmOTQxNGZlZWE2NzNiMjQxMjE1M2EwNmU6NmFmNzdkMGRkMDk0NDFkNzhjMWVhZGQxYTM1ODAyOTc='}
        });
      }
    }
  }

})();
