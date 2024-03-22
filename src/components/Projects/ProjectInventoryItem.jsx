import React from "react";
import { Card, CardContent } from "@/components/ui/card";

import ExampleInventoryImage from "@/assets/images/inventory/drill.png";

function ProjectInventoryItem() {
  return (
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
    </div>
  );
}

export default ProjectInventoryItem;
