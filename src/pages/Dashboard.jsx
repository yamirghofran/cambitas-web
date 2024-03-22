import React from "react";
import { Helmet } from "react-helmet";
import Snippet from "../components/Dashboard/Snippet";
import Alerts from "../components/Dashboard/Alerts";

import ActiveProjectsIcon from "../assets/icons/Snippets/active-projects-icon.png";
import PlannedProjectsIcon from "../assets/icons/Snippets/planned-projects-icon.png";
import TotalInventoryIcon from "../assets/icons/Snippets/total-inventory-icon.png";
import TotalEmployeesIcon from "../assets/icons/Snippets/total-employees-icon.png";
import TopUsedItems from "../components/Dashboard/DashboardProjects";
import { Link } from "react-router-dom";
import { DonutChart, AreaChart } from "@tremor/react";

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
]

const chartdata = [
  {
    date: 'Jan 22',
    SemiAnalysis: 2890,
    'The Pragmatic Engineer': 2338,
  },
  {
    date: 'Feb 22',
    SemiAnalysis: 2756,
    'The Pragmatic Engineer': 2103,
  },
  {
    date: 'Mar 22',
    SemiAnalysis: 3322,
    'The Pragmatic Engineer': 2194,
  },
  {
    date: 'Apr 22',
    SemiAnalysis: 3470,
    'The Pragmatic Engineer': 2108,
  },
  {
    date: 'May 22',
    SemiAnalysis: 3475,
    'The Pragmatic Engineer': 1812,
  },
  {
    date: 'Jun 22',
    SemiAnalysis: 3129,
    'The Pragmatic Engineer': 1726,
  },
  {
    date: 'Jul 22',
    SemiAnalysis: 3490,
    'The Pragmatic Engineer': 1982,
  },
  {
    date: 'Aug 22',
    SemiAnalysis: 2903,
    'The Pragmatic Engineer': 2012,
  },
  {
    date: 'Sep 22',
    SemiAnalysis: 2643,
    'The Pragmatic Engineer': 2342,
  },
  {
    date: 'Oct 22',
    SemiAnalysis: 2837,
    'The Pragmatic Engineer': 2473,
  },
  {
    date: 'Nov 22',
    SemiAnalysis: 2954,
    'The Pragmatic Engineer': 3848,
  },
  {
    date: 'Dec 22',
    SemiAnalysis: 3239,
    'The Pragmatic Engineer': 3736,
  },
];


const datahero = [
  {
    name: "Noche Holding AG",
    value: 9800,
  },
  {
    name: "Rain Drop AG",
    value: 4567,
  },
  {
    name: "Push Rail AG",
    value: 3908,
  },
  {
    name: "Flow Steal AG",
    value: 2400,
  },
  {
    name: "Tiny Loop Inc.",
    value: 2174,
  },
  {
    name: "Anton Resorts Holding",
    value: 1398,
  },
];

const valueFormatter = function (number) {
  return '$ ' + new Intl.NumberFormat('us').format(number).toString();
};

function DonutChartUsageExampleWithClickEvent() {
  return (
    <>
      <DonutChart
        data={sales}
        category="sales"
        index="name"
        valueFormatter={valueFormatter}
        colors={['lime', 'sky', 'green', 'teal', 'cyan']}
      />
    </>
  );
}

function AreaChartUsageExample() {
  return (
    <>
      <p className="text-lg text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">$34,567</p>
      <AreaChart
        className="mt-4 h-72"
        data={chartdata}
        index="date"
        yAxisWidth={65}
        categories={['SemiAnalysis', 'The Pragmatic Engineer']}
        colors={['green', 'teal']}
        valueFormatter={valueFormatter}
      />
    </>
  );
}

const dataFormatter = (number) =>
  `$ ${Intl.NumberFormat("us").format(number).toString()}`;

function DonutChartHero() {
  return (
    <>
      <div className="mx-auto space-y-12">
        <div className="space-y-3">
          <div className="flex justify-center">
            <DonutChart
              data={datahero}
              variant="donut"
              valueFormatter={dataFormatter}
              onValueChange={(v) => console.log(v)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

function InventorySummaryItem({ name, quantity }) {
  return (
    <div className="w-full px-2 py-1 flex justify-between border-b border-gray-200 border-dashed">
      <h3 className="text-sm">{name}</h3>
      <p className="text-sm font-semibold">{quantity}</p>
    </div>
  );
}

function Dashboard() {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className="w-full pt-4 h-full">
        <div className="flex flex-wrap justify-between mb-4">
          <Snippet
            icon={ActiveProjectsIcon}
            title="Active Projects"
            value={120}
          />
          <Snippet
            icon={PlannedProjectsIcon}
            title="Planned Projects"
            value={180}
          />
          <Snippet
            icon={TotalInventoryIcon}
            title="Total Inventory"
            value={1800}
          />
          <Snippet
            icon={TotalEmployeesIcon}
            title="Total Employees"
            value={415}
          />
        </div>
        <div class="flex gap-4 mb-4">
          <div class="w-1/2 bg-white p-4 rounded-md border">
            <div className="w-full flex justify-between items-center">
              <h2 className="text-lg font-semibold">Inventory Summary</h2>
              <Link to="/inventory" className=" text-green-800 text-sm">
                See All
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="flex flex-col items-center">
                <InventorySummaryItem name="Hammer" quantity="205" />
                <InventorySummaryItem name="Nails" quantity="500" />
                <InventorySummaryItem name="Saw" quantity="120" />
                <InventorySummaryItem name="Screwdriver" quantity="150" />
                <InventorySummaryItem name="Wrench" quantity="90" />
                <InventorySummaryItem name="Pliers" quantity="75" />
                <InventorySummaryItem name="Drill" quantity="60" />
              </div>
              <div className="p-4">
                <DonutChartUsageExampleWithClickEvent />
              </div>
            </div>
          </div>
          <div class="w-1/2 bg-white p-4 rounded-md border">
            <div className="w-full flex justify-between items-center">
              <h2 className="text-lg font-semibold">Emission Savings</h2>
              <p to="/inventory" className=" text-slate-600 text-sm">
                Total emission savings:{" "}
                <span className="text-lg text-green-800 font-semibold">
                  275 kg
                </span>
              </p>
            </div>
            <div>
              <AreaChartUsageExample />
            </div>
          </div>
        </div>

        <div class="flex gap-4 pb-8">
          <Alerts />
          <TopUsedItems />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
