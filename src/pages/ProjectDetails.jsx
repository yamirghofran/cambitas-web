import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Circle, Trash2, PencilLine, MapPin, ExternalLink } from "lucide-react";
import Project1CoverImage from "../assets/images/projects/cambitas-project-1.png";
import ProfilePicture from "../assets/images/profiles/cambitas-profile-1.png";
import ProjectSnippet from "@/components/Projects/ProjectSnippet";
import ProjectStartEnd from "@/components/Projects/ProjectStartEnd";
import ProjectInventory from "@/components/Projects/ProjectInventory";
import ProjectWorkers from "@/components/Projects/ProjectWorkers";
import AlertDialogComponent from "@/components/layout/AlertDialogComponent";
const exampleDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

function ProjectDetails({
  coverImage = Project1CoverImage,
  title = "Rejuvenation Solutions",
  description = exampleDescription,
  location = "Valencia",
  startDate = "23rd December 2024",
  expectedEndDate = "25th February 2025",
  manager = "Juan Jose",
  mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160657065!2d-74.24789616611806!3d4.648283716237536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3a0257c7e293b1%3A0x6f8a76e65c88d8d4!2sBogot%C3%A1!5e0!3m2!1sen!2sco!4v1597848247914!5m2!1sen!2sco"
}) {
  return (
    <div>
      <div className="border-b border-gray-200 py-3 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center">
          <Link to="/projects" className="flex items-center">
            <ArrowLeft className="h-4 w-5 text-slate-600" />
            <p className="text-base text-slate-600">Back</p>
          </Link>
          <Circle fill="gray" strokeWidth={0} className="mx-2 h-1.5 w-1.5" />
          <h2>Rejuvenation Solutions</h2>
        </div>
        <div className="mt-3 flex sm:ml-4 sm:mt-0">
          <AlertDialogComponent>
          <button
            type="button"
            className="inline-flex items-center rounded bg-white px-3 py-1.5 text-sm text-red-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <Trash2 strokeWidth={2} className="mr-1.5 h-4 w-4" /> Delete
          </button>
          </AlertDialogComponent>
          <button
            type="button"
            className="ml-3 inline-flex items-center rounded bg-white px-3 py-1.5 text-sm  text-black ring-1 ring-inset ring-gray-300 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
          >
            <PencilLine strokeWidth={2} className="mr-1.5 h-5 w-5" /> Edit
          </button>
        </div>
      </div>
      <div className="flex w-full">
        <div className="mr-4 h-full w-4/12 max-w-[520px]">
          <img
            src={coverImage}
            alt="Project Cover Image"
            className="h-[520px] rounded-lg object-cover object-center"
          />
        </div>
        <div className="mt-4 w-8/12">
          <div className="flex h-[300px] w-full">
            <div className="flex flex-col justify-between">
              <div className="flex flex-col">
                <h2 className="my-2 text-2xl font-semibold">{title}</h2>
                <p className="text-base text-slate-600">{description}</p>
              </div>
              <ProjectStartEnd startDate={startDate} expectedEndDate={expectedEndDate} />
            </div>
            <div className="ml-4">
            <ProjectSnippet 
              profilePicture={ProfilePicture} 
              title={title} 
              location={location}
              mapUrl={mapUrl}
            />
            </div>
          </div>
          <div className="mt-4 gap-y-6 flex flex-col">
            <ProjectInventory />
            <ProjectWorkers />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
