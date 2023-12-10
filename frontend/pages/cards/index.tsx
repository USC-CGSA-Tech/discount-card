import React, { useEffect } from 'react';
import Layout from '@/components/layout';
import { HeaderType } from '@/components/header';
import fetchData from '@/util/fetch-data';

function Cards(): JSX.Element {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    const fetchAndSetData = async () => {
      const res = await fetchData();
      setData(res);
    };

    fetchAndSetData();
  }, []);

  return (
    <Layout type={HeaderType.CARDS}>
      <div>sss</div>
    </Layout>
  );
}

export default Cards;
