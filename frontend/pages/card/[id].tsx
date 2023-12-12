import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Spin } from 'antd';
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

  return (
    <div>
      {data ? (
        <Layout type={HeaderType.DETAIL} category={data?.type}>
          <div className="flex flex-col items-center px-5">
            <div className="text-3xl pb-2">{data?.name}</div>
            <img src={data?.imageUrl} alt={data?.name} />
            <div className="text-xl pb-[44px] pt-2">{data?.description}</div>
            <div className="w-full text-xl pb-[72px]">
              <div>地址：{data?.address}</div>
              {data?.telephone !== '' ? <div>电话：{data?.telephone}</div> : <div />}
              <div>折扣：{data.promotion}</div>
            </div>
          </div>
        </Layout>
      ) : (
        <Spin />
      )}
    </div>
  );
}

export default CardPage;
