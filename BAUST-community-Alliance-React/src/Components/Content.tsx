import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "../Services/api";
import "./Content.css";

type ContentItem = {
  id: number;
  dateTime: string;
  heading: string;
  content_about: string;
  detail_description: string;
  image: string;
  video: string | null;
};

export default function Content() {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<ContentItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    setLoading(true);

    api
      .get<ContentItem>(`Content/${id}`)
      .then((response) => {
        setItem(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching content details:", err);
        setError("Failed to load content. Please try again later.");
        setLoading(false);
      });
  }, [id]);

  // Dynamic back navigation utility matching your routes setup
  const getBackNavigation = () => {
    const headingClean = item?.heading?.toUpperCase() || "";

    if (headingClean === "STORIES" || headingClean === "STORY") {
      return { path: "/category/story", label: "Back to Stories" };
    }
    if (headingClean === "BLOGS" || headingClean === "BLOG") {
      return { path: "/category/blog", label: "Back to Blogs" };
    }
    if (headingClean === "PUBLICATIONS" || headingClean === "PUBLICATION") {
      return { path: "/category/publication", label: "Back to Publications" };
    }

    // Universal fallback path if item is missing or doesn't match
    return { path: "/category/blog", label: "Back to Articles" };
  };

  const navTarget = getBackNavigation();

  if (loading) {
    return (
      <div className="content-detail-status">
        <div className="spinner"></div>
        <p>Loading content details...</p>
      </div>
    );
  }

  if (error || !item) {
    return (
      <div className="content-detail-status error-box">
        <p>{error || "Content item not found."}</p>
        {/* Safely renders navigation fallback path even if item is null */}
        <Link to={navTarget.path} className="back-btn">
          {navTarget.label}
        </Link>
      </div>
    );
  }

  return (
    <div className="content-detail-page">
      <div className="content-detail-container">

        {/* Top Section: Split Layout */}
        <div className="detail-header-split">

          {/* Left Column: Content Image */}
          <div className="detail-image-wrapper">
            <img
              src={`/src/images/${item.image}`}
              alt={item.content_about}
              className="detail-main-image"
            />
          </div>

          {/* Right Column: Heading & About Info */}
          <div className="detail-meta-wrapper">
            <span className="detail-blue-heading">
              {item.heading.toUpperCase()}
            </span>

            <h1 className="detail-about-title">
              {item.content_about}
            </h1>

            <p className="detail-date-display">
              Published on:{" "}
              {(() => {
                // Looks for both lowercase and uppercase variations from your backend
                const dateSource = item.dateTime || (item as any).DateTime;
                const parsedDate = dateSource ? new Date(dateSource) : null;

                // Fallback gracefully if the date object remains invalid
                return parsedDate && !isNaN(parsedDate.getTime())
                  ? parsedDate.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })
                  : "Recent Update";
              })()}
            </p>
          </div>
        </div>

        {/* Bottom Section: Media & Body text */}
        <div className="detail-body-section">

          {/* Conditional Video Layer Rendering */}
          {item.video && item.video.trim() !== "" && (
            <div className="detail-video-container">
              {item.video.includes("youtube.com") || item.video.includes("youtu.be") ? (
                <iframe
                  className="detail-video-player"
                  src={item.video.replace("watch?v=", "embed/")}
                  title="Content Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <video className="detail-video-player" controls>
                  <source src={item.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          )}

          {/* Detailed Full Text Description */}
          <div className="detail-description-text">
            {item.detail_description.split("\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

        </div>

        {/* Dynamic bottom navigation links matching category views */}
        <div className="detail-footer-nav">
          <Link to={navTarget.path} className="back-to-list-link">
            ← {navTarget.label}
          </Link>
        </div>

      </div>
    </div>
  );
}