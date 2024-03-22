import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { PlusCircle } from "lucide-react";
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon, Filter as FilterIcon } from "lucide-react";
import SummaryTable from '@/components/Reports/SummaryTable';
import ItemsRequestedFromYouTable from '@/components/Reports/ItemsRequestedFromYouTable';
import YourRequestedItemsTable from '@/components/Reports/YourRequestedItemsTable';
import YourAcceptedRequestsTable from '@/components/Reports/YourAcceptedRequestsTable';

const tabs = [
  { name: "Report Summary" },
  { name: "Items Requested From You" },
  { name: "Your Requested Items"},
  { name: "Your Accepted Requests"},
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


function Reports() {
  const [currentTab, setCurrentTab] = useState('Report Summary');

  return (
    <div className='h-full w-full'>
      <div className="relative border-b border-gray-200 pb-5 sm:pb-0">
        <div className="md:flex md:items-center md:justify-between">
          <div className="mt-3 flex gap-x-2 md:absolute md:right-0 md:top-3 md:mt-0">
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
              value={currentTab}
              onChange={(e) => setCurrentTab(e.target.value)}
            >
              {tabs.map((tab) => (
                <option key={tab.name} value={tab.name}>{tab.name}</option>
              ))}
            </select>
          </div>
          <div className="hidden sm:block">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <a
                  key={tab.name}
                  onClick={() => setCurrentTab(tab.name)}
                  className={classNames(
                    tab.name === currentTab
                      ? "border-green-600 text-green-700"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                    "whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium cursor-pointer"
                  )}
                  aria-current={tab.name === currentTab ? "page" : undefined}
                >
                  {tab.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className='my-4'>
      {(() => {
        switch (currentTab) {
          case 'Report Summary':
            return <SummaryTable />;
          case 'Items Requested From You':
            return <ItemsRequestedFromYouTable />;
          case 'Your Requested Items':
            return <YourRequestedItemsTable />;
          case 'Your Accepted Requests':
            return <YourAcceptedRequestsTable />;
          default:
            return <div>Please select a tab.</div>;
        }
      })()}
      </div>
      
      
    </div>
  )
}

export default Reports