"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { useMap } from "react-leaflet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });

// interface mapInfo {
//   position: [number, number],
//   name: string
// }

export default function Map() {
  const [position, setPosition] = useState<[number, number]>([40.578900959470324, 70.91519190427414])


  const handlePosition = (position: [number, number]): void => {
    setPosition(position)
  }


  return (
    <div className="flex items-start mt-10 max-sm:flex-col">
      <div className="flex flex-col gap-2 max-sm:w-full py-2">
        {[
          {
            position: [40.578900959470324, 70.91519190427414],
            name: "Farg'ona viloyati, Dang'ara",
            timeRange: {
              from: "08:00",
              to: "19:00"
            }
          },
        ].map((_, i) => (
          <div
            key={i}
            className={`flex-1 flex flex-col gap-3 ${position[0] === _.position[0] ? "bg-gray-200 dark:bg-gray-200" : "bg-[#fdfdfd]"} p-5 hover:bg-gray-500 dark:hover:bg-gray-300 transition-all rounded cursor-pointer dark:text-black`}
            onClick={(): void => handlePosition(_.position as [number, number])}
          >
            <div className="flex items-center gap-1">
              <FontAwesomeIcon icon={faLocationDot} className="text-2xl mr-3" />
              <div>
                <h3 className="font-bold">Farg&apos;ona viloyati {i + 1} - do&apos;kon</h3>
                <p className="text-gray-500 text-[12px]">{_.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <FontAwesomeIcon icon={faClock} className="text-2xl mr-3" />
              <div>
                <h3 className="font-bold">{_.timeRange.from} - {_.timeRange.to}</h3>
                <p className="text-gray-500 text-[12px]">Ochiq</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex-3 p-2 max-sm:w-full max-sm:text-center">
        <MapContainer className="h-[400px] z-1">
          <MapCenter position={position} />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
          </Marker>
        </MapContainer>
      </div>
    </div >
  );
}


const MapCenter: React.FC<{ position: [number, number] }> = ({ position }) => {
  const map = useMap();
  React.useEffect(() => {
    map.setView(position, 10);
  }, [map, position]);

  return null;
};
