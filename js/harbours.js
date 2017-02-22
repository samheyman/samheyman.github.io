mapboxgl.accessToken = 'pk.eyJ1Ijoic2FtaGV5bWFuIiwiYSI6ImNpc2l6NWN4ODAwMjUydHJuMnBpZ3V4eG4ifQ.NgP2zfSjWhIFVG36qbFzeg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/bright-v9',
    zoom: 6,
    center: [11.5, 58.1]
});
    
// var layerList = document.getElementById('menu');
// var inputs = layerList.getElementsByTagName('input');

// function switchLayer(layer) {
//     var layerId = layer.target.id;
//     console.log("Layer requested: " + layerId);
//     map.setStyle('mapbox://styles/mapbox/' + layerId + '-v9');
//     setTimeout(function () {                    
//         loadMarkers();
//     }, 500); 
// } 

// for (var i = 0; i < inputs.length; i++) {
//     inputs[i].onclick = switchLayer;
// }

// detect click for popup 
map.on('click', function (e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['points'] });

    if (!features.length) {
        return;
    }

    var feature = features[0];

    // Populate the popup and set its coordinates
    // based on the feature found.
    var popup = new mapboxgl.Popup()
        .setLngLat(feature.geometry.coordinates)
        .setHTML(feature.properties.description)
        .addTo(map);
});

// Use the same approach as above to indicate that the symbols are clickable
// by changing the cursor style to 'pointer'.
map.on('mousemove', function (e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['points'] });
    map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
});

function loadMarkers() {
	map.addSource("points", {
	    "type": "geojson",
	    "data": {
	        "type": "FeatureCollection",
	        "features": [
	        {
	            "type": "Feature",
	            "title": "location x",
	            "geometry": {
	                "type": "Point",
	                "coordinates": [11.238136,58.366695]
	            },
	            "properties": {
	                "icon": "harbor",
	                "description": "<strong>Smögen</strong><p>58°36′6695″N, 11°23′8136″E</p><img src=\"img/smogen.jpg\" class='map-image'>"
	            }
	        }, 
	        {
	            "type": "Feature",
	            "title": "location x",
	            "geometry": {
	                "type": "Point",
	                "coordinates": [11.586856,57.884297]
	            },
	            "properties": {
	                "icon": "harbor",
	                "description": "<strong>Marstrand</strong><p>57°88′4297″N, 11°58′6856″E</p><img src=\"img/marstrand.jpg\" class='map-image'>"
	            }
	        },
	        {
	            "type": "Feature",
	            "title": "location x",
	            "geometry": {
	                "type": "Point",
	                "coordinates": [11.366887,58.308211],
	            },
	            "properties": {
	                "icon": "harbor",
	                "description": "<strong>Lilla Kornö</strong><p>58°30′8211″N, 11°36′6887″E</p><img src=\"img/lilla_korno.jpg\" class='map-image'>"
	            }
	        },
	        {
	            "type": "Feature",
	            "title": "location x",
	            "geometry": {
	                "type": "Point",
	                "coordinates": [11.546988,57.988553]
	            },
	            "properties": {
	                "icon": "harbor",
	                "description": "<strong>Skärhamn</strong><p>57°98′8553″N, 11°54′6988″E</p><img src=\"img/skarhamn.jpg\" class='map-image'>"
	            }
	        },
	        {
	            "type": "Feature",
	            "title": "location x",
	            "geometry": {
	                "type": "Point",
	                "coordinates": [11.264377,58.556654]
	            },
	            "properties": {
	                "icon": "harbor",
	                "description": "<strong>Hamburgsund</strong><p>58°55′6654″N, 11°26′4377″E</p><img src=\"img/hamburgsund.jpg\" class='map-image'>"
	            }
	        },
	        {
	            "type": "Feature",
	            "title": "location x",
	            "geometry": {
	                "type": "Point",
	                "coordinates": [11.2183,58.333168]
	            },
	            "properties": {
	                "icon": "harbor",
	                "description": "<strong>Hållö</strong><p>58°33′3168″N, 11°21′83″E</p><img src=\"img/hallo.jpg\" class='map-image'>"
	            }
	        },
	        {
	            "type": "Feature",
	            "title": "location x",
	            "geometry": {
	                "type": "Point",
	                "coordinates": [11.365285,58.112955]
	            },
	            "properties": {
	                "icon": "harbor",
	                "description": "<strong>Käringön</strong><p>58°11′2955″N, 11°36′5285″E</p><p>Restaurant: <a href=\"http://www.petersonskrog.se\" target=\"_blank\">Peterson's Krog</a></p><img src=\"img/karingon.jpg\" class='map-image'>"
	            }
	        },
	        {
	            "type": "Feature",
	            "title": "location x",
	            "geometry": {
	                "type": "Point",
	                "coordinates": [11.527045,57.974313]
	            },
	            "properties": {
	                "icon": "harbor",
	                "description": "<strong>Natur Hamn</strong><p>57°97′4313″N, 11°52′7045″E</p><img src=\"img/natur_hamn.jpg\" class='map-image'>"
	            }
	        },
	        {
	            "type": "Feature",
	            "title": "location x",
	            "geometry": {
	                "type": "Point",
	                "coordinates": [11.502611,58.254361]
	            },
	            "properties": {
	                "icon": "harbor",
	                "description": "<strong>Källviken</strong><p>58°15'15.7″N, 11°30'09.4″E</p><img src=\"img/kallviken.jpg\" class='map-image'>"
	            }
	        },
	        {
	            "type": "Feature",
	            "title": "location x",
	            "geometry": {
	                "type": "Point",
	                "coordinates": [11.318656,58.365024]
	            },
	            "properties": {
	                "icon": "harbor",
	                "description": "<strong>Keö </strong><p>58°21'54.1″N, 11°19'07.2″E</p><img src=\"img/keo.jpg\" class='map-image'>"
	            }
	        }
	        ]
	    }
	});
}

map.on('load', function() {
	
    loadMarkers();

    map.addLayer({
    "id": "points",
    "type": "symbol",
    "source": "points",
    "layout": {
        "icon-image": "{icon}-15",
        "text-field": "{title}",
        "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
        "text-offset": [0, 0.6],
        "text-anchor": "top",
        "icon-allow-overlap": true
    }
	});
});