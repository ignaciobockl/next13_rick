import Link from 'next/link';

import { LocationType } from '../../../../types/index';

const LocationTable = (props: any) => {
  const { characters, locations } = props;

  return (
    <table className='table-auto'>
      <thead>
        <tr>
          <th>NUMBER</th>
        </tr>
        <tr>
          <th>NAME</th>
        </tr>
        <tr>
          <th>TYPE</th>
        </tr>
        <tr>
          <th>DIMENSION</th>
        </tr>
        <tr>
          <th>RESIDENTS</th>
        </tr>
      </thead>
      <tbody>
        {locations?.data?.map((item: LocationType) => (
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
