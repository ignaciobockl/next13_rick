'use client';

import { CharacterAdapterResponseType } from '@/adapters/types';

import { useGetCharactersQuery } from '@/redux/services/characterSlice';

const CharacterClient = () => {
  const { data, isLoading } = useGetCharactersQuery({});

  return (
    <div>
      <h1>CHARACTERS (Client Side Rendering)</h1>
      {isLoading ? (
        <h1 className='text-red-600'>Loading...</h1>
      ) : (
        data?.data?.map((item: CharacterAdapterResponseType) => (
          <h3 className='text-lime-300' key={item.id}>
            {item.name}
          </h3>
        ))
      )}
    </div>
  );
};

export default CharacterClient;
