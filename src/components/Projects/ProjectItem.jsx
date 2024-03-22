import React from "react";
import Project1CoverImage from "../../assets/images/projects/cambitas-project-1.png";
import { Link } from "react-router-dom";

function ProjectItem({
  id = 1,
  coverImage = Project1CoverImage,
  title = "Rejuvenation Solutions",
  location = "Valencia, 1972 otra calle, 1854",
  expectedEndDate = "25 Dec, 2023",
  manager = "Juan Jose",
}) {
  return (
    <Link to={`/projects/${id}`}>
      <div className="flex w-72 flex-col overflow-hidden rounded-lg border bg-white">
        <img
          className="h-36 w-full object-cover object-center"
          src={coverImage}
          alt="Project 1"
        />
        <div className="w-full px-3 py-2">
          <h4 className="text-lg font-semibold">{title}</h4>
          <p className="text-sm">{location}</p>
          <div className="mt-2 flex w-full justify-between">
            <div className="flex flex-col text-sm">
              <p className="text-slate-700">Expected End Date</p>
              <p className="font-semibold text-slate-700">{expectedEndDate}</p>
            </div>
            <div className="flex flex-col text-sm">
              <p className="text-slate-700">Manager</p>
              <p className="font-semibold text-slate-700">{manager}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectItem;
