import React from 'react';
import BusinessCardGrid from '@/components/BusinessCardGrid';
import { BusinessCardGridProps } from '@/components/BusinessCardGrid';
import NavBar from '@/components/Navbar';

async function getBusinessList() {
  try {
    const baseUrl = 'http://backend:8081/staff/getAll';
    const params: Record<string, string> = {
      index: '1',
      pageSize: '10',
    };
    const query_string = new URLSearchParams(params).toString();
    const url = baseUrl + '?' + query_string;

    const res = await fetch(url);
    console.log('res:', res);

    if (!res.ok) {
      throw new Error('Failed to fetch business list');
    }

    console.log('res:', res);
    const resJson = await res.json();
    return resJson.data;
  } catch (error) {
    console.error('Error fetching business list:', error);
    return [];
  }
}

export async function getServerSideProps() {
  console.log('getServerSideProps');
  const businessList = await getBusinessList();
  return {
    props: {
      businessList,
    },
  };
}

type HomeProps = {
  businessList: BusinessCardGridProps['businessCards'];
};

function Home({ businessList }: HomeProps) {
  const [search, setSearch] = React.useState('');
  const [current, setCurrent] = React.useState('food');
  const handleClick = (e: any) => {
    console.log('click ', e);
    if (e.key === 'search') {
      return;
    }
    // TODO: filter business list by category
    setCurrent(e.key);
  };
  const handleChange = (e: any) => {
    console.log('change ', e);
    setSearch(e.target.value);
  };
  const filteredBusinessList = businessList.filter((business) => {
    return business.name.toLowerCase().includes(search.toLowerCase());
  });
  console.log('filteredBusinessList:', filteredBusinessList);
  return (
    <div>
      <NavBar current={current} onClick={handleClick} search={search} onChange={handleChange} />
      <BusinessCardGrid businessCards={filteredBusinessList} />
    </div>
  );
}

export default Home;
