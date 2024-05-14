import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useMap } from './contexts/map-context';

export const MapComponent: React.FC = () => {
  const { map } = useMap();

  useEffect(() => {
    if (map) {
      // Example: Add a marker to the map
      new mapboxgl.Marker().setLngLat([0, 0]).addTo(map);
    }
  }, [map]);

  return <div style={{ width: '100%', height: '90vh' }} />;
};
