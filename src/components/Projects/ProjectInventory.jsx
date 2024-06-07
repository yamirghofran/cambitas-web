import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import { getProjectInventoryItems } from "@/util/functions/InventoryItems"

import ProjectInventoryItem from '@/components/Projects/ProjectInventoryItem'

import { useEffect, useState } from 'react';

function ProjectInventory({inventoryItemIDs, projectId}) {
  const [inventoryItems, setInventoryItems] = useState([]);
  const companyID = '123456'; // This should be dynamically set based on actual use case
  const projectID = projectId; // This should be dynamically set based on actual use case

  const fetchProjectInventoryItems = async (companyID, projectID) => {
    const items = await getProjectInventoryItems(companyID, projectID);
    setInventoryItems(items);
  };

  useEffect(() => {
    fetchProjectInventoryItems(companyID, projectID);
  }, [companyID, projectID]);
    return (
        <div className="bg-white p-6 rounded-md">
          <h1 className="text-2xl font-semibold mb-4">Using Inventory</h1>
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
          {inventoryItems.map(item => (
        <ProjectInventoryItem key={item.id} item={item} />
      ))}
          </div>
          <div className="flex justify-center mt-4">
            <Button variant="secondary">View More</Button>
          </div>
        </div>
      )
    }
    
    function FilterIcon(props) {
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
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
      )
}

export default ProjectInventory