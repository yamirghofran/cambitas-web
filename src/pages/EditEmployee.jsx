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
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
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
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import ProjectInventoryItem from "@/components/Projects/ProjectInventoryItem";
import ProfilePicture from "@/assets/images/profiles/cambitas-profile-1.png";
import { Filter as FilterIcon } from "lucide-react";
import AlertDialogComponent from "@/components/layout/AlertDialogComponent";
const exampleDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

function EditEmployee() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  function EmployeeInformationForm() {
    return (
      <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="mb-6">
          <h2 className="text-base font-semibold">Update Profile Photo</h2>
          <div className="mt-4 flex items-center">
            <Avatar className="w-12 h-12">
              <AvatarImage alt="Profile picture" src={ProfilePicture} />
            </Avatar>
            <div className="w-full ml-4 flex flex-col items-center px-4 py-2 border-2 border-dashed rounded-md cursor-pointer">
              <UploadIcon className="text-green-500 h-6 w-6" />
              <span className="mt-1 text-sm text-gray-600">
                Click to upload or drag and drop
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          <div className="sm:col-span-2">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="employee-name"
            >
              Employee Name
            </label>
            <Input id="employee-name" placeholder="Olivia Rhye" type="text" />
          </div>
          <div className="sm:col-span-1">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <Input id="email" placeholder="olivia@gmail.com" type="email" />
          </div>
          <div className="sm:col-span-1">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="mobile-number"
            >
              Mobile Number
            </label>
            <Input
              id="mobile-number"
              placeholder="+1 302 426 5043"
              type="tel"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="about"
            >
              About
            </label>
            <Textarea
              rows={5}
              id="about"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at dictum arcu. Fusce venenatis et urna sed elementum. Vivamus quis orci viverra, semper dolor nec, congue lorem. Phasellus tristique lobortis auctor. Vestibulum dictum et nunc a accumsan. Donec odio dolor, convallis et pretium faucibus, vulputate aliquet erat."
            />
          </div>
        </div>
      </div>
    );
  }

  function UploadIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" x2="12" y1="3" y2="15" />
      </svg>
    );
  }

  function AccountActivationForm() {
    return (
      <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">Account Activation</h2>
          <div className="flex items-center">
            <Switch id="account-activation" />
            <Label className="ml-2" htmlFor="account-activation">
              Active
            </Label>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-4">Edit Permissions</h3>
        <div className="w-full grid grid-cols-2 gap-2 p-0">
          <div className="w-full flex flex-col justify-start items-start gap-y-1 p-0">
            <div className="w-full flex justify-start gap-x-2">
              <Checkbox defaultChecked id="admin" />
              <label
                className="text-sm font-medium leading-none"
                htmlFor="admin"
              >
                Admin
              </label>
            </div>
            <p className="w-full text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
            
          </div>
          <div className="flex flex-col justify-start items-start gap-y-1">
            <div className="flex justify-start gap-x-2">
              <Checkbox defaultChecked id="admin" />
              <label
                className="text-sm font-medium leading-none"
                htmlFor="admin"
              >
                Manager
              </label>
            </div>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-y-1">
            <div className="flex justify-start gap-x-2">
              <Checkbox defaultChecked id="admin" />
              <label
                className="text-sm font-medium leading-none"
                htmlFor="admin"
              >
                Member
              </label>
            </div>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-y-1">
            <div className="flex justify-start gap-x-2">
              <Checkbox defaultChecked id="admin" />
              <label
                className="text-sm font-medium leading-none"
                htmlFor="admin"
              >
                Admin
              </label>
            </div>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="border-b border-gray-200 py-3 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center">
          <Link to="/employees" className="flex items-center">
            <ArrowLeft className="h-4 w-5 text-slate-600" />
            <p className="text-base text-slate-600">Back</p>
          </Link>
          <Circle fill="gray" strokeWidth={0} className="mx-2 h-1.5 w-1.5" />
          <h2>Edit Employee</h2>
        </div>
        <div className="mt-3 flex sm:ml-4 sm:mt-0">
          <button
            type="button"
            className="inline-flex items-center rounded bg-white px-3 py-1.5 text-sm text-black ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Cancel
          </button>
          <AlertDialogComponent>
          <button
            type="button"
            className="ml-3 inline-flex items-center rounded bg-green-800 text-white px-3 py-1.5 text-sm ring-1 ring-inset ring-gray-300 hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
          >
            Save
          </button>
          </AlertDialogComponent>
          
        </div>
      </div>
      <div className="w-full">
        <div className="w-full grid grid-cols-1 md:grid-cols-[3fr_4fr_1fr] mx-auto p-6 border-b">
          <div>
            <h2 className="text-xl font-semibold mb-4">Employee Information</h2>
            <p className="text-sm text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <EmployeeInformationForm />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-[3fr_4fr_1fr] mx-auto p-6 border-b">
          <div>
            <h2 className="text-xl font-semibold mb-4">Add Project Images</h2>
            <p className="text-sm text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <AccountActivationForm />
        </div>
      </div>
    </div>
  );
}

export default EditEmployee;
