import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

type ApartmentMapProps = {
  address: string;
  latitude: number;
  longitude: number;
};

if (mapboxgl) {
  mapboxgl.accessToken = 'pk.eyJ1IjoibGFuZGdyZW4iLCJhIjoiY2lmdG9jcmJjMDF5OHQwbTd3N25rcjhhcyJ9.qpVIAJhkz3i8_VGYSbu3Yw';
} else {
  console.error("mapboxgl is not defined");
}

const containerStyle = {
  width: '100%',
  height: '400px'
};

export default function ApartmentMap({ address, latitude, longitude }: ApartmentMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [16.544, 59.616],
      zoom: 13
    });

    map.current.on('load', () => {
      map.current.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint': {
          'fill-extrusion-color': '#000',
          'fill-extrusion-height': [
            'interpolate', ['linear'], ['zoom'],
            15, 0,
            15.05, ['get', 'height']
          ],
          'fill-extrusion-base': [
            'interpolate', ['linear'], ['zoom'],
            15, 0,
            15.05, ['get', 'min_height']
          ],
          'fill-extrusion-opacity': 0.6
        }
      });
    });

    new mapboxgl.Marker()
      .setLngLat([longitude, latitude])
      .addTo(map.current);
  }, [latitude, longitude]);

  return <div ref={mapContainer} style={containerStyle} />;
}
