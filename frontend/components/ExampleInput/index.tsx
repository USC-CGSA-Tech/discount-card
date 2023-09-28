import React from 'react';
import { Button, Input } from 'antd';

import './styles.scss';

function ExampleInput() {
  return (
    <div className="example">
      <Button>Submit</Button>
      <Input className="example-input" />
    </div>
  );
}

export default ExampleInput;
