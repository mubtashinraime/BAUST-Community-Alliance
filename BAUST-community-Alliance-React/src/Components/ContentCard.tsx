// import { Link } from "react-router-dom";

// type Props = {
//   item: {
//     id: number;
//     content_about: string;
//     image: string;
//     dateTime: string;
//   };
// };

// export default function ContentCard({ item }: Props) {
//   return (
//     <div className="content-card">
//       <img
//         src={`/src/images/${item.image}`}
//         alt="content"
//         className="card-image"
//       />

//       <Link to={`/content/${item.id}`} className="card-title">
//         {item.content_about}
//       </Link>

//       <p className="card-date">
//         {new Date(item.dateTime)
//           .toLocaleDateString("en-US", {
//             month: "long",
//             day: "numeric",
//             year: "numeric",
//           })
//           .toUpperCase()}
//       </p>
//     </div>
//   );
// }


import { Link } from "react-router-dom";

type Props = {
  item: {
    id: number;
    content_about: string;
    image: string;
    dateTime: string;
    detail_description?: string; // Add description field capability
  };
  variant?: "grid" | "list"; // Configures layout type
};

export default function ContentCard({ item, variant = "grid" }: Props) {
  
  // ==========================================
  // A. BLOG PAGE LIST DESIGN (Isolated layout)
  // ==========================================
  if (variant === "list") {
    return (
      <div className="blog-list-card">
        <img
          src={`/src/images/${item.image}`}
          alt="content"
          className="blog-list-image"
        />

        <div className="blog-list-details">
          <Link to={`/content/${item.id}`} className="blog-list-title">
            {item.content_about}
          </Link>

          {/* Description truncated to exactly 2 lines */}
          <p className="blog-list-desc">
            {item.detail_description || 
              "No additional description provided. Click the link above to view full comprehensive detail about this post content segment."}
          </p>

          <p className="blog-list-date">
            {new Date(item.dateTime)
              .toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })
              .toUpperCase()}
          </p>
        </div>
      </div>
    );
  }

  // ==========================================
  // B. HOMEPAGE DESIGN (Keeps your original)
  // ==========================================
  return (
    <div className="content-card">
      <img
        src={`/src/images/${item.image}`}
        alt="content"
        className="card-image"
      />

      <Link to={`/content/${item.id}`} className="card-title">
        {item.content_about}
      </Link>

      <p className="card-date">
        {new Date(item.dateTime)
          .toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })
          .toUpperCase()}
      </p>
    </div>
  );
}