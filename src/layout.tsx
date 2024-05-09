import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { BasemapSwitcher } from './basemap-switcher';
import { useMap } from './contexts/map-context';

export const Layout = () => {
  const map = useMap();

  useEffect(() => {
    if (map) {
      //TODO: make initial request to add layers or markers
    }
  }, [map]);


  return (
    <div>
      <BasemapSwitcher />

    </div>
  )
};
