'use client'

import { useGetCharactersQuery } from '@/redux/services/characterApi';

import { CharacterType } from '@/types';

const CharacterClient = () => {
  const { data, isLoading } = useGetCharactersQuery({});

  return (
    <div>
      <h1>CHARACTERS (Client Side Rendering)</h1>
      {
        isLoading
        ?
          <h1 className='text-red-600'>Loading...</h1>
        :
        data?.results?.map((item: CharacterType) => (
          <h3 className='text-lime-300' key={item.id}>{item.name}</h3>
        ))
      }
    </div>
  );
};

export default CharacterClient;
