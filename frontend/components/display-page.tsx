import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/layout';
import { HeaderType } from '@/components/header';
import { fetchList } from '@/util/fetch-data';

const typeConversion = {
  foods: '美食',
  entertainment: '娱乐',
  life: '生活',
};

export interface resType {
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
    <Link href={`/card/${id}`} key={id}>
      <div className="flex flex-row justify-between pb-7">
        <img className="w-[100px]" src={imageUrl} alt={name} />
        <div className="w-full pl-4">
          <div className="">{name}</div>
          <div className="">地址：{address}</div>
          <div className="">折扣：{description}</div>
        </div>
      </div>
    </Link>
  );
}

function DisplayPage(props: DisplayPageProps): JSX.Element {
  const { type } = props;
  const [data, setData] = useState<resType[]>([]);
  const [dataSplitByCategory, setDataSplitByCategory] = useState({});

  useEffect(() => {
    const fetchDataAsync = async () => {
      const res = await fetchList();
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
      <div className="bg-theme flex flex-row h-[72px] justify-between">
        <div className="flex flex-col-reverse flex-1">
          <div
            className={`rounded-tl-[36px] rounded-tr-[36px] bg-white flex flex-col-reverse ${
              type === 'foods' ? 'h-3/4 text-4xl' : 'h-1/2 text-3xl'
            } text-center`}
          >
            <Link href="/foods">美食</Link>
          </div>
        </div>
        <div className="flex flex-col-reverse flex-1">
          <div
            className={`rounded-tl-[36px] rounded-tr-[36px] bg-white flex flex-col-reverse ${
              type === 'entertainment' ? 'h-3/4 text-4xl' : 'h-1/2 text-3xl'
            } text-center`}
          >
            <Link href="/entertainment">娱乐</Link>
          </div>
        </div>
        <div className="flex flex-col-reverse flex-1">
          <div
            className={`rounded-tl-[36px] rounded-tr-[36px] bg-white flex flex-col-reverse ${
              type === 'life' ? 'h-3/4 text-4xl' : 'h-1/2 text-3xl'
            } text-center`}
          >
            <Link href="/life">生活</Link>
          </div>
        </div>
      </div>
      <div className="px-7">
        {Object.keys(dataSplitByCategory).map((category: string) => (
          <div key={category}>
            <div className="text-3xl font-bold py-4 border-b-neutral-400 border-b">{category}</div>
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
