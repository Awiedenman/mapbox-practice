import React, { createContext, useRef, useEffect, useContext, RefObject, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapContextType {
  map: mapboxgl.Map | null;
  setMapInstance: (map: mapboxgl.Map | null) => void;
}

const MapContext = createContext<MapContextType | null>(null);

type MapProviderProps = {
  children: React.ReactNode;

}

export const useMap = (): MapContextType => {
  const context = useContext(MapContext);
  if (!context) {
    throw new Error('useMap must be used within a MapProvider');
  }
  return context;
};

export const MapProvider: React.FC<MapProviderProps> = ({ children }) => {
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXdpZWRlbm1hbiIsImEiOiJjbHZ5MzhubTQybHF6MnFtZ3UyOHN5YWNtIn0._FWHh3PNLamSgT1X5Mn2Lw';
    const mapInstance = mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40],
      zoom: 9,
    });

    mapInstance.on('load', () => {
      setMap(mapInstance)
      mapInstance.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
    });

    return () => {
      if (mapRef.current) {
        mapInstance.remove();
      }
    };
  }, [mapContainerRef.current]);

  const setMapInstance = (map: mapboxgl.Map | null) => {
    setMap(map);
  };

  return (
    <MapContext.Provider value={{ map, setMapInstance }}>
      {children}
      <div className="map-container" ref={mapContainerRef} style={{ width: '100vw', height: '100vh' }} />
    </MapContext.Provider>
  );
};
