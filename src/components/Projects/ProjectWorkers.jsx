import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";

import ProfilePicture from "@/assets/images/profiles/cambitas-profile-1.png";

function WorkerRow({ name, role, phoneNumber, email }) {
  return (
    <TableRow>
      <TableCell className="flex items-center">
        <div className="flex items-center gap-4">
          <Avatar className="h-10 w-10">
            <AvatarImage alt={name} src={ProfilePicture} />
            <AvatarFallback>OR</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{name}</div>
            <div className="text-gray-500 dark:text-gray-400">
              {email}
            </div>
          </div>
        </div>
      </TableCell>
      <TableCell>{role}</TableCell>
      <TableCell>{phoneNumber}</TableCell>
      <TableCell>
        <Button variant="ghost">View</Button>
      </TableCell>
    </TableRow>
  );
}

const workers = [
  { name: "Olivia Rye", role: "Project Manager", phoneNumber: "+1-212-456-7890", email: "olivia.rye@example.com" },
  { name: "Phoenix Baker", role: "Software Engineer", phoneNumber: "+1-212-456-7891", email: "phoenix.baker@example.com" },
  { name: "Eliot Payne", role: "Product Designer", phoneNumber: "+1-212-456-7892", email: "eliot.payne@example.com" },
  { name: "Avery Stewart", role: "Quality Assurance", phoneNumber: "+1-212-456-7893", email: "avery.stewart@example.com" },
  { name: "Jamie Lane", role: "DevOps Engineer", phoneNumber: "+1-212-456-7894", email: "jamie.lane@example.com" },
  { name: "Taylor Reed", role: "UI/UX Designer", phoneNumber: "+1-212-456-7895", email: "taylor.reed@example.com" },
];



function ProjectWorkers() {
  return (
    <div className="bg-white p-8 rounded-md">
      <h1 className="text-2xl font-semibold mb-4">Workers</h1>
      <div className="flex flex-col gap-6">
        <div className="flex gap-4">
          <Input placeholder="Search workers" />
          <Button variant="outline">Filters</Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Phone Number</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            {workers.map((worker) => (
              <WorkerRow {...worker} />
            ))}
          </TableBody>
        </Table>
        <div className="flex justify-between items-center">
          <Button variant="ghost">Previous</Button>
          <div className="flex gap-1">
            <Button variant="ghost">1</Button>
            <Button variant="ghost">2</Button>
            <span>...</span>
            <Button variant="ghost">8</Button>
            <Button variant="ghost">9</Button>
            <Button variant="ghost">10</Button>
          </div>
          <Button variant="ghost">Next</Button>
        </div>
      </div>
    </div>
  );
}

export default ProjectWorkers;
