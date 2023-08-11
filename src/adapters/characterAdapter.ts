import { CharacterType, CharactersType } from '@/types';
import {
  CharactersAdapterResponseType,
  CharacterAdapterResponseType,
} from './types';

export const charactersAdapter = (
  APIInfo: CharactersType
): CharactersAdapterResponseType => {
  let data: Array<any> = [];

  if (APIInfo.info.count > 0) {
    data = APIInfo.results.map((character) => characterAdapter(character));
  }

  return {
    data,
    pagination: {
      nextPage: APIInfo.info.next,
      prevPage: APIInfo.info.prev,
      quantity: APIInfo.info.count,
      totalPages: APIInfo.info.pages,
    },
  };
};

export const characterAdapter = (
  APIInfo: CharacterType
): CharacterAdapterResponseType | undefined => {
  if (Object.entries(APIInfo).length > 0)
    return {
      creationDate: APIInfo.created,
      episode: APIInfo.episode,
      gender: APIInfo.gender,
      id: APIInfo.id,
      image: APIInfo.image,
      location: {
        name: APIInfo.location.name,
        url: APIInfo.location.url,
      },
      name: APIInfo.name,
      origin: {
        name: APIInfo.origin.name,
        url: APIInfo.origin.url,
      },
      species: APIInfo.species,
      status: APIInfo.status,
      type: APIInfo.type,
      url: APIInfo.url,
    };
};
