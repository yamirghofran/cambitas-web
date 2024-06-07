import React from "react";
import { Card, CardContent } from "@/components/ui/card";

import ExampleInventoryImage from "@/assets/images/inventory/drill.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function SelectProjectInventory({ availableInventory }) {
  return (
    <div className="w-full rounded-lg border overflow-hidden bg-white">
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
  );
}

export default SelectProjectInventory;
