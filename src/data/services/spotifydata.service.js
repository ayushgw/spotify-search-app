(function() {
  'use strict';

  angular.module('Data')
  .service('SpotifyDataService', SpotifyDataService);

  SpotifyDataService.$inject = ['SpotifyApiBase', 'SpotifyTokenFactory', 'DataRefineService', 'Spotify', '$http'];
  function SpotifyDataService(SpotifyApiBase, SpotifyTokenFactory, DataRefineService, Spotify, $http) {
    var service = this;

    ///////////////////////////////////////
    ////////// ALTERNATIVE METHOD /////////
    ///////////////////////////////////////
    service.getResults = function(query, type, limit) {
      var results = Spotify.search(query, type, {limit:50}).then(function (data) {
        console.log(data);
        return DataRefineService.refineData(data.data, type);
      });
      return results;
    };
    ///////////////////////////////////////
    ///////////////////////////////////////
    ///////////////////////////////////////

    // var getToken = SpotifyTokenFactory.getToken();
    // getToken.then(function(response) {
    //   service.tokendata = response.data;
    // })
    // .catch(function(error) {
    //   console.log(error);
    // });
    //
    // service.getResults = function(query, type , limit) {
    //   console.log(service.tokendata.access_token);
    //   var Results = $http({
    //     method: 'GET',
    //     url: SpotifyApiBase,
    //     params: { q:query, type:type , limit:limit },
    //     headers: {'Authorization': 'Bearer ' + service.tokendata.access_token}
    //   });
    //
    //   var refinedResults = Results.then(function(data) {
    //     return DataRefineService.refineData(data.data, type);
    //   });
    //
    //   return refinedResults;
    // };
  }
})();
