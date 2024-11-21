import { Alert, Button, FileInput, Select, TextInput } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CreatePost() {
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({});

  const handleUploadImage = async () => {
    try {
      if (!file) {
        setImageUploadError("Please select an image");
        return;
      }

      setImageUploadError(null);
      setImageUploadProgress(null);

      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "admin_uploads"); // Replace with your actual upload preset
      formData.append("cloud_name", "dbnvbi1th");
      formData.append("folder", "admin_uploads");

      const xhr = new XMLHttpRequest();

      xhr.upload.addEventListener("progress", (e) => {
        if (e.lengthComputable) {
          const progress = Math.round((e.loaded / e.total) * 100);
          setImageUploadProgress(progress);
          console.log(`Upload Progress: ${progress}%`);
        }
      });

      xhr.addEventListener("load", () => {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          console.log("Image uploaded successfully:", data);
          setFormData((prev) => ({ ...prev, image: data.secure_url }));
          setImageUploadProgress(null);
        } else {
          setImageUploadError("Image upload failed. Please try again.");
          console.error("Error uploading image:", xhr.statusText);
        }
      });

      xhr.addEventListener("error", () => {
        setImageUploadError("Image upload failed. Please try again.");
        setImageUploadProgress(null);
      });

      xhr.open(
        "POST",
        "https://api.cloudinary.com/v1_1/dbnvbi1th/image/upload",
        true
      );

      xhr.send(formData);
    } catch (error) {
      setImageUploadError("An unexpected error occurred.");
      console.error(error);
    }
  };

  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Create a Post</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
          />
          <Select>
            <option value="uncategorised">Select a category</option>
            <option value="JavaScript">JavaScript</option>
            <option value="ReactJS">ReactJS</option>
            <option value="NextJS">NextJS</option>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Button
            type="button"
            gradientDuoTone="purpleToBlue"
            size="sm"
            outline
            onClick={handleUploadImage}
            disabled={imageUploadProgress}
          >
            {imageUploadProgress ? (
              <div className="w-16 h-16">
                <CircularProgressbar
                  value={imageUploadProgress}
                  text={`${imageUploadProgress || 0}%`}
                />
              </div>
            ) : (
              "Upload Image"
            )}
          </Button>
        </div>
        {
          imageUploadError && <Alert color="failure">{imageUploadError}</Alert>
        }
        {formData.image && (
          <img
          src={formData.image}
          alt="upload"
          className="w-full, h-72 object-cover" />
        )}
        <ReactQuill
          theme="snow"
          placeholder="Write Something..."
          className="h-72 mb-12"
          required
        />
        <Button type="submit" gradientDuoTone="purpleToPink">
          Publish
        </Button>
      </form>
    </div>
  );
}
