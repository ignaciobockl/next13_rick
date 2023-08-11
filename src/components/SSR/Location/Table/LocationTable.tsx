import Link from 'next/link';

import { LocationType } from '../../../../types/index';

const LocationTable = (props: any) => {
  const { characters, locations } = props;

  return (
    <table className='table-auto'>
      <h1>LOCATIONS</h1>
      <thead>
        <tr>NUMBER</tr>
        <tr>NAME</tr>
        <tr>TYPE</tr>
        <tr>DIMENSION</tr>
        <tr>RESIDENTS</tr>
      </thead>
      <tbody>
        {locations?.results?.map((item: LocationType) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.dimension}</td>
            <td>
              {item.residents.map((subItem, i) => (
                <Link key={i + Math.random()} href={subItem}>
                  {subItem}
                </Link>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LocationTable;
