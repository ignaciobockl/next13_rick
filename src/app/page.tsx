import CharacterClient from '@/components/CSR/CharacterClient';
import CounterClient from '@/components/CSR/CounterClient';
import CharacterServer from '@/components/SSR/CharacterServer';
import LocationServer from '@/components/SSR/Location/LocationServer';
import { setAllCharacters, setAllLocations } from '@/redux/features/rickAndMortySlice';

import { Providers } from '@/redux/providers';
import { store } from '@/redux/store';

const HomePage = async () => {

  const req = await fetch('https://rickandmortyapi.com/api/character');
  const dataCharacter = await req.json();


  const requestCharacters = await fetch('https://rickandmortyapi.com/api/character')
  const dataCharacters = await requestCharacters.json();
  store.dispatch(setAllCharacters(dataCharacters))

  const requestLocations = await fetch('https://rickandmortyapi.com/api/location')
  const dataLocations = await requestLocations.json();
  store.dispatch(setAllLocations(dataLocations))


  return (
    <div>
      <Providers>
        <CounterClient />
        <br />

        <CharacterClient />
      </Providers>

      <p>----------------------------------</p>
      <CharacterServer data={dataCharacter} />

      <br />
      <p>----------------------------------</p>
      <LocationServer />
    </div>
  );
};

export default HomePage;
