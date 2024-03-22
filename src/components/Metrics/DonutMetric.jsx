import { DonutChart, Legend } from '@tremor/react';

const sales = [
  {
    name: 'New York',
    sales: 980,
  },
  {
    name: 'London',
    sales: 456,
  },
  {
    name: 'Hong Kong',
    sales: 390,
  },
  {
    name: 'San Francisco',
    sales: 240,
  },
  {
    name: 'Singapore',
    sales: 190,
  },
];

const valueFormatter = (number) =>
  `$ ${Intl.NumberFormat('us').format(number).toString()}`;

function DonutMetric() {
  return (
    <>
      <div className="h-full flex flex-col items-center justify-center space-x-6">
        <DonutChart
          data={sales}
          category="sales"
          index="name"
          valueFormatter={valueFormatter}
          colors={['lime', 'sky', 'green', 'teal', 'cyan']}
          className="w-40"
        />
        <Legend
          categories={['New York', 'London', 'Hong Kong', 'San Francisco', 'Singapore']}
          colors={['lime', 'sky', 'green', 'teal', 'cyan']}
          className="max-w-xs mt-4"
        />
      </div>
    </>
  );
}

export default DonutMetric;