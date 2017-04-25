(function() {
  'use strict';

  angular.module('Data')
  .service('SpotifyDataService', SpotifyDataService);

  SpotifyDataService.$inject = ['SpotifyApiBase', '$resource']
  function SpotifyDataService(SpotifyApiBase, $resource) {
    var service = this;

    service.getResults = function(query, type , limit){
      var Results = $resource(SpotifyApiBase + '/v1/search', { q:query, type:type , limit:limit }, { headers: { 'Authorization': 'Bearer BQDh-JqERc8O_gtxAOgAONxAp1e2-hpvQxon0QTGYa4GpPxme4U4Q4DPVGsRhsVqMtjXVFhBqgwkqfiHuIyFExy2LWXJ7JzYZLEJwRSLcJqe0pXqHiJNxCpImkRZHCp4mT7FZJX0xr3DKR1GI506CGv83vreqp5ksyx3ql699qUYwZFDCbah43xFt7hgndGxdhqfM7pdFu6Z8wue4PxarzZgIKMOg-ppevYdi1mrC8PhZvBKwSKwTXpeEEvJ6_fscym_cclLMc2gcau5RKt6B4nvfwluSYIS6P8_yyATy9EpuqsMrw' }
      });

      var results = Results.get();
      return results;
    };
  }

})();
