"use client";

import React from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import Image from "next/image";

const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

const position: [number, number] = [40.3842, 71.7843];

export default function Map() {
  return (
    <div className="flex items-start mt-10 max-sm:flex-col">
      <div className="flex flex-col gap-2 max-sm:w-full">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex-1 flex flex-col gap-3 bg-[#fdfdfd] p-5 hover:bg-gray-300 transition-all rounded">
            <div className="flex items-center gap-1">
              <Image src="/location.png" alt="location" width={38} height={38} />
              <div>
                <h3 className="font-bold">Farg&apos;ona viloyati {i + 1} - do&apos;kon</h3>
                <p className="text-gray-500 text-[12px]">Farg&apos;ona viloyati, Dang&apos;ara</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Image src="/time.png" alt="time" width={38} height={38} />
              <div>
                <h3 className="font-bold">08:00 - 20:00</h3>
                <p className="text-gray-500 text-[12px]">Ochiq</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex-3 p-2 max-sm:w-full max-sm:text-center">
        <MapContainer center={position} zoom={10} scrollWheelZoom={false} className="h-[400px] w-full">
          <TileLayer
            attribution={`&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`}
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              <strong>Do‘kon manzili</strong> <br /> Farg&apos;ona viloyati, Dang&apos;ara
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
