"use client"
import React from "react";
import CompletedProjects from "@/component/dashboard/completedProjects/completedprojects";
import ProjectProgress from "@/component/dashboard/projectProgress/projectprogress";
import Insights from "@/component/dashboard/insights/insight";
import WebAppsProduct from "@/component/dashboard/products/product";
import MyCourses from "@/component/dashboard/myCourses/mycourse";
import AllCourses from "@/component/dashboard/courses/courses";
export default function AdminDashboard() {
  return (
    <div>
      <ProjectProgress />
      <CompletedProjects />
      {/* <MyCourses />
      <WebAppsProduct /> */}
      <AllCourses />

      <Insights />
    </div>
  );
}
