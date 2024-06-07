import React, {useEffect, useState} from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Circle, Trash2, PencilLine, MapPin, ExternalLink } from "lucide-react";
import Project1CoverImage from "../assets/images/projects/cambitas-project-1.png";
import ProfilePicture from "../assets/images/profiles/cambitas-profile-1.png";
import ProjectSnippet from "@/components/Projects/ProjectSnippet";
import ProjectStartEnd from "@/components/Projects/ProjectStartEnd";
import ProjectInventory from "@/components/Projects/ProjectInventory";
import ProjectWorkers from "@/components/Projects/ProjectWorkers";
import AlertDialogComponent from "@/components/layout/AlertDialogComponent";
import { getProject, deleteProject } from "@/util/functions/Projects";
import { removeProjectFromAllUsers } from "@/util/functions/Users";
import { removeProjectFromAllInventoryItems } from "@/util/functions/InventoryItems";
import {formatDate} from "@/util/functions/util";
import { Helmet } from "react-helmet";
import { toast } from "sonner";

const exampleDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

function ProjectDetails({}) {
  const { project_id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const navigate = useNavigate();

  console.log(project_id);

  const fetchProject = async (companyID, projectID=project_id) => {
    try {
      const projectData = await getProject(companyID, projectID); // Assuming "companyID" is available or replace with actual company ID
      console.log("Project Data:", projectData);
      setProject(projectData);
    } catch (error) {
      console.error("Failed to fetch project:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProject('123456', project_id);
  }, [project_id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!project) {
    return <div>Project not found.</div>;
  }

  const { 
    name = '',
    description = '',
    createdBy = '', 
    startDate = '',
    endDate = '',
    location = '',
    address = '', 
    managerName = '', 
    managerID = '',
    workersUserIDs = [],
    inventoryItemIDs = [],
    imageUrls = []
   } = project || {};

  async function deleteProjectFunction() {
    try {
      await deleteProject('123456', project_id); // Assuming '123456' is the company ID
      await removeProjectFromAllUsers('123456', project_id);
      await removeProjectFromAllInventoryItems('123456', project_id);
      toast.success("Project deleted successfully");
      console.log("Project deleted successfully");
      navigate("/projects");
    } catch (error) {
      console.error("Error deleting project and its references:", error);
      toast.error("Error deleting project and its references");
    }
  }

  const deleteProjectAction = {
    id: project_id,
    text: "This action cannot be undone. This will permanently delete your project.",
    CTA: "Delete Project",
    actionFunction: deleteProjectFunction
  }
  return (
    <>
    <Helmet>
      <title>{name ? `${name} - Project Details` : 'Project Not Found'}</title>
    </Helmet>
        <div>
      <div className="border-b border-gray-200 py-3 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center">
          <Link to="/projects" className="flex items-center">
            <ArrowLeft className="h-4 w-5 text-slate-600" />
            <p className="text-base text-slate-600">Back</p>
          </Link>
          <Circle fill="gray" strokeWidth={0} className="mx-2 h-1.5 w-1.5" />
          <h2>{name}</h2>
        </div>
        <div className="mt-3 flex sm:ml-4 sm:mt-0">
          <AlertDialogComponent action={deleteProjectAction}>
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
            src={imageUrls && imageUrls.length > 0 ? imageUrls[0] : 'https://via.placeholder.com/520x300'}
            alt="Project Cover Image"
            className="h-[520px] rounded-lg object-cover object-center"
          />
        </div>
        <div className="mt-4 w-8/12">
          <div className="flex h-[300px] w-full">
            <div className="w-full flex flex-col justify-between">
              <div className="flex flex-col w-full">
                <h2 className="my-2 text-2xl font-semibold">{name}</h2>
                <div>
                  {description.length > 100 && !showFullDescription ? (
                    <>
                      <p className="text-base text-slate-600">{description.substring(0, 100)}...</p>
                      <button
                        type="button"
                        className="text-sm text-blue-500 hover:underline"
                        onClick={() => setShowFullDescription(true)}
                      >
                        Show more
                      </button>
                    </>
                  ) : (
                    <p className="text-base text-slate-600">{description}</p>
                  )}
                </div>
              </div>
              <ProjectStartEnd startDate={formatDate(startDate)} expectedEndDate={formatDate(endDate)} />
            </div>
            <div className="ml-4">
            <ProjectSnippet 
              profilePicture={ProfilePicture}
              managerName={managerName}
              title={name} 
              location={location}
              address={address}
            />
            </div>
          </div>
          <div className="mt-4 gap-y-6 flex flex-col">
            <ProjectInventory inventoryItemIDs={inventoryItemIDs} projectId={project_id} />
            <ProjectWorkers workersUserIDs={workersUserIDs} projectId={project_id} />
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default ProjectDetails;
