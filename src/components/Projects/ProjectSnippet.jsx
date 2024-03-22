import React from "react";
import { MapPin, ExternalLink } from "lucide-react";
function ProjectSnippet({
  profilePicture,
  title,
  location,
  mapUrl,
}) {
  return (
    <div className="flex h-full w-72 flex-col rounded border bg-white">
      <div className="flex w-full items-center justify-start border-b border-dashed">
        <img
          src={profilePicture}
          alt="Profile Picture"
          className="mx-2 h-10 w-10"
        />
        <div className="flex flex-col px-1 py-2">
          <h4 className="text-base">Phoenix Baker</h4>
          <p className="text-sm text-slate-600">Manager</p>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <h4 className="px-2 pt-1">Location</h4>
        <div className="flex w-full items-center justify-start ml-4">
          <MapPin
            className="h-9 w-9 mr-2 rounded-full p-2 text-green-800"
            strokeWidth={1}
          />
          <div className="flex flex-col px-1 py-2">
            <h4 className="text-base">{title}</h4>
            <p className="text-sm text-slate-600">{location}</p>
          </div>
        </div>
      </div>
      <div
        className="h-[100px]"
        style={{
          width: "100%",
          height: "150px",
          border: "none",
          overflow: "hidden",
        }}
      >
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
      <div className="flex bg-slate-50 justify-center h-12 items-center">
        <p>Open in maps</p>
        <ExternalLink className="w-4 h-4 ml-1 " />
      </div>
    </div>
  );
}

export default ProjectSnippet;
