import React, { useEffect, useState } from 'react';
import Layout from '@/components/layout';
import { HeaderType } from '@/components/header';
import fetchData from '@/util/fetch-data';

const typeConversion = {
  foods: '美食',
  entertainment: '娱乐',
  life: '生活',
};

interface resType {
  address?: string;
  createAt: string;
  description: string;
  email?: string;
  id: number;
  imageUrl?: string;
  isDeleted: number;
  name: string;
  promotion: string;
  releaseTime: string;
  tag: string[];
  telephone: string;
  type: string;
  updatedAt: string;
  wechat?: string;
}

interface DisplayPageProps {
  type: string;
}

function InfoElement(item: resType) {
  const { id, name, description, address, imageUrl } = item;

  return (
    <div key={id} className="flex flex-row justify-between pb-7">
      <img className="w-[100px]" src={imageUrl} alt={name} />
      <div className="w-full pl-4">
        <div className="">{name}</div>
        <div className="">地址：{address}</div>
        <div className="">折扣：{description}</div>
      </div>
    </div>
  );
}

function DisplayPage(props: DisplayPageProps): JSX.Element {
  const { type } = props;
  const [data, setData] = useState<resType[]>([]);
  const [dataSplitByCategory, setDataSplitByCategory] = useState({});

  useEffect(() => {
    const fetchDataAsync = async () => {
      const res = await fetchData();
      setData(res);
    };

    fetchDataAsync();
  }, []);

  useEffect(() => {
    if (!data) {
      return;
    }

    const desiredData = data.filter((item: resType) => item.type === typeConversion[type]);
    const dataSplitUp: { [key: string]: resType[] } = {};
    desiredData.forEach((item: resType) => {
      item.tag.forEach((tag: string) => {
        if (!(tag in dataSplitUp)) {
          dataSplitUp[tag] = [];
        }
        dataSplitUp[tag].push(item);
      });
    });
    setDataSplitByCategory(dataSplitUp);
  }, [data]);

  return (
    <Layout type={HeaderType.CARDS}>
      <div className="px-7">
        {Object.keys(dataSplitByCategory).map((category: string) => (
          <div key={category}>
            <div className="text-3xl font-bold py-4 border-b-neutral-400 border">{category}</div>
            <div className="pt-4">
              {dataSplitByCategory[category].map((item: resType) => InfoElement(item))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default DisplayPage;
