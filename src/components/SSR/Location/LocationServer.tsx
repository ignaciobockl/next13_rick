import { store } from '@/redux/store';

import LocationTable from './Table/LocationTable';

const LocationServer = async () => {
  return (

      <LocationTable
        characters={store.getState().rickAndMortyApi.character}
        locations={store.getState().rickAndMortyApi.location}
      />

  );
};

export default LocationServer;
