(function() {
  'use strict';

  angular.module('Data')
  .service('DataRefineService', DataRefineService);


  DataRefineService.$inject = ['$q', '$timeout'];
  function DataRefineService($q, $timeout) {
    var service = this;

    service.refineData = function(data, type) {
      var deferred = $q.defer();

      service.data = (data.tracks || data.artists || data.albums).items;

      $timeout(function () {
        if(type == 'track') {

          service.songs = [];
          var i = 0;
          angular.forEach(service.data, function(value, key){
            var obj = {};

            obj.index = 'song'+i ; i++;
            obj.track = value.name;
            obj.preview = value.preview_url;
            obj.duration = durationConversion(value.duration_ms);
            obj.popularity = value.popularity;
            obj.album = value.album.name;
            obj.artist = value.album.artists[0].name;
            obj.logo = value.album.images[2].url;

            service.songs.push(obj);
          });

          deferred.resolve(service.songs);
        }
        else if(type == 'artist') {

          service.artists = [];
          var i = 0;
          angular.forEach(service.data, function(value, key){
            var obj = {};

            obj.index = 'artist'+i ; i++;
            obj.popularity = value.popularity;
            obj.followers = value.followers.total;
            obj.genres = value.genres;
            obj.artist = value.name;

            var image = value.images[1];
            if(image) {
              obj.logo = image.url;
            } else {
              obj.logo = "http://media.tumblr.com/tumblr_mf3r1eERKE1qgcb9y.jpg"
            }

            service.artists.push(obj);
          });

          deferred.resolve(service.artists);
        }
        else if(type == 'album') {

          service.albums = [];
          var i = 0;
          angular.forEach(service.data, function(value, key){
            var obj = {};

            obj.index = 'song'+i ; i++;
            obj.artist = value.artists;
            obj.type = value.album_type;
            obj.logo = value.images[1].url;
            obj.name = value.name;

            service.albums.push(obj);
          });

          deferred.resolve(service.albums);
        }
        else {
          var err = 'Something is not right!';
          deferred.reject(err);
        }
      }, 2000);
      //
      //
      return deferred.promise;
    }
  }

  function durationConversion(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

})();
