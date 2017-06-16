(function() {
  'use strict';

  angular.module('Data')
  .config(function (SpotifyProvider) {
    SpotifyProvider.setClientId('afceeb16f9414feea673b2412153a06e');
    SpotifyProvider.setRedirectUri('localhost:8000');
    // SpotifyProvider.setScope('<SCOPE>');
    // If you already have an auth token
    SpotifyProvider.setAuthToken('BQAvINPrAoNYteTXggr7VeWydIcDTicxEGZRGUMTiZt-b5z0O2RdMkMTE2zKG0Kq29iIXca56AmT7HhcJkqISw');
  });

})();
