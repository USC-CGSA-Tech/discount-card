import React, { useEffect } from 'react';
import Layout from '@/components/layout';
import { HeaderType } from '@/components/header';

function Cards(): JSX.Element {
  useEffect(() => {}, []);

  return (
    <Layout type={HeaderType.CARDS}>
      <div>sss</div>
    </Layout>
  );
}

export default Cards;
