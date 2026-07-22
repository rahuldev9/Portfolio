"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export interface Location {
  id: string | number;
  name: string;
  lat: number;
  lng: number;
  studentName?: string;
  studentRole?: string;
  contactUrl?: string;
  profileImage?: string;
}

interface MapViewProps {
  locations: Location[];
  height?: string;
}

export default function MapView({ locations, height = "450px" }: MapViewProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new maplibregl.Map({
      container: mapRef.current,
      attributionControl: false, // Disables default attribution text
      style: {
        version: 8,
        sources: {
          osm: {
            type: "raster",
            tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            tileSize: 256,
          },
        },
        layers: [
          {
            id: "osm",
            type: "raster",
            source: "osm",
          },
        ],
      },
      center: [78.4867, 17.385],
      zoom: 5,
    });

    // Clean, modern navigation controls
    map.addControl(
      new maplibregl.NavigationControl({ showCompass: false }),
      "top-right",
    );

    const bounds = new maplibregl.LngLatBounds();

    locations.forEach((location) => {
      const popup = new maplibregl.Popup({
        offset: 35,
        closeButton: false,
        className: "custom-google-popup",
      }).setHTML(`
        <div class="custom-popup-panel" style="
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          width: 220px;
          padding: 10px 12px;
          color: #0f172a;
        ">
          <div style="display:flex; align-items:center; gap:10px; margin-bottom:8px;">
            <img
              src="${location.profileImage || "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80"}"
              alt="${location.studentName || "Student Partner"}"
              style="width:40px; height:40px; border-radius:999px; object-fit:cover; border:2px solid #dbeafe;"
            />
            <div>
              <div style="font-size:12px; font-weight:700; color:#2563eb; text-transform:uppercase; letter-spacing:0.04em;">Student Partner</div>
              <div class="custom-popup-name" style="font-size:13px; font-weight:700; color:#0f172a; line-height:1.2;">${location.studentName || "Student Lead"}</div>
            </div>
          </div>
          <div class="custom-popup-title" style="font-size:13px; font-weight:600; color:#111827; margin-bottom:4px;">${location.name}</div>
         
          <a
            href="${location.contactUrl || "https://forms.gle/tqcFsJkKTWDdnpyF7"}"
            target="_blank"
            rel="noopener noreferrer"
            style="display:inline-flex; align-items:center; gap:6px; font-size:12px; font-weight:600; color:#2563eb; text-decoration:none;"
          >
            Contact profile ↗
          </a>
        </div>
      `);

      // Reverting to the classic pin marker shape with Google's colors
      new maplibregl.Marker({
        color: "#1a73e8", // Google Blue
      })
        .setLngLat([location.lng, location.lat])
        .setPopup(popup)
        .addTo(map);

      bounds.extend([location.lng, location.lat]);
    });

    if (locations.length > 1) {
      map.fitBounds(bounds, {
        padding: 60,
        maxZoom: 14,
      });
    } else if (locations.length === 1) {
      map.flyTo({
        center: [locations[0].lng, locations[0].lat],
        zoom: 15,
        essential: true,
      });
    }

    const resizeObserver = new ResizeObserver(() => map.resize());
    resizeObserver.observe(mapRef.current);

    return () => {
      resizeObserver.disconnect();
      map.remove();
    };
  }, [locations]);

  return (
    <div className="w-full relative rounded-xl overflow-hidden shadow-xl border border-gray-100 dark:border-slate-800">
      <style jsx global>{`
        /* Remove MapLibre branding completely */
        .maplibregl-ctrl-attrib {
          display: none !important;
        }
        /* Style the popup card like Google Maps web app */
        .custom-google-popup .maplibregl-popup-content {
          background: #ffffff !important;
          border-radius: 20px !important;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15) !important;
          padding: 4px 8px !important;
          border: none !important;
        }
        .dark .custom-google-popup .maplibregl-popup-content {
          background: #0f172a !important;
        }
        .dark .custom-google-popup .custom-popup-panel,
        .dark .custom-google-popup .custom-popup-name,
        .dark .custom-google-popup .custom-popup-title {
          color: #e2e8f0 !important;
        }
        .dark .custom-google-popup .maplibregl-popup-tip {
          border-top-color: #0f172a !important;
        }
        .custom-google-popup .maplibregl-popup-tip {
          border-top-color: #ffffff !important;
        }
        /* Clean UI map controls */
        .maplibregl-ctrl-group {
          border-radius: 8px !important;
          box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15) !important;
          border: none !important;
        }
      `}</style>

      <div
        ref={mapRef}
        style={{
          width: "100%",
          height,
        }}
      />
    </div>
  );
}
