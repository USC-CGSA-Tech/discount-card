import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

type BusinessProps = {
  id?: number;
  name?: string;
  telephone?: string;
  wechat?: string;
  email?: string;
  address?: string;
  description?: string;
  promotion?: string;
  imageUrl?: string;
  releaseTime?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  isDeleted?: number;
}

function BusinessCard(props: BusinessProps) {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt={'example'} src={'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'} />}
    >
      <Meta title={props.name} description={props.description} />
    </Card>
  );
}

export default BusinessCard;
export type { BusinessProps };
