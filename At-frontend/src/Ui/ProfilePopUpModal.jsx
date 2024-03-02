import React from "react";
import { CiLogout } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { removeUserData } from "../redux/slice/UserSlice";
import { useNavigate } from "react-router-dom";

export default function ProfilePopUpModal() {
  const auth = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handelLogout() {
    dispatch(removeUserData());
    localStorage.removeItem("user");
    navigate("/");
  }
  return (
    <div className="absolute -right-6 top-12 border bg-slate-50  px-4 py-4 shadow-md">
      <ul className="text-center ">
        <li>
          {auth && auth.name}
          <hr />
        </li>
        <button
          onClick={handelLogout}
          className="flex items-center justify-center gap-1"
        >
          <span>
            <CiLogout />
          </span>
          Logout
        </button>
      </ul>
    </div>
  );
}
