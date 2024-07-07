import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Circle,
  Trash2,
  PencilLine,
  MapPin,
  ExternalLink,
  TriangleAlert as AlertIcon,
} from "lucide-react";
import Project1CoverImage from "../assets/images/projects/cambitas-project-1.png";
import ProfilePicture from "../assets/images/profiles/cambitas-profile-1.png";
import { Badge } from "@/components/ui/badge";
import CurrentHolder from "@/components/Inventory/CurrentHolder";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import AlertDialogComponent from "@/components/layout/AlertDialogComponent";
import { getInventoryItemByID } from "@/util/functions/InventoryItems";
import { createRequest } from "@/util/functions/db";

function createRequest(currentHolderID, currentHolderName, currentHolderProfileImageURL, currentProjectID, currentProjectName, itemID, itemName, itemImageURLs) {
  const requestData = {
    requesterID: currentHolderID,
    requesterDisplayName: currentHolderName,
    requesterProfileImageURL: currentHolderProfileImageURL,
    recipientID: "ZmpQUSlyfuFiscvYE2ct",
    itemID: "123456",
  };
  createRequest(companyID, requestData);
}

const exampleDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

function deleteInventoryItem() {
  console.log("Deleting inventory item");
}

function InventoryDetails({
  coverImage = Project1CoverImage,
  title = "Oak wood logs, 50 cm long logs apr. 2 logs/kg",
  description = exampleDescription,
  location = "Valencia",
  startDate = "23rd December 2024",
  expectedEndDate = "25th February 2025",
  manager = "Juan Jose",
  mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160657065!2d-74.24789616611806!3d4.648283716237536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3a0257c7e293b1%3A0x6f8a76e65c88d8d4!2sBogot%C3%A1!5e0!3m2!1sen!2sco!4v1597848247914!5m2!1sen!2sco",
}) {
  const { item_id } = useParams();
  const [inventoryItem, setInventoryItem] = useState(null);
  const companyID = '123456';
  const fetchInventoryItem = async () => {
    const inventoryItem = await getInventoryItemByID(companyID, item_id);
    console.log(inventoryItem);
    setInventoryItem(inventoryItem);
  };
  useEffect(() => {
    fetchInventoryItem();
  }, []);
  return (
    <div>
      <div className="border-b border-gray-200 py-3 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center">
          <Link to="/inventory" className="flex items-center">
            <ArrowLeft className="h-4 w-5 text-slate-600" />
            <p className="text-base text-slate-600">Back</p>
          </Link>
          <Circle fill="gray" strokeWidth={0} className="mx-2 h-1.5 w-1.5" />
          <h2>{inventoryItem?.name}</h2>
        </div>
        <div className="mt-3 flex sm:ml-4 sm:mt-0">
          <Dialog>
            <DialogTrigger>
              <button
                type="button"
                className="inline-flex mr-2 items-center rounded bg-white px-3 py-1.5 text-sm text-red-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <AlertIcon strokeWidth={2} className="mr-1.5 h-4 w-4" /> Report
                Incident
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Report Incident</DialogTitle>
              </DialogHeader>
              <Select>
                <Label>Incident</Label>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Incident" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="stolen">Stolen</SelectItem>
                  <SelectItem value="damaged">Damaged</SelectItem>
                  <SelectItem value="missing">Missing</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <Label>Incident Description</Label>
              <Textarea />
              <Button variant="primary" className="mt-4 text-white bg-red-500">
                Report Incident
              </Button>
            </DialogContent>
          </Dialog>
          <AlertDialogComponent action={{id: "delete-inventory-item", cta: "Delete Inventory Item", text: "Are you sure you want to delete this inventory item?", function: deleteInventoryItem}}>
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
            src={inventoryItem?.imagesUrls? inventoryItem?.imagesUrls[0] : coverImage}
            alt="Project Cover Image"
            className="h-[420px] rounded-lg object-cover object-center"
          />
        </div>
        <div className="mt-4 w-8/12">
          <div className="flex h-[300px] w-full">
            <div className="flex flex-col justify-between">
              <div className="flex flex-col">
                <Badge
                  variant="secondary"
                  className="text-green-700 bg-slate-200 w-fit rounded-md text-sm"
                >
                  Oak Wood
                </Badge>
                <h2 className="my-2 text-2xl font-semibold">{inventoryItem?.name}</h2>
                <p className="text-base text-slate-600">{inventoryItem?.description}</p>
                <p className="text-green-800 underline cursor-pointer">More</p>
                <h3 className="mt-4 font-semibold text-lg">Details</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <h3 className="text-sm font-semibold">Department</h3>
                    <p className="text-sm">Wood</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Category</h3>
                    <p className="text-sm">Materials</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Material</h3>
                    <p className="text-sm">Wood</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Color</h3>
                    <p className="text-sm">Brown</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Location</h3>
                    <p className="text-sm">Valencia</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Online since</h3>
                    <p className="text-sm">9/12/2023</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Reference</h3>
                    <p className="text-sm">123456789</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Dimensions</h3>
                    <p className="text-sm">3x4x50</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-4">
              <div className="w-[300px] flex flex-col">
                <CurrentHolder
                  profilePicture={inventoryItem?.currentHolderProfileImageURL}
                  name={inventoryItem?.currentHolderName}
                  projectName={inventoryItem?.projectName}
                  location={inventoryItem?.currentLocation}
                  mapUrl={mapUrl}
                />
                <div className="flex justify-between gap-x-4 mt-6">
                  <Button
                    variant="secondary"
                    className="text-slate-600 bg-slate-200 w-full hover:bg-slate-300 rounded-md text-sm border"
                  >
                    Request Item
                  </Button>
                  <Button
                    variant="primary"
                    className="text-white bg-green-800 hover:bg-green-700 w-full rounded-md text-sm"
                  >
                    Check Item In
                  </Button>
                </div>
              </div>
              <div className="mt-4 gap-y-6 flex flex-col"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InventoryDetails;
