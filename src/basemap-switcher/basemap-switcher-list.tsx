import { useEffect } from 'react';
import { useMap } from '../contexts/map-context';


type BasemapConfig = {
  name: string,
  id: string,
}

const basemapConfig: BasemapConfig[] = [
  {
    name: 'Streets',
    id: "streets-v11",
  },
  {
    name: 'Light',
    id: "light-v10"
  },
  {
    name: 'Dark',
    id: "dark-v10",
  },
  {
    name: 'Satellite',
    id: "satellite-v9"
  },
];

export const BasemapSwitcherList = () => {
  const { map, setMapInstance } = useMap();

  const switchLayer = (basemapId: string): void => {
    if (map && event) {
      map.setStyle('mapbox://styles/mapbox/' + basemapId);
    }
  }
  console.log('baseMapConfig:: ', basemapConfig)

  return (
    <ul>
      {basemapConfig.length
        && basemapConfig.map((basemap) => (
          <li style={{ listStyleType: 'none' }}>
            <input type="radio" name="rtoggle" id={basemap.id} onChange={() => switchLayer(basemap.id)} />
            <label htmlFor={basemap.id}>{basemap.name}</label>
          </li>
        ))
      }
    </ul>
  )
};
