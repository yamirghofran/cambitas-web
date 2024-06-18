import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Circle,
  Trash2,
  PencilLine,
  MapPin,
  ExternalLink,
  Calendar as CalendarIcon,
  CloudUpload as UploadCloudIcon,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { format, isValid } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ProjectInventory from "@/components/Projects/ProjectInventory";
import ProjectInventoryItem from "@/components/Projects/ProjectInventoryItem";
import { Filter as FilterIcon } from "lucide-react";
import {getAllUsers, } from "@/util/functions/Users"
import {getAllCompanyInventoryItems, getProjectInventoryItems} from "@/util/functions/InventoryItems"
import { updateProject } from "@/util/functions/db";
import { toast } from "sonner";
import { getProject } from "@/util/functions/Projects";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const exampleDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const companyID = '123456';

function ProjectInformationForm({
  name,
  setName,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  projectDescription,
  setProjectDescription,
}) {
  console.log("Start date", startDate)
  return (
    <div className="w-full mx-auto p-6 bg-white rounded-md shadow-sm">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Project Title
        </label>
        <Input
          placeholder="Enter project title"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="start-date"
          >
            Start Date
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <Input
              id="start-date"
              placeholder="Select Date"
              value={startDate && isValid(startDate) ? format(startDate, "dd/MM/yyyy") : ''}
              onChange={(e) => setStartDate(new Date(e.target.value))}
            />
            <Popover>
              <div className="hover:cursor-pointer absolute inset-y-0 right-0 flex items-center pr-3">
                <PopoverTrigger asChild>
                  <CalendarIcon
                    className="h-5 w-5"
                    aria-hidden="true"
                    strokeWidth={2}
                  />
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={setStartDate}
                    initialFocus
                  />
                </PopoverContent>
              </div>
            </Popover>
          </div>
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="end-date"
          >
            Expected End Date
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <Input
              id="end-date"
              placeholder="Select Date"
              value={endDate && isValid(endDate) ? format(endDate, "dd/MM/yyyy") : ''}
              onChange={(e) => setEndDate(new Date(e.target.value))}
            />
            <Popover>
              <div className="hover:cursor-pointer absolute inset-y-0 right-0 flex items-center pr-3">
                <PopoverTrigger asChild>
                  <CalendarIcon
                    className="h-5 w-5"
                    aria-hidden="true"
                    strokeWidth={2}
                  />
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={setEndDate}
                    initialFocus
                  />
                </PopoverContent>
              </div>
            </Popover>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="project-description"
        >
          Project Description
        </label>
        <Textarea
          className="mt-1"
          id="project-description"
          placeholder="Enter description"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
        />
      </div>
    </div>
  );
}

function ProjectImagesForm() {
  return (
    <div className="w-full mx-auto p-6 bg-white rounded-md shadow-sm">
      <div className="flex justify-center py-2">
        <div className="flex flex-col items-center justify-center w-full max-w-lg p-8 border border-gray-300 rounded-lg">
          <UploadCloudIcon className="text-green-500 h-8 w-8" />
          <p className="mt-2 text-sm text-gray-700">
            <span className="font-semibold text-green-800">
              Click to upload
            </span>{" "}
            or drag and drop
          </p>
          <p className="mt-1 text-xs text-gray-500">
            JPG or PNG (max. 800x400px)
          </p>
        </div>
      </div>
    </div>
  );
}

function ProjectLocationForm({
  address,
  setAddress,
}) {
  return (
    <div className="w-full mx-auto p-6 bg-white rounded-md shadow-sm">
      <div className="mb-4">
        <label
          className="block text-sm font-medium text-gray-700 mb-1"
          htmlFor="project-address"
        >
          Address
        </label>
        <Input
          id="project-address"
          placeholder="Enter project address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <iframe
          className="rounded-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160657065!2d-74.24789616611806!3d4.648283716237536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3a0257c7e293b1%3A0x6f8a76e65c88d8d4!2sBogot%C3%A1!5e0!3m2!1sen!2sco!4v1597848247914!5m2!1sen!2sco"
          width="100%"
          height="100%"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  );
}

