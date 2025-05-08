import React, { useEffect, useMemo, useState } from 'react';
import { useModel } from '@umijs/max';
import { Card, Spin, Row, Col, Select, Input, Typography } from 'antd';
import type { DestinationItem } from '@/models/destination';

const { Option } = Select;
const { Title } = Typography;

const HomePage: React.FC = () => {
  const { list, loading, fetchAll } = useModel('destination');
  const [typeFilter, setTypeFilter] = useState<string | undefined>(undefined);
  const [sortBy, setSortBy] = useState<string>(''); // 'price' | 'rating'
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    fetchAll();
  }, []);

  const filteredList = useMemo(() => {
    let result = [...list];

    // Tìm kiếm theo tên
    if (search) {
      result = result.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Lọc theo loại hình
    if (typeFilter) {
      result = result.filter((item) => item.type === typeFilter);
    }

    // Sắp xếp
    if (sortBy === 'price') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [list, typeFilter, sortBy, search]);

  return (
    <div style={{ padding: 24 }}>
      <Title level={2}>Khám phá điểm đến</Title>

      <div style={{ marginBottom: 24, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <Input
          placeholder="Tìm kiếm điểm đến..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: 200 }}
        />
        <Select
          placeholder="Loại hình"
          allowClear
          onChange={(value) => setTypeFilter(value)}
          style={{ width: 150 }}
        >
          <Option value="Biển">Biển</Option>
          <Option value="Núi">Núi</Option>
          <Option value="Thành phố">Thành phố</Option>
        </Select>
        <Select
          placeholder="Sắp xếp theo"
          onChange={(value) => setSortBy(value)}
          style={{ width: 160 }}
          allowClear
        >
          <Option value="price">Giá (tăng dần)</Option>
          <Option value="rating">Đánh giá (cao xuống thấp)</Option>
        </Select>
      </div>

      {loading ? (
        <Spin />
      ) : (
        <Row gutter={[16, 16]}>
          {filteredList.map((item) => (
            <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
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
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default HomePage;
