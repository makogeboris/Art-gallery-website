"use strict";

navigator.geolocation.getCurrentPosition(
  function (position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;

    const coords = [latitude, longitude];

    const map = L.map("map").setView(coords, 13);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    map.on("click", function (mapEvent) {
      console.log(mapEvent);
      const { lat, lng } = mapEvent.latlng;

      const mapIcon = L.icon({
        iconUrl: "assets/icon-location.svg",
        iconAnchor: coords,
      });

      L.marker([lat, lng], { icon: mapIcon }).addTo(map);
    });
  },
  function () {
    alert("Could not get your position");
  }
);
