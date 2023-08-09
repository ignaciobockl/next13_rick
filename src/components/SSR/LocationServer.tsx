import { useGetLocationsQuery } from '@/redux/services/locationApi';

import { LocationType } from '@/types';

const LocationServer = () => {

  // const { data } = useGetLocationsQuery({});

  // TODO: refetch y control de la data por si cambia

  return (
    <div>
      <h1>LOCATIONS (Server Side Rendering - Toolkit)</h1>
      {/* {data?.results?.length > 0 ? (
        // TODO: cambiar por LocationType
        data?.results?.map((item: LocationType) => (
          <h3 className='text-green-400' key={item.id}>
            {item.name}
          </h3>
        ))
      ) : (
        <h1 className='text-pink-600'>No Location Data.</h1>
      )} */}
    </div>
  );
};

export default LocationServer;
