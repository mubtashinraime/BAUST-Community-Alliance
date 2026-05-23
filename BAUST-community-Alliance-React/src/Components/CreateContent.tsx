// CreateContent.tsx

import { useState } from "react";
import "./CreateContent.css";
import {api} from "../Services/api"

export default function CreateContent() {
  const [formData, setFormData] = useState({
    heading: "",
    content_about: "",
    detail_description: "",
    image: "",
    video: "",
  });

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      setSelectedImage(file);

      setFormData({
        ...formData,
        image: `${file.name}`,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      // create multipart form data
      const data = new FormData();

      data.append("heading", formData.heading);
      data.append("content_about", formData.content_about);
      data.append(
        "detail_description",
        formData.detail_description
      );
      data.append("image", formData.image);
      data.append("video", formData.video);

      // send image file
      if (selectedImage) {
        data.append("imageFile", selectedImage);
      }

      const response = await api.post("Content", data);

      console.log(response.data);

      setMessage("Content created successfully!");

      setFormData({
        heading: "",
        content_about: "",
        detail_description: "",
        image: "",
        video: "",
      });

      setSelectedImage(null);
    } catch (error) {
      console.error(error);
      setMessage("Failed to create content.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-content-container">
      <form className="create-content-form" onSubmit={handleSubmit}>
        <h2>Create Content</h2>

        <input
          type="text"
          name="heading"
          placeholder="Heading"
          value={formData.heading}
          onChange={handleChange}
          required
        />

        <textarea
          name="content_about"
          placeholder="Content About"
          value={formData.content_about}
          onChange={handleChange}
          required
        />

        <textarea
          name="detail_description"
          placeholder="Detail Description"
          value={formData.detail_description}
          onChange={handleChange}
          required
        />

        {/* Upload Image */}
        <div className="upload-box">
          <label>Select Image</label>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />

          {selectedImage && (
            <p className="file-name">
              Selected: {selectedImage.name}
            </p>
          )}
        </div>

        <input
          type="text"
          name="video"
          placeholder="Video URL (optional)"
          value={formData.video}
          onChange={handleChange}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Content"}
        </button>

        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
}