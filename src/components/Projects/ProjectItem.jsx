import React from "react";
import Project1CoverImage from "../../assets/images/projects/cambitas-project-1.png";
import { Link } from "react-router-dom";
import { formatDate } from "@/util/functions/util";

function ProjectItem({
  id = 1,
  timeCreated,
  companyCode = "123456",
  createdBy = "Juan Jose",
  description = "Rejuvenation Solutions",
  endDate = "25 Dec, 2023",
  startDate = "25 Dec, 2023",
  status = "In Progress",
  coverImage = Project1CoverImage,
  name = "Rejuvenation Solutions",
  address = "Valencia, 1972 otra calle, 1854",
  location,
  managerName = "Juan Jose",
  managerId,
  materialInventoryIDs = [],
  imageUrls = [],
  toolInventoryIDs = [],
  workersUserIDs = [],
}) {
  return (
    <Link to={`/projects/${id}`}>
      <div className="w-full flex flex-col min-h-full overflow-hidden rounded-lg border bg-white">
        <img
          className="h-36 w-full object-cover object-center"
          src={coverImage}
          alt="Project 1"
        />
        <div className="w-full min-h-full px-3 py-2 flex flex-col items-start justify-between">
          <div className="h-full">
          <h4 className="text-lg font-semibold">{name}</h4>
          <p className="text-sm">{address}</p>
          </div>
          <div className="mt-2 flex w-full h-full justify-between">
            <div className="flex flex-col text-sm">
              <p className="text-slate-700">Expected End Date</p>
              <p className="font-semibold text-slate-700">{formatDate(endDate)}</p>
            </div>
            <div className="flex flex-col text-sm">
              <p className="text-slate-700">Manager</p>
              <p className="font-semibold text-slate-700">{managerName}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectItem;
