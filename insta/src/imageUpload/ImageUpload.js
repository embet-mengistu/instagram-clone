import React, { useState } from "react";
import Button from "@mui/material/Button";
import { db, storage } from "../firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "./imageUpload.css";

function ImageUpload({ username }) {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    // get the file which is selected at first
    if (e.target.files[0]) {
      // and update the image
      setImage(e.target.files[0]);
    }
  };
  const uploadToStorage = async () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
          reject(error);
        },
        () => {
          resolve();
        }
      );
    });
  };
  const handleUpload = async () => {
    try {
      await uploadToStorage();
      const url = await storage
        .ref("images")
        .child(image.name)
        .getDownloadURL();

      await db.collection("posts").add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        caption: caption,
        imageUrl: url,
        username: username,
      });

      setImage(null);
      setCaption("");
      setProgress(0);

      console.log(url);
    } catch (error) {
      console.log(error);
      alert("An error occurred during the upload process.");
    }
  };
  return (
    <div className="imageUpload">
      <progress className="imageupload_progress" value={progress} max="100" />
      <input
        type="text"
        // value={hh}
        placeholder="Enter a caption..."
        onChange={(e) => setCaption(e.target.value)}
      />
      <input type="file" onChange={handleChange} />
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
}

export default ImageUpload;
