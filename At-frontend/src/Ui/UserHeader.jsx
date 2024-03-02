import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/assam-tourism.jpg";
import SearchInput from "./SearchInput";
import LinkButton from "./LinkButton";
import Profile from "./Profile";
import { useDispatch, useSelector } from "react-redux";
import { placeSearch } from "../redux/slice/placeSlice";
import { FaBars } from "react-icons/fa";
import { FaMountainSun } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";
import { TbLogout2 } from "react-icons/tb";
import { removeUserData } from "../redux/slice/UserSlice";

export default function UserHeader() {
  const { data } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const { isLoading, searchData } = useSelector((state) => state.place);
  const [searchInput, setSearchinput] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const isLogin = JSON.stringify(data) !== "{}";
  useEffect(() => {
    if (searchInput.length !== 0) {
      dispatch(placeSearch(searchInput));
    }
  }, [searchInput, dispatch]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  function handelLogout() {
    dispatch(removeUserData());
    setIsDrawerOpen(!isDrawerOpen);
    localStorage.removeItem("user");
    navigate("/");
  }

  return (
    <div className=" border-b border-stone-200 bg-stone-50 px-4 py-2 shadow-md md:px-10">
      <ul className="ease-in-ou grid h-14 grid-cols-[0.1fr_0.1fr_1fr] items-center justify-items-center md:grid-cols-[0.2fr_1fr_0.8fr_0.5fr] lg:grid-cols-[0.2fr_1fr_0.8fr_1fr] ">
        <li className="md:hidden">
          <button onClick={toggleDrawer}>
            <FaBars className=" text-slate-600" />
          </button>
        </li>
        {isDrawerOpen && (
          <div className="fixed left-0 top-0  z-50 h-full w-3/4 bg-stone-50 px-3 py-16 shadow-md">
            <button
              onClick={toggleDrawer}
              className="text-darkyellow absolute right-3 top-3 text-2xl font-bold"
            >
              &#10005;
            </button>
            <ul className=" flex w-full flex-col">
              <li>
                <Link to="/places" onClick={toggleDrawer}>
                  <div className="mb-2 flex w-full items-center  gap-2 rounded-sm bg-yellow-500 px-2 py-1 uppercase text-yellow-50">
                    <FaMountainSun /> Places
                  </div>
                </Link>
              </li>

              <li>
                <Link to="/experiences" onClick={toggleDrawer}>
                  <div className="mb-2 flex w-full items-center  gap-2 rounded-sm bg-yellow-500 px-2 py-1 uppercase text-yellow-50">
                    <FaCamera />
                    Experience
                  </div>
                </Link>
              </li>
              <li>
                {isLogin ? (
                  <button onClick={handelLogout} className="w-full">
                    <div className="mb-2 flex w-full items-center justify-center  gap-2 rounded-sm border border-yellow-500 px-2 py-1 uppercase text-yellow-500">
                      <TbLogout2 />
                      Logout
                    </div>
                  </button>
                ) : (
                  <Link to="/login" onClick={toggleDrawer}>
                    <div className="mb-2 flex w-full items-center  gap-2 rounded-sm bg-yellow-500 px-2 py-1 uppercase text-yellow-50">
                      <IoIosLogIn />
                      Login
                    </div>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        )}

        <li>
          <Link to="/" className=" w-16 rounded-md">
            <img
              className="w-14 rounded-md shadow-md transition-all duration-300 hover:w-16 active:w-14"
              src={logo}
              alt="logo"
            />
          </Link>
        </li>
        <li className=" w-full ">
          <SearchInput
            onChange={(e) => setSearchinput(e.target.value)}
            searchData={searchData}
            isLoading={isLoading}
          />
        </li>
        <li className="hidden h-full w-full grid-cols-2 items-center justify-items-center md:grid ">
          <LinkButton to="/places">Places</LinkButton>
          <LinkButton to="/experiences">Experience</LinkButton>
        </li>
        <li className=" hidden place-self-end self-center md:block">
          {isLogin ? (
            <Profile />
          ) : (
            <LinkButton color="darkyellow" to="/login">
              Login
            </LinkButton>
          )}
        </li>
      </ul>
    </div>
  );
}
