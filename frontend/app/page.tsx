import React from 'react';
import Link from 'next/link';
import { Carousel } from 'antd';
import Layout from '@/components/layout';
import { HeaderType } from '@/components/header';

interface NavBtnProps {
  text: string;
  type: string;
}

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

function NavBtn(props: NavBtnProps) {
  const { text, type } = props;

  return (
    <Link href={{ pathname: type }}>
      <div className="max-w-[100px] rounded-lg bg-theme text-xl text-white max-h-[60px] flex items-center justify-center p-2">
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
        <div className="px-8 pb-5">
          <Carousel autoplay>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
        </div>
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
