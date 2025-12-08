"use client";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

// Custom marker icon with pulsing animation
const markerIcon = new L.DivIcon({
  className: "custom-marker",
  html: `
    <div class="relative flex items-center justify-center">
      <div class="absolute w-12 h-12 bg-blue-500/30 rounded-full animate-ping"></div>
      <div class="absolute w-8 h-8 bg-blue-500/40 rounded-full animate-pulse"></div>
      <div class="relative w-5 h-5 bg-blue-500 rounded-full border-2 border-white shadow-lg"></div>
    </div>
  `,
  iconSize: [48, 48],
  iconAnchor: [24, 24],
});

export default function LocationCard({ location, coords }) {
  const [interactive, setInteractive] = useState(false);

  const openGoogleMaps = () => {
    // Add window check here
    if (!coords || typeof window === "undefined") return;

    let lat, lng;

    if (Array.isArray(coords)) {
      lat = coords[0];
      lng = coords[1];
    } else if (typeof coords === "object") {
      lat = coords.lat ?? coords.latitude;
      lng = coords.lng ?? coords.longitude;
    }

    const url = `https://www.google.com/maps?q=${lat},${lng}`;
    window.open(url, "_blank");
  };

  return (
    <div
      className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 max-w-2xl cursor-pointer"
      onClick={openGoogleMaps}
    >
      {/* Map wrapper */}
      <div className="relative h-64 w-full">
        {/* Location label overlay */}
        <div className="absolute bottom-4 left-4 z-[1000] bg-white/50 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg">
          <p className="text-gray-900 font-medium text-base leading-snug">
            {location}
          </p>
        </div>

        {/* Enable interactions overlay */}
        {!interactive && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setInteractive(true);
            }}
            className="absolute inset-0 bg-transparent z-[500] cursor-pointer"
            aria-label="Enable map interaction"
          />
        )}

        {/* Map */}
        <MapContainer
          center={coords}
          zoom={13}
          scrollWheelZoom={interactive}
          dragging={interactive}
          zoomControl={false}
          doubleClickZoom={interactive}
          attributionControl={false}
          className="w-full h-full"
          style={{ background: "#f0f0f0" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            opacity={0.9}
            attribution=""
          />
          <Marker position={coords} icon={markerIcon}></Marker>
        </MapContainer>
      </div>
    </div>
  );
}
