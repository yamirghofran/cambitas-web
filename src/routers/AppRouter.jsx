import React from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClient } from "react-query";
import Dashboard from "../pages/Dashboard.jsx";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Sidebar from "../components/layout/Sidebar.jsx";
import Projects from "../pages/Projects.jsx";
import AddProject from "../pages/AddProject.jsx";
import Inventory from "../pages/Inventory.jsx";
import Employees from "../pages/Employees.jsx";
import Reports from "../pages/Reports.jsx";
import Metrics from "../pages/Metrics.jsx";
import ProjectDetails from "../pages/ProjectDetails.jsx";
import InventoryDetails from "@/pages/InventoryDetails.jsx";
import EmployeeProfile from "@/pages/EmployeeProfile.jsx";
import EditEmployee from "@/pages/EditEmployee.jsx";
import AddInventoryItem from "@/pages/AddInventoryItem.jsx";
import Profile from "@/pages/Profile.jsx";
import EditProfile from "@/pages/EditProfile.jsx";
import ScreenSize from "@/components/ScreenSize.jsx";
import UpdateProject from "@/pages/UpdateProject.jsx";
import AddEmployee from "@/pages/AddEmployee.jsx";

const queryClient = new QueryClient();

function AppRouter() {
  return (
    <>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/" element={<Sidebar />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:project_id" element={<ProjectDetails />} />
        <Route path="/projects/add" element={<AddProject />} />
        <Route path="/projects/:project_id/update" element={<UpdateProject />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/inventory/add" element={<AddInventoryItem />} />
        <Route path="/inventory/:item_id" element={<InventoryDetails />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/employees/add" element={<AddEmployee />} />
        <Route path="/employees/:id" element={<EmployeeProfile />} />
        <Route path="/employees/:id/edit" element={<EditEmployee />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/metrics" element={<Metrics />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<EditProfile />} />
      </Route>
    </Routes>
    </>
  );
}

export default AppRouter;
