import React from 'react';
import { Button } from 'antd';
import Link from 'next/link';

function Home() {
  return (
    <Button>
      <Link href="home">To home!</Link>
    </Button>
  );
}

export default Home;
