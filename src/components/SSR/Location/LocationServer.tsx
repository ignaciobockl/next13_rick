import { store } from '@/redux/store';

import LocationTable from './Table/LocationTable';

const LocationServer = async () => {
  
  const location = store.getState().rickAndMortyApi.location
  
  return (
    
      <LocationTable
        characters={store.getState().rickAndMortyApi.character}
        locations={location}
      />

  );
};

export default LocationServer;