function EmployeesTableRow({ workers, setWorkers, uid, displayName, role}) {
  const handleCheckboxChange = (checked) => {
    if (checked) {
      setWorkers([...workers, uid]);
    } else {
      setWorkers(workers.filter(workerId => workerId !== uid));
    }
    console.log(workers);
  };

  return (
    <TableRow>
      <TableCell>
        <Checkbox onCheckedChange={handleCheckboxChange} checked={workers.includes(uid)} />
      </TableCell>
      <TableCell className="font-medium">{displayName}</TableCell>
      <TableCell>{role}</TableCell>
    </TableRow>
  );
}

function ProjectEmployeesForm({ employees, manager, setManager, workers, setWorkers }) {
  console.log("Employees", employees);
  console.log("Workers", workers);
  console.log("Manager", manager);
  return (
    <div className="w-full mx-auto p-6 bg-white rounded-md shadow-sm">
      <div className="mb-4">
        <label
          className="block text-sm font-medium text-gray-700 mb-1"
          htmlFor="project-manager"
        >
          Manager
        </label>
        <SelectManager manager={manager} setManager={setManager} employees={employees} />
      </div>
      <div className="mb-4">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="project-description"
        >
          Workers
        </label>
        <Dialog>
          <DialogTrigger className="w-full">
            <div className="w-full rounded-md border p-2 flex justify-start">
              <p className="text-sm text-black">
                {workers.length > 0 ? `${workers.map(uid => employees.find(employee => employee.uid === uid).displayName).join(', ')}` : 'Select workers'}
              </p>
            </div>
          </DialogTrigger>
          <DialogContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[32px]" />
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {employees.map((employee) => (
                  <EmployeesTableRow key={employee.uid} workers={workers} setWorkers={setWorkers} {...employee} />
                ))}
              </TableBody>
            </Table>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

function SelectManager({ manager, setManager, employees }) {
  
  const handleManagerChange = (newManager) => {
    setManager(newManager);
    console.log(newManager);
  };

  return (
    <Select value={manager} onValueChange={handleManagerChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select manager" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Managers</SelectLabel>
          {employees.map((employee) => (
            <SelectItem key={employee.uid} value={employee.uid}>{employee.displayName}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

function SelectProjectInventoryItem({ allInventory, projectInventory, setProjectInventory, item}) {
  const { 
    additionalInfo,
    categoryID,
    currentHolderID,
    currentHolderName,
    currentHolderProfileImageURL,
    currentLocation,
    dateAdded,
    imagesUrls,
    isAvailable,
    isExpired,
    itemType,
    materialSpecifics,
    name,
    nameTrimmed,
    projectID,
    projectName,
    toolSpecifics,
    uploadedBy,
   } = item;
  function handleSelect(id) {
    if (projectInventory.map(projectInventoryItem => projectInventoryItem.id).includes(id)) {
      setProjectInventory(projectInventory.filter(projectInventoryItem => projectInventoryItem.id !== id));
    } else {
      setProjectInventory([...projectInventory, item]);
    }
  }

  return (
    <div className={classNames(projectInventory.map(projectInventoryItem => projectInventoryItem.id).includes(item.id) ? "border-green-700 bg-slate-200" : "bg-white", "w-full rounded-lg border overflow-hidden")} onClick={() => handleSelect(item.id)}>
      <img
        alt={nameTrimmed}
        className="w-full h-24 object-cover"
        height="150"
        src={imagesUrls.length > 0 ? imagesUrls[0] : ExampleInventoryImage}
        style={{
          aspectRatio: "150/150",
          objectFit: "cover",
        }}
        width="150"
      />
      <div className="p-2">
        <h3 className="p-0 m-0 leading-tight">
          {name}
        </h3>
      </div>
    </div>
  )
}

function AddProjectInventory({ allInventory, projectInventory, setProjectInventory }) {
  return (
    <div className="bg-white p-6 rounded-md">
      <h1 className="text-2xl font-semibold mb-4">Add Inventory</h1>
      <div className="flex gap-4 mb-4">
        <div className="flex-1">
          <Input placeholder="Search inventory" />
        </div>
        <Button className="whitespace-nowrap" variant="outline">
          <FilterIcon className="w-4 h-4 mr-2" />
          Filters{"\n          "}
        </Button>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {allInventory.filter(item => (item.isAvailable || projectInventory.map(item => item.id).includes(item.id)) && !item.isExpired).map((item) => (
          <SelectProjectInventoryItem key={item.id} item={item} projectInventory={projectInventory} setProjectInventory={setProjectInventory} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Button variant="secondary">View More</Button>
      </div>
    </div>
  );
}

function ProjectInventoryForm({ allInventory, projectInventory, setProjectInventory }) {
  return (
    <div className="w-full mx-auto p-6 bg-white rounded-md shadow-sm">
      <div className="w-full mb-4">
        <Dialog className="">
          <DialogTrigger className="w-full">
            <div className="w-full rounded-md border p-2 flex justify-start">
              <p className="text-sm text-black">
                {projectInventory.length > 0 ? `${projectInventory.map(item => item.name).join(', ')}` : 'Add Inventory'}
              </p>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-[800px]">
            <AddProjectInventory allInventory={allInventory} projectInventory={projectInventory} setProjectInventory={setProjectInventory} />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

function detectWorkerChanges(currentWorkers, updatedWorkers) {
    // Convert both arrays to Sets for easier comparison
    const currentSet = new Set(currentWorkers);
    const updatedSet = new Set(updatedWorkers);

    // Find workers that are new by filtering the updated set
    // to find IDs not in the current set
    const newWorkers = Array.from(updatedSet).filter(id => !currentSet.has(id));

    // Find workers that were removed by filtering the current set
    // to find IDs not in the updated set
    const removedWorkers = Array.from(currentSet).filter(id => !updatedSet.has(id));

    return { newWorkers, removedWorkers };
}

// Usage example
const currentWorkers = ['id1', 'id2', 'id3']; // IDs from database
const updatedWorkers = ['id2', 'id3', 'id4']; // IDs from useState

const { newWorkers, removedWorkers } = detectWorkerChanges(currentWorkers, updatedWorkers);

function UpdateProject() {
  const { project_id } = useParams();
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectAddress, setProjectAddress] = useState("");
  const [projectManager, setProjectManager] = useState("");
  const [workers, setWorkers] = useState([]);
  const [allInventory, setAllInventory] = useState([]);
  const [projectInventory, setProjectInventory] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();
  
  const fetchInventory = async (companyID) => {
    try {
      const inventoryItems = await getAllCompanyInventoryItems(companyID); // Replace 'companyID' and 'projectID' with actual IDs
      console.log("Inventory Items:", inventoryItems);
      setAllInventory(inventoryItems);
    } catch (error) {
      console.error("Failed to fetch inventory:", error);
    }
  };

  const fetchProject = async (projectID) => {
    const projectData = await getProject(companyID, projectID);
    if (projectData) {
      setProjectName(projectData.name);
      setProjectDescription(projectData.description);
      setProjectAddress(projectData.address);
      setProjectManager(projectData.managerID);
      setStartDate(new Date(projectData.startDate.seconds * 1000));
      setEndDate(new Date(projectData.endDate.seconds * 1000));
      setWorkers(projectData.workersUserIDs);
      setProjectInventory(projectData.inventoryItemIDs);
    } else {
      console.log("No project data found");
    }
  };

  

  useEffect(() => {
    fetchInventory(companyID);
  }, []);

  /* const fetchWorkers = async (companyID, projectID) => {
    if (project_id) {
      const fetchedWorkers = await getUsersByProjectId(companyID, projectID); // Replace 'yourCompanyID' with actual company ID
      setWorkers(fetchedWorkers);
      console.log("Fetched workers", fetchedWorkers);
    }
  }; */

  const fetchProjectInventoryItems = async (companyID, projectID) => {
    const items = await getProjectInventoryItems(companyID, projectID);
    setProjectInventory(items);
  };

  useEffect(() => {
    fetchProject(project_id);
    //fetchWorkers(companyID, project_id);
    fetchProjectInventoryItems(companyID, project_id);
  }, [companyID, project_id]);

  const fetchEmployees = async (companyId) => {
    try {
      const fetchedEmployees = await getAllUsers(companyId); // Replace "companyID" with actual company ID if available
      console.log("Employees",fetchedEmployees);
      setEmployees(fetchedEmployees);
    } catch (error) {
      console.error("Failed to fetch employees:", error);
    }
  };

  useEffect(() => {
    fetchEmployees(companyID);
  }, []);

  console.log("Employees", employees);

  return (
    <div>
      <div className="border-b border-gray-200 py-3 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center">
          <Link to="/projects" className="flex items-center">
            <ArrowLeft className="h-4 w-5 text-slate-600" />
            <p className="text-base text-slate-600">Back</p>
          </Link>
          <Circle fill="gray" strokeWidth={0} className="mx-2 h-1.5 w-1.5" />
          <h2>Update Project</h2>
        </div>
        <div className="mt-3 flex sm:ml-4 sm:mt-0">
          <Link to={`/projects/${project_id}`}>
          <button
            type="button"
            className="inline-flex items-center rounded bg-white px-3 py-1.5 text-sm text-black ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Cancel
          </button>
          </Link>
          <button
            type="button"
            onClick={async () => {
              const projectData = {
                companyCode: "123456", // Example company code, replace with actual
                name: projectName,
                description: projectDescription,
                createdBy: "Kx6pgUZfftaMYg9HzEaSP9BGhdz1",
                startDate: startDate,
                endDate: endDate,
                location: { latitude: 40.416775, longitude: -3.703790 }, // Example location, replace with actual
                address: projectAddress,
                managerName: employees.find(emp => emp.id === projectManager).displayName,
                managerID: projectManager,
                imagesUrls: [], // Assuming you have a state or method to gather this
              };
              try {
                const updatedProject = await updateProject(companyID, project_id, projectData, projectInventory.map(item => item.id), workers); // Replace 'COMP123' with actual company ID
                toast.success('Project updated successfully!');
                navigate('/projects');
              } catch (error) {
                console.error('Failed to update project:', error);
                toast.error('Failed to update project.');
              }
            }}
            className="ml-3 inline-flex items-center rounded bg-green-800 text-white px-3 py-1.5 text-sm ring-1 ring-inset ring-gray-300 hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
          > 
          Save
          </button>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full grid grid-cols-1 md:grid-cols-[3fr_4fr_1fr] mx-auto p-6 border-b">
          <div>
            <h2 className="text-xl font-semibold mb-4">Project Information</h2>
            <p className="text-sm text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <ProjectInformationForm
            name={projectName}
            setName={setProjectName}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            projectDescription={projectDescription}
            setProjectDescription={setProjectDescription}
          />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-[3fr_4fr_1fr] mx-auto p-6 border-b">
          <div>
            <h2 className="text-xl font-semibold mb-4">Add Project Images</h2>
            <p className="text-sm text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <ProjectImagesForm />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-[3fr_4fr_1fr] mx-auto p-6 border-b">
          <div>
            <h2 className="text-xl font-semibold mb-4">Project Location</h2>
            <p className="text-sm text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <ProjectLocationForm
            address={projectAddress}
            setAddress={setProjectAddress}
          />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-[3fr_4fr_1fr] mx-auto p-6 border-b">
          <div>
            <h2 className="text-xl font-semibold mb-4">Employees</h2>
            <p className="text-sm text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <ProjectEmployeesForm
            manager={projectManager}
            setManager={setProjectManager}
            workers={workers}
            setWorkers={setWorkers}
            employees={employees}
          />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-[3fr_4fr_1fr] mx-auto p-6 border-b">
          <div>
            <h2 className="text-xl font-semibold mb-4">Add Inventory</h2>
            <p className="text-sm text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <ProjectInventoryForm
            allInventory={allInventory}
            projectInventory={projectInventory}
            setProjectInventory={setProjectInventory}
          />
        </div>
      </div>
    </div>
  );
}

export default UpdateProject;
