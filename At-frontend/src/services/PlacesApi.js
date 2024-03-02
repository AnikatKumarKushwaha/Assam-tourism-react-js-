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

export const getPlaces = async () => {
  const response = await fetch("http://localhost:4000/places");
  const data = await response.json();
  return data;
};

export const getSinglePlace = async (id) => {
  const response = await fetch(`http://localhost:4000/place/${id}`);
  const data = await response.json();
  return data;
};

export const deletePlace = async (id) => {
  try {
    const response = await fetch(`http://localhost:4000/places/delete/${id}`, {
      method: "delete",
    });
    if (!response.ok) {
      throw new Error("Failed to Delete Data, Something went wrong");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.messaage || "Failed to delete data");
  }
};

export const addplace = async (place) => {
  let imageUrl;
  try {
    const imageName = `${Math.random()}-${place.image.name}`.replace("/", "");
    const storageRef = ref(storage, `images/${imageName}`);

    // Upload image to Firebase Storage
    await uploadBytes(storageRef, place.image);

    // Get the download URL of the uploaded image
    const downloadUrl = await getDownloadURL(storageRef);

    // Now you can use the downloadUrl as needed (e.g., save it to MongoDB)
    console.log(downloadUrl);
    imageUrl = downloadUrl;
  } catch (error) {
    console.error("Failed to upload image to Firebase Storage:", error.message);
  }
  try {
    const requestData = {
      ...place,
      image: imageUrl,
    };
    const response = await fetch("http://localhost:4000/places/new", {
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

export const editPlace = async (place) => {
  const hasImagePath =
    typeof place.image === "string" &&
    (place.image.startsWith("https://firebasestorage.googleapis.com") ||
      place.image.name.startsWith("https://firebasestorage.googleapis.com"));

  console.log(hasImagePath);

  let imageUrl;

  if (!hasImagePath) {
    try {
      const imageName = `${Math.random()}-${place.image.name}`.replace("/", "");
      const storageRef = ref(storage, `images/${imageName}`);

      // Upload image to Firebase Storage
      await uploadBytes(storageRef, place.image);

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
        ...place,
        image: imageUrl,
      };
    }

    const response = await fetch(
      `http://localhost:4000/places/update/${place._id}`,
      {
        method: "Put",
        headers: {
          "Content-type": "application/json",
        },
        body: !hasImagePath
          ? JSON.stringify(requestData)
          : JSON.stringify(place),
      },
    );

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to update data");
  }
};
export const searchPlace = async (key) => {
  const request = await fetch(`http://localhost:4000/search/${key}`);
  const data = await request.json();
  return data;
};
