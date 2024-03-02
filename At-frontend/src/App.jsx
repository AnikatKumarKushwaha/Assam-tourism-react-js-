import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AdminPlaces from "./pages/Admin/AdminPlaces";
import AdminAddPlace from "./pages/Admin/AdminAddPlace";
import AdminUpdateUser from "./pages/Admin/AdminUpdateUser";
import AdminAddExperiences from "./pages/Admin/AdminAddExperiences";
import AdminEditExperiences from "./pages/Admin/AdminEditExperiences";
import AdminEditPlace from "./pages/Admin/AdminEditPlace";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./Ui/AppLayout";
import AdminExperiences from "./pages/Admin/AdminExperiences";
import { Toaster } from "react-hot-toast";

import MainPage from "./pages/User/MainPage";
import Places from "./pages/User/Places";
import Experiences from "./pages/User/Experiences";
import LoginPage from "./pages/Authentication/LoginPage";
import SignupPage from "./pages/Authentication/SignupPage";
import SingleDetailPage from "./pages/User/SingleDetailPage";
import SingleDetailExperience from "./pages/User/SingleDetailExperience";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserData } from "./redux/slice/UserSlice";

function App() {
  const { data, isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (!!localStorage.getItem("user")) {
      dispatch(addUserData(JSON.parse(localStorage.getItem("user"))));
    } else {
      console.log("no item in local storage");
    }
  }, [dispatch, localStorage.getItem("user")]);

  useEffect(() => {
    if (!isLoading && data != null) {
      setIsLogin(JSON.stringify(data) !== "{}");
    }
  }, [data, isLoading]);

  const role = JSON.stringify(data) !== "{}" ? data.role : "user";

  let routes;
  if (isLogin) {
    if (role === "admin") {
      routes = (
        <>
          <Route index element={<Navigate replace to="/places" />} />
          <Route path="/places" element={<AdminPlaces />} />
          <Route path="/addplaces" element={<AdminAddPlace />} />
          <Route path="places/:uid" element={<AdminEditPlace />} />
          <Route path="/updateuser" element={<AdminUpdateUser />} />
          <Route path="/experiences" element={<AdminExperiences />} />
          <Route path="/addexperiences" element={<AdminAddExperiences />} />
          <Route path="/experiences/:eid" element={<AdminEditExperiences />} />
          <Route path="/places/:pid" element={<AdminEditPlace />} />
        </>
      );
    } else if (role === "user") {
      routes = (
        <>
          <Route index element={<Navigate replace to="/mainpage" />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/places" element={<Places />} />
          <Route path="/places/:id" element={<SingleDetailPage />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/experience/:id" element={<SingleDetailExperience />} />
        </>
      );
    }
  } else {
    routes = (
      <>
        <Route index element={<Navigate replace to="/mainpage" />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/places" element={<Places />} />
        {/* <Route path="/places/:id" element={<SingleDetailPage />} /> */}
        <Route path="/experiences" element={<Experiences />} />
        {/* <Route path="/experience/:id" element={<SingleDetailExperience />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </>
    );
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>{routes}</Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },

          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#f8fafc",
            color: "#334155",
          },
        }}
      />
    </>
  );
}

export default App;
