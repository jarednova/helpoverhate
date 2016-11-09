(function($){

  //<![CDATA[
  function BBMap() {
    this.load();
  }

  BBMap.prototype.load = function( mapDiv = "map" ) {
    var $map = $('#'+mapDiv);
    var lat = $map.data('lat');
    var lng = $map.data('lng');
    // coordinates to latLng
    var latlng = new google.maps.LatLng(lat, lng);
    // map Options
    var myOptions = {
      zoom: 15,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    //draw a map
    var gMap = new google.maps.Map(document.getElementById(mapDiv), myOptions);
    var marker = new google.maps.Marker({
      position: gMap.getCenter(),
      map: gMap
    }); 
  };

  var map = new BBMap();
  map.load();
})(jQuery, google);

