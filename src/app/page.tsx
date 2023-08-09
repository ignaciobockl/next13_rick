import CharacterClient from '@/components/CSR/CharacterClient';
import CounterClient from '@/components/CSR/CounterClient';
import CharacterServer from '@/components/SSR/CharacterServer';
import LocationServer from '@/components/SSR/LocationServer';
import { useAppDispatch } from '@/redux/hooks';
import { Providers } from '@/redux/providers';

const HomePage = async () => {
  // const dispatch = useAppDispatch()

  const req = await fetch('https://rickandmortyapi.com/api/character');
  const dataCharacter = await req.json();

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
