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
  const map = useMap();
  console.log('map1:: ', map)

  const switchLayer = (event: React.SyntheticEvent): void => {
    //TODO: map is null here.
    console.log('map2:: ', map)
    if (map && event) {
      // const layerId = event.target.id;
      // map.setStyle('mapbox://styles/mapbox/' + layerId);
    }
  }
  console.log('baseMapConfig:: ', basemapConfig)

  return (
    <ul>
      {basemapConfig.length
        && basemapConfig.map((basemap) => (
          <li>
            <input type="radio" name="rtoggle" id={basemap.id} onChange={switchLayer} />
            <label htmlFor={basemap.id}>{basemap.name}</label>
          </li>
        ))
      }
    </ul>
  )
};
