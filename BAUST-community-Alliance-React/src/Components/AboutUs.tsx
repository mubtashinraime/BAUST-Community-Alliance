import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-page-wrapper">
      <div className="about-page-container">
        
        {/* Main Center Header */}
        <h1 className="about-main-title">About-Us</h1>
        
        {/* Introductory Sub-paragraphs */}
        <div className="about-intro-section">
          <p>
            Welcome to our platform — a space built to connect, inspire, and empower students of BAUST.
          </p>
          <p>
            Our mission is simple: to bridge the gap between current students and alumni, while creating a hub for knowledge sharing and innovation.
          </p>
        </div>

        {/* Core Content Blocks */}
        <div className="about-content-body">
          
          <div className="about-feature-block">
            <h2 className="about-block-heading">
              <span className="about-emoji">🎓</span> Stories That Inspire
            </h2>
            <p className="about-block-text">
              We highlight the journeys of our graduated students who are now working across different organizations. 
              Their experiences, career paths, and insights are shared to guide and motivate current students. 
              Each story provides valuable information and, when appropriate, a way to connect directly.
            </p>
          </div>

          <div className="about-feature-block">
            <h2 className="about-block-heading">
              <span className="about-emoji">✍️</span> A Voice for Creativity
            </h2>
            <p className="about-block-text">
              Our blog section is dedicated to creative and thoughtful content from BAUST students. 
              Whether it's ideas, experiences, or opinions — this is a place where voices are heard and creativity thrives.
            </p>
          </div>

          <div className="about-feature-block">
            <h2 className="about-block-heading">
              <span className="about-emoji">📚</span> Knowledge & Innovation
            </h2>
            <p className="about-block-text">
              We also provide a collection of publications including research papers, thesis work, and innovative projects. 
              This section is designed to support learning, research, and academic growth.
            </p>
          </div>

          <div className="about-feature-block">
            <h2 className="about-block-heading">
              <span className="about-emoji">🤝</span> Our Vision
            </h2>
            <p className="about-block-text">
              We aim to build a strong academic and professional community where knowledge flows freely, 
              connections are meaningful, and students are inspired to achieve more.
            </p>
          </div>

        </div>

        {/* Bottom Banner Typography */}
        <div className="about-footer-banner">
          <h2>Built by students, for students.</h2>
        </div>

      </div>
    </div>
  );
}