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
  import ExampleInventoryImage from "@/assets/images/inventory/drill.png";
  
  
  
  const yourAcceptedRequestsTableRows = [
    {
      id: 1,
      item: "Oak wood logs, 50 cm long logs apr. 2 logs/Kg",
      itemDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo justo vitae eros ultrices.",
      date: "24 Jul 2023",
      user: {
        name: "Olivia Rhye",
        email: "olivia@untitledui.com",
        avatarSrc: ProfilePicture,
      },
      status: "Pending Request",
      reportType: "Missing",
      itemImage: ExampleInventoryImage,
    },
    {
      id: 2,
      item: "Pine wood planks, 100 cm long planks apr. 1 plank/Kg",
      itemDescription: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      date: "25 Jul 2023",
      user: {
        name: "Ethan Hunt",
        email: "ethan@untitledui.com",
        avatarSrc: ProfilePicture,
      },
      status: "Approved",
      reportType: "Damaged",
      itemImage: ExampleInventoryImage,
    },
    {
      id: 3,
      item: "Steel rods, 2 meters long rods apr. 5 rods/Kg",
      itemDescription: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "26 Jul 2023",
      user: {
        name: "Mia Wong",
        email: "mia@untitledui.com",
        avatarSrc: ProfilePicture,
      },
      status: "In Transit",
      reportType: "Missing",
      itemImage: ExampleInventoryImage,
    },
    {
      id: 4,
      item: "Copper wires, 0.5 cm thick wires apr. 10 wires/Kg",
      itemDescription: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      date: "27 Jul 2023",
      user: {
        name: "Noah Lee",
        email: "noah@untitledui.com",
        avatarSrc: ProfilePicture,
      },
      status: "Delivered",
      reportType: "Found",
      itemImage: ExampleInventoryImage,
    },
    {
      id: 5,
      item: "Aluminum sheets, 2 mm thick sheets apr. 0.5 sheets/Kg",
      itemDescription: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "28 Jul 2023",
      user: {
        name: "Ava Smith",
        email: "ava@untitledui.com",
        avatarSrc: ProfilePicture,
      },
      status: "Pending Request",
      reportType: "Missing",
      itemImage: ExampleInventoryImage,
    },
    {
      id: 6,
      item: "Rubber bands, 10 cm diameter bands apr. 100 bands/Kg",
      itemDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "29 Jul 2023",
      user: {
        name: "Sophia Johnson",
        email: "sophia@untitledui.com",
        avatarSrc: ProfilePicture,
      },
      status: "Rejected",
      reportType: "Damaged",
      itemImage: ExampleInventoryImage,
    },
    {
      id: 7,
      item: "Glass bottles, 500 ml bottles apr. 2 bottles/Kg",
      itemDescription: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "30 Jul 2023",
      user: {
        name: "Liam Brown",
        email: "liam@untitledui.com",
        avatarSrc: ProfilePicture,
      },
      status: "Approved",
      reportType: "Found",
      itemImage: ExampleInventoryImage,
    },
    {
      id: 8,
      item: "Plastic containers, 1 liter containers apr. 1 container/Kg",
      itemDescription: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      date: "31 Jul 2023",
      user: {
        name: "Isabella Garcia",
        email: "isabella@untitledui.com",
        avatarSrc: ProfilePicture,
      },
      status: "In Transit",
      reportType: "Missing",
      itemImage: ExampleInventoryImage,
    },
  ];
  
  function YourAcceptedRequestsTableComponent() {
    return (
      <div className="bg-white p-6 shadow rounded-lg">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="">
                <TableHead className="w-[10px]">S.No</TableHead>
                <TableHead className="w-[500px]">Items</TableHead>
                <TableHead className="w-[120px]">Date</TableHead>
                <TableHead className="">User</TableHead>
                <TableHead className="w-[200px]">Status</TableHead>
                <TableHead className="">Report Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {yourAcceptedRequestsTableRows.map((row) => (
                <YourAcceptedRequestsTableRow key={row.id} {...row} />
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
  
  
  function YourAcceptedRequestsTableRow({ id, itemImage, item, itemDescription, date, user, status, reportType  }) {
    return (
      <TableRow>
      <TableCell>{id}</TableCell>
      <TableCell className='flex items-center gap-x-2'>
        <img src={itemImage} alt={item} className="w-10 h-10 rounded-md" />
        <div className="flex flex-col items-start">
        <div className="font-medium">{item}</div>
        <div className="text-sm text-gray-500 leading-tight">
          {itemDescription}
        </div>
        </div>
        
      </TableCell>
      <TableCell>{date}</TableCell>
      <TableCell>
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage
              alt={user.name}
              src={user.avatarSrc}
            />
            <AvatarFallback>OR</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{user.name}</div>
            <div className="text-sm text-gray-500">{user.email}</div>
          </div>
        </div>
      </TableCell>
      <TableCell className='text-center'>
        <Badge variant="secondary">{status}</Badge>
      </TableCell>
      <TableCell>{reportType}</TableCell>
    </TableRow>
    );
  }
  
  export default function YourAcceptedRequestsTable() {
    return (
      <div className="bg-white p-6 shadow rounded-lg">
        <div className="overflow-x-auto">
          <YourAcceptedRequestsTableComponent />
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
  
  