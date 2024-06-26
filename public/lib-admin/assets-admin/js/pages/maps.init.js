!(function (e) {
  "use strict";
  var a = function () {};
  (a.prototype.createBasic = function (a) {
    return new GMaps({ div: a, lat: -12.043333, lng: -77.028333 });
  }),
    (a.prototype.createMarkers = function (a) {
      var e = new GMaps({ div: a, lat: -12.043333, lng: -77.028333 });
      return (
        e.addMarker({
          lat: -12.043333,
          lng: -77.03,
          title: "Lima",
          details: { database_id: 42, author: "HPNeo" },
          click: function (a) {
            console.log && console.log(a), alert("You clicked in this marker");
          },
        }),
        e.addMarker({
          lat: -12.042,
          lng: -77.028333,
          title: "Marker with InfoWindow",
          infoWindow: { content: "<p>HTML Content</p>" },
        }),
        e
      );
    }),
    (a.prototype.createWithStreetview = function (a, e, t) {
      return GMaps.createPanorama({ el: a, lat: e, lng: t });
    }),
    (a.prototype.createMapByType = function (a, e, t) {
      var n = new GMaps({
        div: a,
        lat: e,
        lng: t,
        mapTypeControlOptions: {
          mapTypeIds: [
            "hybrid",
            "roadmap",
            "satellite",
            "terrain",
            "osm",
            "cloudmade",
          ],
        },
      });
      return (
        n.addMapType("osm", {
          getTileUrl: function (a, e) {
            return (
              "http://tile.openstreetmap.org/" +
              e +
              "/" +
              a.x +
              "/" +
              a.y +
              ".png"
            );
          },
          tileSize: new google.maps.Size(256, 256),
          name: "OpenStreetMap",
          maxZoom: 18,
        }),
        n.addMapType("cloudmade", {
          getTileUrl: function (a, e) {
            return (
              "http://b.tile.cloudmade.com/8ee2a50541944fb9bcedded5165f09d9/1/256/" +
              e +
              "/" +
              a.x +
              "/" +
              a.y +
              ".png"
            );
          },
          tileSize: new google.maps.Size(256, 256),
          name: "CloudMade",
          maxZoom: 18,
        }),
        n.setMapTypeId("osm"),
        n
      );
    }),
    (a.prototype.init = function () {
      var a = this;
      e(document).ready(function () {
        a.createBasic("#gmaps-basic"),
          a.createMarkers("#gmaps-markers"),
          a.createWithStreetview("#panorama", 40.7295174, -73.9986496),
          a.createMapByType("#gmaps-types", -12.043333, -77.028333);
      });
    }),
    (e.GoogleMap = new a()),
    (e.GoogleMap.Constructor = a);
})(window.jQuery),
  (function (a) {
    "use strict";
    window.jQuery.GoogleMap.init();
  })(),
  (function (a) {
    "use strict";
    var e = function () {};
    (e.prototype.init = function () {
      a("#world-map-markers").vectorMap({
        map: "world_mill_en",
        normalizeFunction: "polynomial",
        hoverOpacity: 0.7,
        hoverColor: !1,
        regionStyle: { initial: { fill: "#98a6ad" } },
        markerStyle: {
          initial: {
            r: 9,
            fill: "#00acc1",
            "fill-opacity": 0.9,
            stroke: "#fff",
            "stroke-width": 7,
            "stroke-opacity": 0.4,
          },
          hover: { stroke: "#fff", "fill-opacity": 1, "stroke-width": 1.5 },
        },
        backgroundColor: "transparent",
        markers: [
          { latLng: [41.9, 12.45], name: "Vatican City" },
          { latLng: [43.73, 7.41], name: "Monaco" },
          { latLng: [-0.52, 166.93], name: "Nauru" },
          { latLng: [-8.51, 179.21], name: "Tuvalu" },
          { latLng: [43.93, 12.46], name: "San Marino" },
          { latLng: [47.14, 9.52], name: "Liechtenstein" },
          { latLng: [7.11, 171.06], name: "Marshall Islands" },
          { latLng: [17.3, -62.73], name: "Saint Kitts and Nevis" },
          { latLng: [3.2, 73.22], name: "Maldives" },
          { latLng: [35.88, 14.5], name: "Malta" },
          { latLng: [12.05, -61.75], name: "Grenada" },
          { latLng: [13.16, -61.23], name: "Saint Vincent and the Grenadines" },
          { latLng: [13.16, -59.55], name: "Barbados" },
          { latLng: [17.11, -61.85], name: "Antigua and Barbuda" },
          { latLng: [-4.61, 55.45], name: "Seychelles" },
          { latLng: [7.35, 134.46], name: "Palau" },
          { latLng: [42.5, 1.51], name: "Andorra" },
          { latLng: [14.01, -60.98], name: "Saint Lucia" },
          { latLng: [6.91, 158.18], name: "Federated States of Micronesia" },
          { latLng: [1.3, 103.8], name: "Singapore" },
          { latLng: [0.33, 6.73], name: "SÃ£o TomÃ© and PrÃ­ncipe" },
        ],
      }),
        a("#usa-vectormap").vectorMap({
          map: "us_merc_en",
          backgroundColor: "transparent",
          regionStyle: { initial: { fill: "#00acc1" } },
        }),
        a("#india-vectormap").vectorMap({
          map: "in_mill_en",
          backgroundColor: "transparent",
          regionStyle: { initial: { fill: "#00acc1" } },
        }),
        a("#australia-vectormap").vectorMap({
          map: "au_mill_en",
          backgroundColor: "transparent",
          regionStyle: { initial: { fill: "#00acc1" } },
        }),
        a("#chicago-vectormap").vectorMap({
          map: "us-il-chicago_mill_en",
          backgroundColor: "transparent",
          regionStyle: { initial: { fill: "#00acc1" } },
        });
    }),
      (a.VectorMap = new e()),
      (a.VectorMap.Constructor = e);
  })(window.jQuery),
  (function (a) {
    "use strict";
    window.jQuery.VectorMap.init();
  })();
