import { LocationType, LocationsType } from '@/types';
import {
  LocationAdapterResponseType,
  LocationsAdapterResponseType,
} from './types';

export const locationsAdapter = (
  APIInfo: LocationsType
): LocationsAdapterResponseType => {
  let data: Array<any> = [];

  if (APIInfo.info.count > 0) {
    data = APIInfo.results.map((location) => locationAdapter(location));
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

export const locationAdapter = (
  APIInfo: LocationType
): LocationAdapterResponseType | undefined => {
  if (Object.entries(APIInfo).length > 0)
    return {
      creationDate: APIInfo.created,
      dimension: APIInfo.dimension,
      id: APIInfo.id,
      name: APIInfo.name,
      residents: APIInfo.residents,
      type: APIInfo.type,
      url: APIInfo.url,
    };
};
