// BlogPage.tsx

import { useEffect, useState } from "react";
import { api } from "../Services/api";
import ContentCard from "../Components/ContentCard";
import "./StoriesPage.css";


type StoriesType = {
  id: number;
  content_about: string;
  image: string;
  dateTime: string;
  detail_description?: string; // Add this line
};

export default function stories() {
  const [stories, setstories] = useState<StoriesType[]>([]);
  const [pageNumber, setPageNumber] = useState(1);

  const pageSize = 4;

  useEffect(() => {
    fetchStories(pageNumber);
  }, [pageNumber]);

  const fetchStories = async (page: number) => {
    try {
      const response = await api.get(
        `content/stories?pageNumber=${page}&pageSize=${pageSize}`
      );
      console.log(response.data);


      setstories(response.data);
    } catch (error) {
      console.error("Failed to fetch blogs", error);
    }
  };

  const handleNext = () => {
    setPageNumber((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (pageNumber > 1) {
      setPageNumber((prev) => prev - 1);
    }
  };

  return (
    <div className="blog-page">

      {/* Title */}
      <h1 className="blog-title">
        From Campus To Career<br/>
        Graduate Journeys
      </h1>

      {/* Blog Grid */}
      <div className="blog-grid">
        {stories.map((item) => (
          <ContentCard
            key={item.id}
            item={item}
            variant="list" // 👈 Explicitly assigns list presentation structure
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="blog-pagination">

        <button
          onClick={handlePrevious}
          disabled={pageNumber === 1}
          className="page-btn"
        >
          Previous
        </button>

        <button
          onClick={handleNext}
          className="page-btn"
        >
          Next
        </button>

      </div>
    </div>
  );
}