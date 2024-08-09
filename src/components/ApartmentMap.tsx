import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

type ApartmentMapProps = {
  address: string;
  latitude: number;
  longitude: number;
};

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

const containerStyle = {
  width: '100%',
  height: '400px'
};

export default function ApartmentMap({ address, latitude, longitude }: ApartmentMapProps) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: 13
    });

    new mapboxgl.Marker()
      .setLngLat([longitude, latitude])
      .addTo(map.current);
  }, [latitude, longitude]);

  return <div ref={mapContainer} style={containerStyle} />;
}
