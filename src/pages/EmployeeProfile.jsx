import React from 'react'
import { Link } from "react-router-dom";
import { ArrowLeft, Circle, Trash2, PencilLine } from "lucide-react";
import EmployeeProfileCard from '@/components/Employees/EmployeeProfileCard';
import InventoryItem from '@/components/Inventory/InventoryItem';
import ProjectItem from '@/components/Projects/ProjectItem';

const sampleProjects = [
    {
      id: 1,
      title: "Rejuvenation Solutions",
      location: "Valencia, 1972 otra calle, 1854",
      expectedEndDate: "25 Dec, 2023",
      manager: "Juan Jose",
    },
    {
      id: 2,
      title: "Urban Development Initiative",
      location: "Madrid, Plaza Mayor, 28012",
      expectedEndDate: "15 Jun, 2024",
      manager: "Maria Garcia",
    },
  ];

function EmployeeProfile({ id=1 }) {
  return (
    <div className='w-full h-full pb-4'>
        <div className="border-b border-gray-200 py-3 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center">
          <Link to="/projects" className="flex items-center">
            <ArrowLeft className="h-4 w-5 text-slate-600" />
            <p className="text-base text-slate-600">Back</p>
          </Link>
          <Circle fill="gray" strokeWidth={0} className="mx-2 h-1.5 w-1.5" />
          <h2>Employee Profile</h2>
        </div>
        <div className="mt-3 flex sm:ml-4 sm:mt-0">
          <button
            type="button"
            className="inline-flex items-center rounded bg-white px-3 py-1.5 text-sm text-red-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <Trash2 strokeWidth={2} className="mr-1.5 h-4 w-4" /> Delete
          </button>
          <Link to={`/employees/${id=1}/edit`}>
          <button
            type="button"
            className="ml-3 inline-flex items-center rounded bg-white px-3 py-1.5 text-sm  text-black ring-1 ring-inset ring-gray-300 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
          >
            <PencilLine strokeWidth={2} className="mr-1.5 h-5 w-5" /> Edit
          </button>
          </Link>
        </div>
      </div>
      <div className="mt-4">
        <EmployeeProfileCard />
      </div>
      <div className="w-full mt-4 border-b border-gray-200 pb-2">
        <div className="h-full flex justify-between items-center">
        <h2 className="text-xl font-semibold mt-2 mb-1">Items added by Olivia Rhye</h2>
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
          <h2 className="text-xl font-semibold mt-2 mb-1">Olivia Rhye's Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sampleProjects.map((project) => (
            <ProjectItem
              key={project.id}
              id={project.id}
              coverImage={project.coverImage}
              title={project.title}
              location={project.location}
              expectedEndDate={project.expectedEndDate}
              manager={project.manager}
            />
          ))}
        </div>
        </div>
        <div className="w-full border-b border-gray-200 pb-2">
        <div className="h-full flex justify-between items-center">
        <h2 className="text-xl font-semibold mt-2 mb-1">Items managed by Olivia Rhye</h2>
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
  )
}

export default EmployeeProfile