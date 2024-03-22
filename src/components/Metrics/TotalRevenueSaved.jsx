import { BarChart } from '@tremor/react';
import { useState } from 'react';

const chartdata = [
  {
    date: 'Jan 23',
    '2022': 45,
    '2023': 78,
  },
  {
    date: 'Feb 23',
    '2022': 52,
    '2023': 71,
  },
  {
    date: 'Mar 23',
    '2022': 48,
    '2023': 80,
  },
  {
    date: 'Apr 23',
    '2022': 61,
    '2023': 65,
  },
  {
    date: 'May 23',
    '2022': 55,
    '2023': 58,
  },

];

function TotalRevenueSaved() {
  const [value, setValue] = useState(null);
  return (
    <>
      <BarChart
        className="mt-6"
        data={chartdata}
        index="date"
        categories={['2022', '2023']}
        colors={['green', 'cyan']}
        yAxisWidth={30}
        onValueChange={(v) => setValue(v)}
      />
    </>
  );
}

export default TotalRevenueSaved

