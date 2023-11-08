import React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header_home'

function Home() {
  return (
    <div>
      <Header />
      <div className='m-10 h-60 bg-gray-200 rounded-lg text-center'>
          <div className='text-5xl'>一些活动</div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
