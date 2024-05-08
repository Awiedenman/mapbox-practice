import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export const Map = () => {

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXdpZWRlbm1hbiIsImEiOiJjbHZ5MzhubTQybHF6MnFtZ3UyOHN5YWNtIn0._FWHh3PNLamSgT1X5Mn2Lw';

    const map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40],
      zoom: 9,
    });

    return () => map.remove();
  }, []);

  return <div id="map" style={{ width: '100vw', height: '100vh' }} />;
};
