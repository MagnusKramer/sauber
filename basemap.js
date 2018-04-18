

let myMap = L.map("mapdiv");

let myLayers = {
    
    openstreetmap : L.tileLayer (
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    ),
    geolandbasemap : L.tileLayer (
        "https://{s}.wien.gv.at/basemap/bmapoverlay/normal/google3857/{z}/{y}/{x}.png", {
            subdomains : ["maps","maps1","maps2","maps3","maps4"],
            attrubution : "Datenquelle: basemap.at"
        }
    ),

    bmapoverlay : L.tileLayer (
        "https://{s}.wien.gv.at/basemap/bmapoverlay/normal/google3857/{z}/{y}/{x}.png"
    ),
    
    bmapgrau : L.tileLayer (
        "https://{s}.wien.gv.at/basemap/bmapgrau/normal/google3857/{z}/{y}/{x}.png"
    ),

    bmaphidpi : L.tileLayer (
        "https://{s}.wien.gv.at/basemap/bmaphidpi/normal/google3857/{z}/{y}/{x}.jpeg"
    ),

    bmaporthofoto30cm : L.tileLayer (
        "https://{s}.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/{z}/{y}/{x}.jpeg"
    ),
};

myMap.addLayer (myLayers.bmaporthofoto30cm);
myMap.setView([47.267,11.383], 11);

/*
https://maps1.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png
https://maps1.wien.gv.at/basemap/bmapoverlay/normal/google3857/{z}/{y}/{x}.png
https://maps1.wien.gv.at/basemap/bmapgrau/normal/google3857/{z}/{y}/{x}.png
https://maps1.wien.gv.at/basemap/bmaphidpi/normal/google3857/{z}/{y}/{x}.jpeg
https://maps1.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/{z}/{y}/{x}.jpeg
*/