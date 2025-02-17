import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import Home from "./pages/Home.jsx";
import DashboardLayout from "./pages/DashboardLayout.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import AddProject from "./components/Dashboard/MyProjects/AddProject.jsx";
import AddBlog from "./components/Dashboard/MyBlogs/AddBlog.jsx";
import UpdateSkills from "./components/Dashboard/Skills/UpdateSkills.jsx";
import ContentUpdate from "./components/Dashboard/Contents/ContentUpdate.jsx";
import ResumeUpdate from "./components/Dashboard/Resume/ResumeUpdate.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="addproject" element={<AddProject />} />
        <Route path="addblog" element={<AddBlog />} />
        <Route path="updateskills" element={<UpdateSkills />} />
        <Route path="content" element={<ContentUpdate />} />
        <Route path="resume" element={<ResumeUpdate />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
