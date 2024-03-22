import React from "react";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { TriangleAlert, ChevronDown, ChevronUp } from "lucide-react";

function updatesItem(name, value) {
  return (
    <div className="flex justify-between px-6 border-b border-dashed py-1">
      <p className="text-slate-700">{name}</p>
      <p className="pr-2">{value}</p>
    </div>
  );
}

function Alerts() {
  return (
    <div className="bg-white rounded-lg border w-[30%] h-96">
      <h3 className="w-full  text-2xl pl-3 pt-4 pb-2">Alerts</h3>
      <div className="w-full flex flex-col justify-between">
        <div className="w-full flex justify-between px-6 bg-red-100">
          <h4 className="">Low Stock</h4>
          <div className="flex justify-around">
            <p>08</p>
            <p>toggle</p>
          </div>
        </div>

        <div className="w-full">
          {updatesItem("Item 1", 5)}
          {updatesItem("Item 2", 3)}
          {updatesItem("Item 3", 0)}
          {updatesItem("Item 4", 0)}
        </div>
      </div>
    </div>
  );
}

function AlertItem({ name='Tool Name', quantity=2 }) {
  return (
    <TableRow className="border-b border-dashed border-gray-200">
    <TableCell className="font-medium py-1">{name}</TableCell>
    <TableCell className="text-right py-1">{quantity}</TableCell>
  </TableRow>
  )
}

function Alert() {
  return (
    <div className="bg-white p-6 rounded-lg border shad w-full max-w-xs">
      <h2 className="text-lg font-semibold mb-4 flex items-center justify-between">
        <span>Alerts</span>
        <Badge variant="secondary">08</Badge>
      </h2>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-md font-medium flex items-center">
          <span>Low Stock</span>
          <TriangleAlert className="text-red-500 ml-2" />
        </h3>
        <div className="flex items-center">
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[140px]">TOOL NAME</TableHead>
            <TableHead className="w-[60px] text-right">QTY</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <AlertItem name="Tool Name" quantity={10} />
          <AlertItem name="Tool Name" quantity={12} />
          <AlertItem name="Tool Name" quantity={15} />
          <AlertItem name="Tool Name" quantity={20} />
        </TableBody>
      </Table>
    </div>
  )
}

export default Alert;
