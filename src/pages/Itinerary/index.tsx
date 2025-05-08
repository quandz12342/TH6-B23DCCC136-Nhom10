import { useState } from 'react';
import { useModel } from 'umi';
import { Button, Card, DatePicker, Divider, InputNumber, message, Typography } from 'antd';
import dayjs from 'dayjs';

const { Title } = Typography;

const sampleDestinations = [
  { id: '1', name: 'Đà Lạt', location: 'Lâm Đồng', estimatedCost: 1500000, durationHours: 5 },
  { id: '2', name: 'Hội An', location: 'Quảng Nam', estimatedCost: 1200000, durationHours: 3 },
  { id: '3', name: 'Vịnh Hạ Long', location: 'Quảng Ninh', estimatedCost: 2000000, durationHours: 4 },
];

const ItineraryPage = () => {
  const [date, setDate] = useState<string>();
  const [selected, setSelected] = useState<typeof sampleDestinations>([]);
  const { days, totalCost, totalTravelHours, setDays } = useModel('ItineraryModel', (m) => ({
    days: m.days,
    totalCost: m.totalCost,
    totalTravelHours: m.totalTravelHours,
    setDays: m.setDays,
  }));

  const addDay = () => {
    if (!date || selected.length === 0) {
      message.warning('Vui lòng chọn ngày và điểm đến');
      return;
    }

    const newDays = [...days, { date, destinations: selected }];
    setDays(newDays);
    setSelected([]);
    message.success('Đã thêm ngày vào lịch trình');
  };

  return (
    <div className="p-4">
      <Title level={2}>Tạo lịch trình</Title>
      <DatePicker onChange={(val) => setDate(dayjs(val).format('YYYY-MM-DD'))} />
      <Divider />
      <Title level={4}>Chọn điểm đến:</Title>
      {sampleDestinations.map((d) => (
        <Card key={d.id} className="my-2">
          <p>{d.name} - {d.location}</p>
          <p>Chi phí: {d.estimatedCost.toLocaleString()} VND - Di chuyển: {d.durationHours}h</p>
          <Button
            onClick={() => setSelected((prev) => [...prev, d])}
            disabled={selected.includes(d)}
          >
            Thêm vào ngày
          </Button>
        </Card>
      ))}
      <Divider />
      <Button type="primary" onClick={addDay}>Thêm vào lịch trình</Button>

      <Divider />
      <Title level={4}>Lịch trình hiện tại</Title>
      {days.map((day, idx) => (
        <Card key={idx} className="mb-2">
          <Title level={5}>Ngày: {day.date}</Title>
          {day.destinations.map((d) => (
            <p key={d.id}>{d.name} - {d.estimatedCost.toLocaleString()} VND</p>
          ))}
        </Card>
      ))}
      <Divider />
      <p><strong>Tổng chi phí:</strong> {totalCost.toLocaleString()} VND</p>
      <p><strong>Tổng giờ di chuyển:</strong> {totalTravelHours} giờ</p>
    </div>
  );
};

export default ItineraryPage;
