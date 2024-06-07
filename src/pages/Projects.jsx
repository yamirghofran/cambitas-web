import React, { useEffect, useState } from "react";
import { PlusCircle } from "lucide-react";
import ProjectItem from "../components/Projects/ProjectItem";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { getAllProjects } from "../util/functions/Projects";

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
  {
    id: 3,
    title: "Renewable Energy Project",
    location: "Seville, Av. de la Constitución, 41004",
    expectedEndDate: "30 Sep, 2023",
    manager: "Carlos Hernández",
  },
  {
    id: 4,
    title: "Smart City Connectivity",
    location: "Barcelona, Passeig de Gràcia, 08008",
    expectedEndDate: "10 Oct, 2024",
    manager: "Sofia Martinez",
  },
  {
    id: 5,
    title: "Water Conservation System",
    location: "Bilbao, Plaza Nueva, 48005",
    expectedEndDate: "05 Mar, 2024",
    manager: "Alejandro Fernandez",
  },
];





const tabs = [
  { name: "Active Projects", current: true },
  { name: "Planned Projects", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Projects() {
  const [projects, setProjects] = useState([]);

useEffect(() => {
  const fetchProjects = async (id) => {
    const fetchedProjects = await getAllProjects(id);
    setProjects(fetchedProjects);
    console.log(fetchedProjects)
  };

  fetchProjects('123456');
}, []);
  return (
    <>
      <Helmet><title>Projects</title></Helmet>
      <div className="h-full">
        <div className="relative border-b border-gray-200 pb-5 sm:pb-0">
          <div className="md:flex md:items-center md:justify-between">
            <div className="mt-3 flex md:absolute md:right-0 md:top-3 md:mt-0">
              <Link to="/projects/add">
              <button
                type="button"
                className="ml-3 inline-flex items-center rounded-md border bg-white px-3 py-1 text-sm text-black shadow-sm hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
              >
                <PlusCircle className="h-4 w-4 mr-1.5 text-gray-black" /> Add
                New Project
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
              </nav>
            </div>
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-2xl my-2">Active Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {projects.map((project) => (
            <ProjectItem
              key={project.id}
              id={project.id}
              coverImage={project.coverImage}
              name={project.name}
              address={project.address}
              endDate={project.endDate}
              managerName={project.managerName}
            />
          ))}
        </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
