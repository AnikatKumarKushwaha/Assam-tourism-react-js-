import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import ProfilePopUpModal from "./ProfilePopUpModal";

export default function Profile() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div className=" relative rounded-3xl">
      <button
        className="rounded-full  bg-orange-200 p-3 text-orange-400 shadow-md hover:bg-orange-400 hover:text-orange-200 hover:shadow-lg"
        onClick={() => setIsOpenModal(!isOpenModal)}
      >
        <FaUser className=" h-5 w-5 " />
      </button>

      {isOpenModal && <ProfilePopUpModal setIsOpenModal={setIsOpenModal} />}
    </div>
  );
}
