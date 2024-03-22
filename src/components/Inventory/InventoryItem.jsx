import React from 'react';
import { Link } from "react-router-dom";
import { MapPin as MapIcon } from "lucide-react";
import ExampleInventoryImage from "@/assets/images/inventory/drill.png";

function InventoryItem() {
    return (
      <Link to="/inventory/1">
      <div className="w-full rounded-lg border overflow-hidden bg-white">
        <img
          alt="Precast concrete super cool concrete 90 cm"
          className="w-full h-24 object-cover"
          height="150"
          src={ExampleInventoryImage}
          style={{
            aspectRatio: "150/150",
            objectFit: "cover",
          }}
          width="150"
        />
        <div className="p-2">
          <h3 className="p-0 m-0 leading-tight">
            Precast concrete super cool concrete 90 cm
          </h3>
        </div>
        <div className="flex flex-col border-t border-dashed py-1 px-1">
          <p className="text-sm">Rejuvenation Solution</p>
          <div className="flex items-center text-sm"><MapIcon className="h-4 w-4 mr-1.5 text-green-800"  />Madrid, Spain</div>
        </div>
      </div>
      </Link>
    )
    
  }

export default InventoryItem