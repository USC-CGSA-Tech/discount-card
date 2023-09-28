import React from 'react';
import { Button } from 'antd';
import Link from 'next/link';
import CSRInputExample from '@/components/CSRInputExample';

function Home() {
  return (
    <div>
      <CSRInputExample />
      <Button>
        <Link href="/">To index!</Link>
      </Button>
    </div>
  );
}

export default Home;
