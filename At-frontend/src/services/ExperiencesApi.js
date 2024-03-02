import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCMI_QKQiQh-cGjQf7Nkspynck_bYTw7mY",
  authDomain: "assam-tourism-38b5c.firebaseapp.com",
  projectId: "assam-tourism-38b5c",
  storageBucket: "assam-tourism-38b5c.appspot.com",
  messagingSenderId: "279593927390",
  appId: "1:279593927390:web:95ed156f3d8ad7db26b84f",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export const getExperiences = async () => {
  const response = await fetch("http://localhost:4000/experiences");
  const data = await response.json();
  return data;
};

export const getSingleExperienceData = async (id) => {
  const response = await fetch(`http://localhost:4000/experience/${id}`);
  const data = await response.json();
  return data;
};

export const deleteExperiences = async (id) => {
  try {
    const response = await fetch(
      `http://localhost:4000/experience/delete/${id}`,
      {
        method: "delete",
      },
    );
    if (!response.ok) {
      throw new Error("Failed to Delete Data, Something went wrong");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message || "Failed to delete data");
  }
};

export const addExperience = async (experience) => {
  let imageUrl;
  try {
    const imageName = `${Math.random()}-${experience.image.name}`.replace(
      "/",
      "",
    );
    const storageRef = ref(storage, `images/${imageName}`);

    await uploadBytes(storageRef, experience.image);

    const downloadUrl = await getDownloadURL(storageRef);

    console.log(downloadUrl);
    imageUrl = downloadUrl;
  } catch (error) {
    console.error("Failed to upload image to Firebase Storage:", error.message);
  }
  try {
    const requestData = {
      ...experience,
      image: imageUrl,
    };
    const response = await fetch("http://localhost:4000/experience/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to upload new data");
  }
};

export const editExperience = async (experience) => {
  const hasImagePath =
    typeof experience.image === "string" &&
    (experience.image.startsWith("https://firebasestorage.googleapis.com") ||
      experience.image.name.startsWith(
        "https://firebasestorage.googleapis.com",
      ));

  console.log(hasImagePath);

  let imageUrl;

  if (!hasImagePath) {
    try {
      const imageName = `${Math.random()}-${experience.image.name}`.replace(
        "/",
        "",
      );
      const storageRef = ref(storage, `images/${imageName}`);

      // Upload image to Firebase Storage
      await uploadBytes(storageRef, experience.image);

      // Get the download URL of the uploaded image
      const downloadUrl = await getDownloadURL(storageRef);

      // Now you can use the downloadUrl as needed (e.g., save it to MongoDB)
      console.log(downloadUrl);
      imageUrl = downloadUrl;
    } catch (error) {
      console.error(
        "Failed to upload image to Firebase Storage:",
        error.message,
      );
    }
  }

  try {
    let requestData;
    if (!hasImagePath) {
      requestData = {
        ...experience,
        image: imageUrl,
      };
    }

    const response = await fetch(
      `http://localhost:4000/experience/update/${experience._id}`,
      {
        method: "Put",
        headers: {
          "Content-type": "application/json",
        },
        body: !hasImagePath
          ? JSON.stringify(requestData)
          : JSON.stringify(experience),
      },
    );

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to update data");
  }
};
