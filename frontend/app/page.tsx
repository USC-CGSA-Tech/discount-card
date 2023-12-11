import React from 'react';
import Link from 'next/link';
import Layout from '@/components/layout';
import { HeaderType } from '@/components/header';

interface NavBtnProps {
  text: string;
  type: string;
}

function NavBtn(props: NavBtnProps) {
  const { text, type } = props;

  return (
    <Link href={{ pathname: type }}>
      <div className="w-[100px] rounded-lg bg-theme text-4xl text-white h-[60px] flex items-center justify-center">
        {text}
      </div>
    </Link>
  );
}

function Home() {
  return (
    <Layout type={HeaderType.LANDING}>
      <div className="px-5">
        <div className="flex flex-col justify-center items-center text-5xl py-8 font-bold">
          <div>USC CGSA</div>
          <div>折扣卡商家</div>
        </div>
        <div className="flex justify-center text-xl pb-[52px]">关于此页面的介绍</div>
        <div className="flex justify-between">
          <NavBtn text="美食" type="foods" />
          <NavBtn text="娱乐" type="entertainment" />
          <NavBtn text="生活" type="life" />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
