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

    map.current.on('click', '3d-buildings', (e) => {
      if (e.features.length > 0) {
        const feature = e.features[0];
        const coordinates = feature.geometry.coordinates.slice();
        const description = feature.properties.name || 'Ingen information';

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(`<strong>Byggnad:</strong> ${description}`)
          .addTo(map.current);

        // Highlight the clicked building
        map.current.setPaintProperty('3d-buildings', 'fill-extrusion-color', [
          'case',
          ['==', ['get', 'name'], description],
          '#f00', // Highlight color
          '#000' // Default color
        ]);
      }
    });

    // Change the cursor to a pointer when the mouse is over the buildings layer.
    map.current.on('mouseenter', '3d-buildings', () => {
      map.current.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.current.on('mouseleave', '3d-buildings', () => {
      map.current.getCanvas().style.cursor = '';
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
    new mapboxgl.Marker()
      .setLngLat([16.544, 59.616]) // Central Västerås coordinates
      .addTo(map.current);
  }, [latitude, longitude]);

  return <div ref={mapContainer} style={containerStyle} />
}
