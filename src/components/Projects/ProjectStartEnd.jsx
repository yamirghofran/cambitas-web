import React from "react";

function ProjectStartEnd({startDate, expectedEndDate}) {
  return (
    <div className="flex justify-between rounded border bg-white px-2 py-2 text-sm">
      <div className="flex flex-col">
        <h3>Start Date</h3>
        <p>{startDate}</p>
      </div>
      <div className="flex flex-col">
        <h3>Expected End Date</h3>
        <p>{expectedEndDate}</p>
      </div>
    </div>
  );
}

export default ProjectStartEnd;
