import { BasemapSwitcherList } from './basemap-switcher-list';

export const BasemapSwitcher = () => (
  <div
    className='basemap-switcher'
    style={{
      position: 'absolute',
      left: '0',
      top: '0',
      height: 'auto',
      width: '100%',
      background: '#fff',
      zIndex: '100'
    }}>
    <BasemapSwitcherList />
  </div>
);
