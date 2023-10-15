import React from 'react';
import { List } from 'antd';
import { BusinessProps } from '../BusinessCard';
import BusinessCard from '../BusinessCard';

type BusinessCardGridProps = {
  businessCards: BusinessProps[];
};

function BusinessCardGrid(props: BusinessCardGridProps) {
  return (
    <List
      grid={{
        gutter: 8,
        xs: 1,
        sm: 2,
        md: 2,
        lg: 4,
        xl: 4,
        xxl: 6,
      }}
      dataSource={props.businessCards}
      renderItem={(item) => (
        <List.Item>
          <BusinessCard {...item} />
        </List.Item>
      )}
    />
  );
}

export default BusinessCardGrid;
export type { BusinessCardGridProps };
