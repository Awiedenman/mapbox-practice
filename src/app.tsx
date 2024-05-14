import { Layout } from './layout';
import { MapProvider } from './contexts/map-context';

export const App = () => (
  <>
    <MapProvider>
      <Layout />
    </MapProvider>
  </>
);
