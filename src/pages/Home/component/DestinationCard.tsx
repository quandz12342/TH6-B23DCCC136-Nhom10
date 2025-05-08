import React from 'react';
import { Card } from 'antd';
import type { DestinationItem } from '@/models/destination';

interface Props {
  item: DestinationItem;
}

const DestinationCard: React.FC<Props> = ({ item }) => {
  return (
    <Card
      hoverable
      cover={
        <img
          alt={item.name}
          src={item.image}
          style={{ height: 180, objectFit: 'cover' }}
        />
      }
    >
      <Card.Meta title={item.name} description={item.description} />
      <div style={{ marginTop: 8 }}>
        <p><strong>Giá:</strong> {item.price.toLocaleString()} VND</p>
        <p><strong>Đánh giá:</strong> {item.rating} ★</p>
        <p><strong>Loại hình:</strong> {item.type}</p>
      </div>
    </Card>
  );
};

export default DestinationCard;
