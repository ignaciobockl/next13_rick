import { CharacterType } from '@/types';

const CharacterServer = (props: any) => {

  const {data} = props;

  
  // TODO: refetch y control de la data por si cambia

  return (
    <div>
      <h1>CHARACTERS (Server Side Rendering)</h1>
      {
        data?.results?.length > 0
        ?
        data?.results?.map((item: CharacterType) => (
          <h3 className='text-purple-400' key={item.id}>{item.name}</h3>
        ))
        : <h1 className='text-orange-500'>No Character Data.</h1>
      }
    </div>
  );
};

export default CharacterServer;
