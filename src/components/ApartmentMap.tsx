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
  height: '600px'
};

export default function ApartmentMap({ address, latitude, longitude }: ApartmentMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [16.544, 59.616], // Central Västerås coordinates
      zoom: 15,
      pitch: 60, // Tilt the map to 60 degrees
      bearing: -20, // Rotate the map to -20 degrees
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
          'fill-extrusion-color': [
            'case',
            ['==', ['get', 'name'], address],
            '#f00', // Highlight color for selected building
            '#000' // Default color
          ],
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
    new mapboxgl.Marker()
      .setLngLat([16.544, 59.616]) // Central Västerås coordinates
      .addTo(map.current);
  }, [address, latitude, longitude]);

  return <div ref={mapContainer} style={containerStyle} />
}
