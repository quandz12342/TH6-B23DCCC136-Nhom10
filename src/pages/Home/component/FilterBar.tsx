import React from 'react';
import { Select, Input } from 'antd';

const { Option } = Select;

interface Props {
  typeFilter?: string;
  sortBy?: string;
  search?: string;
  onTypeFilterChange: (value?: string) => void;
  onSortChange: (value?: string) => void;
  onSearchChange: (value: string) => void;
}

const FilterBar: React.FC<Props> = ({
  typeFilter,
  sortBy,
  search,
  onTypeFilterChange,
  onSortChange,
  onSearchChange,
}) => {
  return (
    <div style={{ marginBottom: 24, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <Input
        placeholder="Tìm kiếm điểm đến..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{ width: 200 }}
      />
      <Select
        placeholder="Loại hình"
        allowClear
        value={typeFilter}
        onChange={(value) => onTypeFilterChange(value)}
        style={{ width: 150 }}
      >
        <Option value="Biển">Biển</Option>
        <Option value="Núi">Núi</Option>
        <Option value="Thành phố">Thành phố</Option>
      </Select>
      <Select
        placeholder="Sắp xếp theo"
        value={sortBy}
        onChange={(value) => onSortChange(value)}
        style={{ width: 160 }}
        allowClear
      >
        <Option value="price">Giá (tăng dần)</Option>
        <Option value="rating">Đánh giá (cao xuống thấp)</Option>
      </Select>
    </div>
  );
};

export default FilterBar;
