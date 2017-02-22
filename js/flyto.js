mapboxgl.accessToken = 'pk.eyJ1Ijoic2FtaGV5bWFuIiwiYSI6ImNpc2l6NWN4ODAwMjUydHJuMnBpZ3V4eG4ifQ.NgP2zfSjWhIFVG36qbFzeg';


var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/bright-v9',
    center: [11.5, 58.1],
    maxZoom: 16,
    minZoom: 3,
    zoom: 5,
});

var descriptionBox = document.getElementById('description-box');
var title = document.getElementById('location-title');
var description = document.getElementById('location-description');
var image = document.getElementById('location-image');

var locations = [
            {
                "id" : "1",
                "type": "Feature",
                "title": "Hamburgsund",
                "geometry": {
                    "type": "Point",
                    "coordinates": [11.264377,58.556654]
                },
                "properties": {
                    "icon": "harbor",
                    "description": "Hamburgsund",
                    "coordinates": "58°55′6654″N, 11°26′4377″E",
                    "imageSource": "img/hamburgsund.jpg"
                },
                "camera": {
                    center: [11.264377,58.556654],
                    bearing: 25.3,
                    zoom: 14,
                    pitch: 50
                }
            },
            {   
                "id" : "2",
                "type": "Feature",
                "title": "Smögen",
                "geometry": {
                    "type": "Point",
                    "coordinates": [11.238136,58.366695]
                },
                "properties": {
                    "icon": "harbor",
                    "description": "Smögen",
                    "coordinates": "58°36′6695″N, 11°23′8136″E",
                    "imageSource": "img/smogen.jpg"
                },
                "camera": {
                    center: [11.238136,58.366695],
                    bearing: 25.3,
                    zoom: 15,
                }
            }, 
            {
                "id" : "3",
                "type": "Feature",
                "title": "Hållö",
                "geometry": {
                    "type": "Point",
                    "coordinates": [11.2183,58.333168]
                },
                "properties": {
                    "icon": "harbor",
                    "description": "Hållö",
                    "coordinates": "58°33′3168″N, 11°21′83″E",
                    "imageSource": "img/hallo.jpg"
                },
                "camera": {
                    center: [11.2183,58.333168],
                    bearing: 15.3,
                    zoom: 13
                }
            },
            {
                "id" : "4",
                "type": "Feature",
                "title": "Keö",
                "geometry": {
                    "type": "Point",
                    "coordinates": [11.318656,58.365024]
                },
                "properties": {
                    "icon": "harbor",
                    "description": "Keö",
                    "coordinates": "58°21'54.1″N, 11°19'07.2″E",
                    "imageSource": "img/keo.jpg"
                },
                "camera": {
                    center: [11.318656,58.365024],
                    bearing: 55.3,
                    zoom: 14
                }
            },
            {
                "id" : "5",
                "type": "Feature",
                "title": "Lilla Kornö",
                "geometry": {
                    "type": "Point",
                    "coordinates": [11.366887,58.308211],
                },
                "properties": {
                    "icon": "harbor",
                    "description": "Lilla Kornö",
                    "coordinates": "58°30′8211″N, 11°36′6887″E",
                    "imageSource": "img/lilla_korno.jpg"
                },
                "camera": {
                    center: [11.366887,58.308211],
                    bearing: 25.3,
                    zoom: 11.5
                }
            },
            {
                "id" : "8",
                "type": "Feature",
                "title": "Käringön",
                "geometry": {
                    "type": "Point",
                    "coordinates": [11.365285,58.112955]
                },
                "properties": {
                    "icon": "harbor",
                    "description": "Käringön, Restaurant: <a href=\"http://www.petersonskrog.se\" target=\"_blank\">Peterson's Krog</a>",
                    "coordinates": "58°11′2955″N, 11°36′5285″E",
                    "imageSource": "img/karingon.jpg"
                },
                "camera": {
                    center: [11.365285,58.112955],
                    bearing: 125.3,
                    zoom: 11.5
                }
            },
            {
                "id" : "6",
                "type": "Feature",
                "title": "Källviken",
                "geometry": {
                    "type": "Point",
                    "coordinates": [11.502611,58.254361]
                },
                "properties": {
                    "icon": "harbor",
                    "description": "Källviken",
                    "coordinates": "58°15'15.7″N, 11°30'09.4″E",
                    "imageSource": "img/kallviken.jpg"
                },
                "camera": {
                    center: [11.502611,58.254361],
                    bearing: 125.3,
                    zoom: 11.5
                }
            },
            {
                "id" : "7",
                "type": "Feature",
                "title": "Skärhamn",
                "geometry": {
                    "type": "Point",
                    "coordinates": [11.546988,57.988553]
                },
                "properties": {
                    "icon": "harbor",
                    "description": "Skärhamn",
                    "coordinates": "57°98′8553″N, 11°54′6988″E",
                    "imageSource": "img/skarhamn.jpg"
                },
                "camera": {
                    center: [11.546988,57.988553],
                    bearing: 25.3,
                    zoom: 16
                }
            },
            {
                "id" : "9",
                "type": "Feature",
                "title": "Natur Hamn",
                "geometry": {
                    "type": "Point",
                    "coordinates": [11.527045,57.974313]
                },
                "properties": {
                    "icon": "harbor",
                    "description": "Natur Hamn",
                    "coordinates": "57°97′4313″N, 11°52′7045″E",
                    "imageSource": "img/natur_hamn.jpg"
                },
                "camera": {
                    center: [11.527045,57.974313],
                    bearing: 125.3,
                    zoom: 14.5
                }
            },
            
            {
                "id" : "10",
                "type": "Feature",
                "title": "Marstrand",
                "geometry": {
                    "type": "Point",
                    "coordinates": [11.586856,57.884297]
                },
                "properties": {
                    "icon": "harbor",
                    "description": "Marstrand",
                    "coordinates": "57°88′4297″N, 11°58′6856″E",
                    "imageSource": "img/marstrand.jpg"
                },
                "camera": {
                    center: [11.586856,57.884297],
                    bearing: 25.3,
                    zoom: 14
                }
            }
            
            ];

// function highlightBorough(code) {
//     // Only show the polygon feature that cooresponds to `borocode` in the data
//     map.setFilter('highlight', ["==", "borocode", code]);
// }

function playback(index) {
    title.textContent = locations[index].title;
    description.textContent = "GPS: " + locations[index].properties.coordinates;
    image.src = locations[index].properties.imageSource;
    //highlightBorough(locations[index].id ? locations[index].id : '');

    // Animate the map position based on camera properties
    map.flyTo(locations[index].camera);

    map.once('moveend', function() {
        // Duration the slide is on screen after interaction
        window.setTimeout(function() {
            // Increment index
            index = (index + 1 === locations.length) ? 0 : index + 1;
            playback(index);
        }, 3000); // After callback, show the location for 3 seconds.
    });
}



map.on('load', function() {
    // Display the last title/description first
    title.textContent = locations[locations.length - 1].title;
    description.textContent = "GPS: " + locations[locations.length - 1].properties.description;
    image.src = locations[locations.length -1 ].properties.imageSource;
            map.addSource("points", {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": locations
                }
    });

        

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
    setTimeout(function(){
            descriptionBox.className = "map-overlay-container";

        // Start the playback animation for each borough
        playback(0);
    }, 5000);
});