import React, { createContext, useRef, useEffect, useContext } from 'react';
import mapboxgl from 'mapbox-gl';

interface MapContextType {
  map: mapboxgl.Map | null;
}

const MapContext = createContext<MapContextType | null>(null);

type MapProviderProps = {
  children: React.ReactNode;
}

export const MapProvider: React.FC<MapProviderProps> = ({ children }) => {
  const mapRef = useRef<mapboxgl.Map | null>(null);


  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXdpZWRlbm1hbiIsImEiOiJjbHZ5MzhubTQybHF6MnFtZ3UyOHN5YWNtIn0._FWHh3PNLamSgT1X5Mn2Lw';
    mapRef.current = new mapboxgl.Map({
      container: 'map', // Replace 'map' with the ID of your map container element
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40],
      zoom: 9,
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  return <MapContext.Provider value={{ map: mapRef.current }}>{children}</MapContext.Provider>;
};

export const useMap = (): mapboxgl.Map | null => {
  const context = useContext(MapContext);
  return context ? context.map : null;
};
