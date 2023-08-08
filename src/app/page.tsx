import CharacterClient from '@/components/CSR/CharacterClient';
import CounterClient from '@/components/CSR/CounterClient';
import CharacterServer from '@/components/SSR/CharacterServer';
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
      {/* {dataCharacter?.results?.length > 0 && (
        <CharacterServer data={dataCharacter?.results} />
      )} */}
        <CharacterServer data={dataCharacter} />

    </div>
  );
};

export default HomePage;
