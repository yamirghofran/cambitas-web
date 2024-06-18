import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { format } from "date-fns";

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
import { Filter as FilterIcon } from "lucide-react";
import {getAllUsers} from "@/util/functions/Users"
import {getAllCompanyInventoryItems, getAvailableInventoryItems} from "@/util/functions/InventoryItems"
import { createProject } from "@/util/functions/db";
import { toast } from "sonner";
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
              value={startDate ? format(startDate, "dd/MM/yyyy") : ''}
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
              value={endDate ? format(endDate, "dd/MM/yyyy") : ''}
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
  console.log(employees);
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

function SelectProjectInventoryItem({ inventory, setInventory, item}) {
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
    if (inventory.includes(id)) {
      setInventory(inventory.filter(item => item !== id));
    } else {
      setInventory([...inventory, id]);
    }
  }

  return (
    <div className={classNames(inventory.includes(item.id) ? "border-green-700 bg-slate-200" : "bg-white", "w-full rounded-lg border overflow-hidden")} onClick={() => handleSelect(item.id)}>
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

function AddProjectInventory({ inventory, setInventory, availableInventory }) {
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
        {availableInventory.map((item) => (
          <SelectProjectInventoryItem key={item.id} item={item} inventory={inventory} setInventory={setInventory} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Button variant="secondary">View More</Button>
      </div>
    </div>
  );
}

function ProjectInventoryForm({ inventory, setInventory, availableInventory }) {
  return (
    <div className="w-full mx-auto p-6 bg-white rounded-md shadow-sm">
      <div className="w-full mb-4">
        <Dialog className="">
          <DialogTrigger className="w-full">
            <div className="w-full rounded-md border p-2 flex justify-start">
              <p className="text-sm text-black">
                {inventory.length > 0 ? `${inventory.map(id => availableInventory.find(item => item.id === id).name).join(', ')}` : 'Add Inventory'}
              </p>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-[800px]">
            <AddProjectInventory inventory={inventory} setInventory={setInventory} availableInventory={availableInventory} />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

function AddProject() {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectAddress, setProjectAddress] = useState("");
  const [projectManager, setProjectManager] = useState("");
  const [workers, setWorkers] = useState([]);
  const [availableInventory, setAvailableInventory] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();
  
  const fetchInventory = async (companyID) => {
    try {
      const inventoryItems = await getAvailableInventoryItems(companyID); // Replace 'companyID' and 'projectID' with actual IDs

      console.log("Inventory Items:", inventoryItems);
      setAvailableInventory(inventoryItems);
    } catch (error) {
      console.error("Failed to fetch inventory:", error);
    }
  };

  useEffect(() => {
    fetchInventory(companyID);
  }, []);

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

  return (
    <div>
      <div className="border-b border-gray-200 py-3 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center">
          <Link to="/projects" className="flex items-center">
            <ArrowLeft className="h-4 w-5 text-slate-600" />
            <p className="text-base text-slate-600">Back</p>
          </Link>
          <Circle fill="gray" strokeWidth={0} className="mx-2 h-1.5 w-1.5" />
          <h2>Add New Project</h2>
        </div>
        <div className="mt-3 flex sm:ml-4 sm:mt-0">
          <Link to="/projects">
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
                const projectID = await createProject(companyID, projectData, inventory, workers); // Replace 'COMP123' with actual company ID
                toast.success('Project added successfully!');
                navigate('/projects');
              } catch (error) {
                console.error('Failed to add project:', error);
                toast.error('Failed to add project.');
              }
            }}
            className="ml-3 inline-flex items-center rounded bg-green-800 text-white px-3 py-1.5 text-sm ring-1 ring-inset ring-gray-300 hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
          >
            Add Project
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
            availableInventory={availableInventory}
            inventory={inventory}
            setInventory={setInventory}
          />
        </div>
      </div>
    </div>
  );
}

export default AddProject;
