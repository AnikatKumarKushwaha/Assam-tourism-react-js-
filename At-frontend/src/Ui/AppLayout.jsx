import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import UserHeader from "./UserHeader";

export default function AppLayout() {
  const auth = JSON.parse(localStorage.getItem("user"));

  if (auth && auth.role === "admin") {
    return (
      <div className=" grid h-screen grid-cols-[17rem_1fr] grid-rows-[auto_1fr]">
        <Header />
        <SideBar />
        <main className=" overflow-scroll bg-slate-100 px-12 pb-16 pt-12">
          <Outlet />
        </main>
      </div>
    );
  }

  return (
    <div>
      <UserHeader />
      <main className=" overflow-scroll">
        <Outlet />
      </main>
    </div>
  );
}
