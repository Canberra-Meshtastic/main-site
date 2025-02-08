"use client"
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import dynamic from 'next/dynamic';

export default function NodeMap({ latitude, longitude }: { latitude: number, longitude: number }) {
    return <div>
        <MapContainer center={[latitude, longitude]} zoom={13} scrollWheelZoom={true} style={{ height: "670px" }} className="z-10">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[latitude, longitude]}/>
        </MapContainer>
    </div>

}

export const NodeMapDynamic = dynamic(
    () => import('@/components/ui/nodemap'), 
      { 
        ssr: false
      }
  );