import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/layout';
import { HeaderType } from '@/components/header';
import { fetchCardById } from '@/util/fetch-data';
import { resType } from '@/components/display-page';

function CardPage(): JSX.Element {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState<resType | null>(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const res = await fetchCardById(Number(id));
      setData(res);
    };

    fetchDataAsync();
  }, [id]);

  console.log(data?.type);
  return (
    <div>
      <Layout type={HeaderType.DETAIL} category={data?.type}>
        <h1>Card Page</h1>
        <p>ID: {id}</p>
      </Layout>
    </div>
  );
}

export default CardPage;
