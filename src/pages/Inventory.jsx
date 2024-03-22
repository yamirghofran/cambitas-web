import React from "react";
import { Link } from "react-router-dom";
import { PlusCircle, MapPin as MapIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon, Filter as FilterIcon } from "lucide-react";
import ProjectInventoryItem from "@/components/Projects/ProjectInventoryItem";
import ExampleInventoryImage from "@/assets/images/inventory/drill.png";
import InventoryItem from "@/components/Inventory/InventoryItem";

const tabs = [
  { name: "Tools", current: true },
  { name: "Hardware", current: false },
  { name: "Materials", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Inventory() {
  return (
    <div className="h-full w-full">
      <div className="relative border-b border-gray-200 pb-5 sm:pb-0">
        <div className="md:flex md:items-center md:justify-between">
          <div className="mt-3 flex md:absolute md:right-0 md:top-3 md:mt-0">
            <Link to="/inventory/add">
              <button
                type="button"
                className="ml-3 inline-flex items-center rounded-md border bg-white px-3 py-1 text-sm text-black shadow-sm hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
              >
                <PlusCircle className="h-4 w-4 mr-1.5 text-gray-black" /> Add Item
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-4">
          <div className="sm:hidden">
            <label htmlFor="current-tab" className="sr-only">
              Select a tab
            </label>
            <select
              id="current-tab"
              name="current-tab"
              className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              defaultValue={tabs.find((tab) => tab.current).name}
            >
              {tabs.map((tab) => (
                <option key={tab.name}>{tab.name}</option>
              ))}
            </select>
          </div>
          <div className="hidden sm:block">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <div
                  key={tab.name}
                  className={classNames(
                    tab.current
                      ? "border-green-600 text-green-700"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                    "whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium"
                  )}
                  aria-current={tab.current ? "page" : undefined}
                >
                  {tab.name}
                </div>
              ))}
              <div className="relative bottom-3 w-64 mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <SearchIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="search"
                  name="search"
                  id="search"
                  className="block w-full rounded-md border-0 py-1 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Search"
                />
              </div>
              <div>
              <button
                type="button"
                className="relative bottom-1 inline-flex items-center rounded-md border bg-white px-3 py-1.5 text-sm text-black shadow-sm hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
              >
                <FilterIcon className="h-4 w-4 mr-1.5 text-gray-black" />
                Filter
              </button>
              </div>
              
            </nav>
          </div>
        </div>
      </div>
      <div className="w-full border-b border-gray-200 pb-2">
        <div className="h-full flex justify-between items-center">
        <h2 className="text-xl font-semibold mt-2 mb-1">Power tools</h2>
        <p className="text-sm text-green-800 underline">See all</p>
        </div>
          <div className="grid grid-cols-7 gap-2">
            <InventoryItem />
            <InventoryItem />
            <InventoryItem />
            <InventoryItem />
            <InventoryItem />
            <InventoryItem />
            <InventoryItem />
          </div>
      </div>
      <div className="w-full border-b border-gray-200 pb-2">
        <div className="h-full flex justify-between items-center">
        <h2 className="text-xl font-semibold mt-2 mb-1">Other tools</h2>
        <p className="text-sm text-green-800 underline">See all</p>
        </div>
          <div className="grid grid-cols-7 gap-2">
            <InventoryItem />
            <InventoryItem />
            <InventoryItem />
            <InventoryItem />
            <InventoryItem />
            <InventoryItem />
            <InventoryItem />
          </div>
      </div>
      <div className="w-full border-b border-gray-200 pb-2">
        <div className="h-full flex justify-between items-center">
        <h2 className="text-xl font-semibold mt-2 mb-1">Recently Viewed</h2>
        <p className="text-sm text-green-800 underline">See all</p>
        </div>
          <div className="grid grid-cols-7 gap-2">
            <InventoryItem />
            <InventoryItem />
            <InventoryItem />
            <InventoryItem />
            <InventoryItem />
            <InventoryItem />
            <InventoryItem />
          </div>
      </div>
    </div>
  );
}

export default Inventory;
