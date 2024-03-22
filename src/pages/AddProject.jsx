import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import ProjectInventory from "@/components/Projects/ProjectInventory";
import ProjectInventoryItem from "@/components/Projects/ProjectInventoryItem";
import { Filter as FilterIcon } from "lucide-react";

const exampleDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

function AddProject() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  function ProjectInformationForm() {
    return (
      <div className="w-full mx-auto p-6 bg-white rounded-md shadow-sm">
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="project-title"
          >
            Project Title
          </label>
          <Input id="project-title" placeholder="Enter project title" />
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
                value={format(startDate, "dd/MM/yyyy")}
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
                value={format(endDate, "dd/MM/yyyy")}
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

  function ProjectLocationForm() {
    return (
      <div className="w-full mx-auto p-6 bg-white rounded-md shadow-sm">
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="project-title"
          >
            Address
          </label>
          <Input id="project-title" placeholder="Enter project address" />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="start-date"
            >
              City
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <Input id="start-date" placeholder="Enter city" />
            </div>
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="end-date"
            >
              State
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <Input id="end-date" placeholder="Enter state" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="start-date"
            >
              Country
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <Input id="start-date" placeholder="Enter country" />
            </div>
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="end-date"
            >
              Zip Code
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <Input id="end-date" placeholder="Enter zip code" />
            </div>
          </div>
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

  function ProjectEmployeesForm() {
    return (
      <div className="w-full mx-auto p-6 bg-white rounded-md shadow-sm">
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="project-title"
          >
            Manager
          </label>
          <SelectManager className="w-full" />
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
                <p className="text-sm text-black">Select workers</p>
              </div>
            </DialogTrigger>
            <DialogContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[32px]" />
                    <TableHead>Name</TableHead>
                    <TableHead>Job Title</TableHead>
                    <TableHead>Department</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Checkbox id="select-1" />
                    </TableCell>
                    <TableCell className="font-medium">John Doe</TableCell>
                    <TableCell>Software Engineer</TableCell>
                    <TableCell>Engineering</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Checkbox id="select-2" />
                    </TableCell>
                    <TableCell className="font-medium">Alice Johnson</TableCell>
                    <TableCell>Product Manager</TableCell>
                    <TableCell>Product</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Checkbox id="select-3" />
                    </TableCell>
                    <TableCell className="font-medium">Bob Smith</TableCell>
                    <TableCell>Designer</TableCell>
                    <TableCell>Design</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Checkbox id="select-4" />
                    </TableCell>
                    <TableCell className="font-medium">Eve Williams</TableCell>
                    <TableCell>HR Manager</TableCell>
                    <TableCell>HR</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    );
  }

  function SelectManager() {
    return (
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select manager" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Project Managers</SelectLabel>
            <SelectItem value="john_doe">John Doe</SelectItem>
            <SelectItem value="jane_smith">Jane Smith</SelectItem>
            <SelectItem value="michael_brown">Michael Brown</SelectItem>
            <SelectItem value="linda_green">Linda Green</SelectItem>
            <SelectItem value="david_clark">David Clark</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Team Leads</SelectLabel>
            <SelectItem value="sarah_miller">Sarah Miller</SelectItem>
            <SelectItem value="james_wilson">James Wilson</SelectItem>
            <SelectItem value="patricia_taylor">Patricia Taylor</SelectItem>
            <SelectItem value="charles_white">Charles White</SelectItem>
            <SelectItem value="barbara_harris">Barbara Harris</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Senior Developers</SelectLabel>
            <SelectItem value="joseph_martin">Joseph Martin</SelectItem>
            <SelectItem value="thomas_anderson">Thomas Anderson</SelectItem>
            <SelectItem value="christopher_moore">Christopher Moore</SelectItem>
            <SelectItem value="susan_jackson">Susan Jackson</SelectItem>
            <SelectItem value="margaret_thompson">Margaret Thompson</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Junior Developers</SelectLabel>
            <SelectItem value="dorothy_garcia">Dorothy Garcia</SelectItem>
            <SelectItem value="lisa_martinez">Lisa Martinez</SelectItem>
            <SelectItem value="nancy_robinson">Nancy Robinson</SelectItem>
            <SelectItem value="karen_clark">Karen Clark</SelectItem>
            <SelectItem value="betty_rodriguez">Betty Rodriguez</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Interns</SelectLabel>
            <SelectItem value="paul_walker">Paul Walker</SelectItem>
            <SelectItem value="donna_hall">Donna Hall</SelectItem>
            <SelectItem value="steven_allen">Steven Allen</SelectItem>
            <SelectItem value="carol_young">Carol Young</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  }

  function AddProjectInventory() {
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
          <ProjectInventoryItem />
          <ProjectInventoryItem />
          <ProjectInventoryItem />
          <ProjectInventoryItem />
          <ProjectInventoryItem />
          <ProjectInventoryItem />
        </div>
        <div className="flex justify-center mt-4">
          <Button variant="secondary">View More</Button>
        </div>
      </div>
    )
  }

  function ProjectInventoryForm() {
    return (
      <div className="w-full mx-auto p-6 bg-white rounded-md shadow-sm">
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="project-title"
          >
            Manager
          </label>
          <SelectManager className="w-full" />
        </div>
        <div className="w-full mb-4">
          <Dialog className=''>
            <DialogTrigger className="w-full">
              <div className="w-full rounded-md border p-2 flex justify-start">
                <p className="text-sm text-black">Add Inventory</p>
              </div>
            </DialogTrigger>
            <DialogContent className='max-w-[800px]'>
              <AddProjectInventory />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    )
  }
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
          <button
            type="button"
            className="inline-flex items-center rounded bg-white px-3 py-1.5 text-sm text-black ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="button"
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
          <ProjectInformationForm />
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
          <ProjectLocationForm />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-[3fr_4fr_1fr] mx-auto p-6 border-b">
          <div>
            <h2 className="text-xl font-semibold mb-4">Employees</h2>
            <p className="text-sm text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <ProjectEmployeesForm />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-[3fr_4fr_1fr] mx-auto p-6 border-b">
          <div>
            <h2 className="text-xl font-semibold mb-4">Add Inventory</h2>
            <p className="text-sm text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <ProjectInventoryForm />
        </div>
      </div>
    </div>
  );
}

export default AddProject;
