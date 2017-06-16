(function() {
  'use strict';

  angular.module('Data')
  .service('SpotifyDataService', SpotifyDataService);

  SpotifyDataService.$inject = ['SpotifyApiBase', 'SpotifyTokenFactory', 'DataRefineService', '$resource', '$http'];
  function SpotifyDataService(SpotifyApiBase, SpotifyTokenFactory, DataRefineService, $resource, $http) {
    var service = this;

    var getToken = SpotifyTokenFactory.getToken();
    getToken.then(function(response) {
      service.tokendata = response.data;
    })
    .catch(function(error) {
      console.log(error);
    });

    service.getResults = function(query, type , limit) {
      var Results = $http({
        method: 'GET',
        url: SpotifyApiBase,
        params: { q:query, type:type , limit:limit },
        headers: {'Authorization': 'Bearer ' + service.tokendata.access_token}
      });

      var refinedResults = Results.then(function(data) {
        return DataRefineService.refineData(data.data, type);
      });

      return refinedResults;
    };
  }
})();
