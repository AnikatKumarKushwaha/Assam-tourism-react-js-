import React from "react";
import { FaMountainSun } from "react-icons/fa6";
import { RiImageAddLine } from "react-icons/ri";
import { LuSailboat } from "react-icons/lu";
import { IoAdd } from "react-icons/io5";

import SBNav from "./SBNav";

export default function MainNav() {
  return (
    <nav>
      <ul className="mt-5 flex flex-col gap-3">
        <li>
          <SBNav to="/places">
            <FaMountainSun />
            <span>Places </span>
          </SBNav>
        </li>
        <li>
          <SBNav to="/addplaces">
            <RiImageAddLine />
            <span>Add New Places</span>
          </SBNav>
        </li>
        <li>
          <SBNav to="/experiences">
            <LuSailboat />
            <span>Experiences</span>
          </SBNav>
        </li>
        <li>
          <SBNav to="/addexperiences">
            <IoAdd />
            <span>Add Experience</span>
          </SBNav>
        </li>
      </ul>
    </nav>
  );
}
