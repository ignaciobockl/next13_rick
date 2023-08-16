import { charactersAdapter } from '@/adapters/characterAdapter';
import { locationsAdapter } from '@/adapters/locationAdapter';

import CharacterClient from '@/components/CSR/CharacterClient';
import CounterClient from '@/components/CSR/CounterClient';
import DateTimePickerClient from '@/components/CSR/DateTimePickerClient';
import CharacterServer from '@/components/SSR/CharacterServer';
import LocationServer from '@/components/SSR/Location/LocationServer';

import { fetchFn } from '@/helpers/fetch/fetchFn';

import {
  setAllCharacters,
  setAllLocations,
} from '@/redux/features/rickAndMortySlice';
import { Providers } from '@/redux/providers';
import { store } from '@/redux/store';

const HomePage = async () => {
  const req = await fetch('https://rickandmortyapi.com/api/character');
  const dataCharacter = await req.json();

  const responseCharacter = await fetchFn({
    baseUrl: 'https://rickandmortyapi.com/api/',
    url: 'character',
    adapter: charactersAdapter,
  });

  store.dispatch(setAllCharacters(responseCharacter.data));

  const responseLocation = await fetchFn({
    baseUrl: 'https://rickandmortyapi.com/api/',
    url: 'location',
    adapter: locationsAdapter,
  });
  store.dispatch(setAllLocations(responseLocation.data));

  return (
    <div>
      <Providers>
        <DateTimePickerClient />

        <CounterClient />

        <CharacterClient />
      </Providers>

      <p>----------------------------------</p>
      <CharacterServer data={dataCharacter} />

      <p>----------------------------------</p>
      <LocationServer />
    </div>
  );
};

export default HomePage;
