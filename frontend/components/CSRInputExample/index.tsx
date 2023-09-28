'use client';

import React from 'react';
import { Button, Input } from 'antd';

import './styles.scss';

function CSRInputExample() {
  return (
    <div className="example">
      <Button>Submit</Button>
      <Input className="example-input" />
    </div>
  );
}

export default CSRInputExample;
