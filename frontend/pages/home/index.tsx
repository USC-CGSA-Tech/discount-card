import React from 'react';
import { Button } from 'antd';
import Link from 'next/link';
import CSRInputExample from '@/components/CSRInputExample';
import { BusinessProps } from '@/components/BusinessCard';
import BusinessCard from '@/components/BusinessCard';

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
  businessList: Array<BusinessProps>;
};

function Home({ businessList }: HomeProps) {
  console.log('businessList:', businessList);
  return (
    <div>
      <CSRInputExample />
      <Button>
        <Link href="/">To indexsssss!</Link>
      </Button>
      {businessList.map((business) => (
        <BusinessCard {...business} />
      ))}
    </div>
  );
}

export default Home;
