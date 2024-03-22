import {
    TableHead,
    TableRow,
    TableHeader,
    TableCell,
    TableBody,
    Table,
  } from "@/components/ui/table";
  import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
  import { Badge } from "@/components/ui/badge";
  import { Button } from "@/components/ui/button";
  import ProfilePicture from "@/assets/images/profiles/cambitas-profile-1.png";
  import { Trash2 as TrashIcon, Pencil as PencilIcon } from "lucide-react";
import { Link } from "react-router-dom";


  
  const employees = [
    {
      id: 1,
      name: "Olivia Rhye",
      email: "olivia@untitledui.com",
      role: "Project Manager",
      phoneNumber: "+1-212-456-7890",
      avatarSrc: ProfilePicture,
      avatarFallback: "OR",
    },
    {
      id: 2,
      name: "Phoenix Baker",
      email: "phoenix@untitledui.com",
      role: "Employee",
      phoneNumber: "+1-212-456-7890",
      avatarSrc: ProfilePicture,
      avatarFallback: "PB",
    },
    {
      id: 3,
      name: "Lana Steiner",
      email: "lana@untitledui.com",
      role: "Employee",
      phoneNumber: "+1-212-456-7890",
      avatarSrc: ProfilePicture,
      avatarFallback: "LS",
    },
    {
      id: 4,
      name: "Phoenix Baker",
      email: "phoenix@untitledui.com",
      role: "Project Manager",
      phoneNumber: "+1-212-456-7890",
      avatarSrc: ProfilePicture,
      avatarFallback: "PB",
    },
    {
      id: 5,
      name: "Eliot Alderson",
      email: "eliot@untitledui.com",
      role: "Cybersecurity",
      phoneNumber: "+1-212-456-7891",
      avatarSrc: ProfilePicture,
      avatarFallback: "EA",
    },
    {
      id: 6,
      name: "Darlene Alderson",
      email: "darlene@untitledui.com",
      role: "Software Engineer",
      phoneNumber: "+1-212-456-7892",
      avatarSrc: ProfilePicture,
      avatarFallback: "DA",
    },
    {
      id: 7,
      name: "Angela Moss",
      email: "angela@untitledui.com",
      role: "HR Manager",
      phoneNumber: "+1-212-456-7893",
      avatarSrc: ProfilePicture,
      avatarFallback: "AM",
    },
    {
      id: 8,
      name: "Tyrell Wellick",
      email: "tyrell@untitledui.com",
      role: "CTO",
      phoneNumber: "+1-212-456-7894",
      avatarSrc: ProfilePicture,
      avatarFallback: "TW",
    },
    {
      id: 9,
      name: "Dominique DiPierro",
      email: "dominique@untitledui.com",
      role: "FBI Agent",
      phoneNumber: "+1-212-456-7895",
      avatarSrc: ProfilePicture,
      avatarFallback: "DD",
    },
    {
      id: 10,
      name: "Krista Gordon",
      email: "krista@untitledui.com",
      role: "Therapist",
      phoneNumber: "+1-212-456-7896",
      avatarSrc: ProfilePicture,
      avatarFallback: "KG",
    },
  ];
  
  function EmployeesTableComponent() {

    return (
      <div className="bg-white p-6 shadow rounded-lg">
        <div className="overflow-x-auto">
        <Table>
      <TableHeader>
        <TableRow>
          <TableHead>S.No</TableHead>
          <TableHead>Employees</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Phone Number</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {employees.map(employee => EmployeesTableRow(employee))}
      </TableBody>
    </Table>
        </div>
      </div>
    );
  }

  function EmployeesTableRow({ id=1, name, email, role, phoneNumber, avatarSrc, avatarFallback }) {
    return (
      <TableRow key={id}>
        <TableCell>{id}</TableCell>
        <TableCell>
          <div className="flex items-center space-x-3">
            <Avatar>
              {avatarSrc ? <AvatarImage alt={name} src={avatarSrc} /> : <AvatarFallback>{avatarFallback}</AvatarFallback>}
            </Avatar>
            <div>
              <div className="font-medium">{name}</div>
              <div className="text-sm text-gray-500">{email}</div>
            </div>
          </div>
        </TableCell>
        <TableCell>{role}</TableCell>
        <TableCell>{phoneNumber}</TableCell>
        <TableCell>
          <div className="flex items-center gap-x-4 space-x-2">
            <Link to={`/employees/${id}/edit`}><PencilIcon className="h-5 w-5 text-gray-500 hover:cursor-pointer hover:text-black" /></Link>
            <TrashIcon className="h-5 w-5 text-gray-500 hover:cursor-pointer hover:text-black" />
            <Link to={`/employees/${id}`}><Button variant="ghost">View Details</Button></Link>
          </div>
        </TableCell>
      </TableRow>
    );
  }
  
  export default function EmployeesTable() {
    return (
      <div className="bg-white p-6 shadow rounded-lg">
        <div className="overflow-x-auto">
          <EmployeesTableComponent />
        </div>
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
    );
  }
