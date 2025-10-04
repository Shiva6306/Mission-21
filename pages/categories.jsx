import React from "react";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "3rem",
          boxSizing: "border-box",
        }}
      >
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -10,
          }}
        >
          <source src="/bg video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Image of 21 clicks at top with padding */}
        <div style={{ paddingBottom: "2rem" }}>
          <img
            src="/21 clicks.png"
            alt="21 Clicks"
            style={{ maxWidth: "300px", width: "100%", height: "auto", userSelect: "none" }}
          />
        </div>

        {/* Cards Container */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
            padding: "0 1rem",
            width: "100%",
            maxWidth: "1200px",
            flexGrow: 1,
          }}
        >
          {/* Card 1 - Theme 1 */}
          <Link to="/themes/1" className="card card-large card-tilt-inward-left">
            <img src="/Z1.png" alt="Theme 1" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }} />
          </Link>

          {/* Card 2 - Theme 2 */}
          <Link to="/themes/2" className="card card-normal">
            <img src="/Z2.png" alt="Theme 2" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }} />
          </Link>

          {/* Card 3 - Theme 3 */}
          <Link to="/themes/3" className="card card-normal">
            <img src="/Z3.png" alt="Theme 3" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }} />
          </Link>

          {/* Card 4 - Theme 4 */}
          <Link to="/themes/4" className="card card-large card-tilt-inward-right">
            <img src="/Z4.png" alt="Theme 4" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }} />
          </Link>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .card {
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
          padding: 0;
          width: 220px;
          height: 300px;
          display: block;
          cursor: pointer;
          user-select: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          text-decoration: none;
          overflow: hidden;
        }

        .card-large {
          width: 280px;
          height: 380px;
          font-size: 1.1rem;
          font-weight: 600;
        }

        /* Remove tilt effects */
        .card-tilt-inward-left {
          transform: none;
        }

        .card-tilt-inward-right {
          transform: none;
        }

        /* Normal cards no tilt */
        .card-normal {
          transform: none;
        }

        /* Hover effect: subtle pull up and shadow */
        .card-tilt-inward-left:hover {
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);
          transform: translateY(-15px);
          z-index: 20;
        }

        .card-tilt-inward-right:hover {
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);
          transform: translateY(-15px);
          z-index: 20;
        }

        .card-normal:hover {
          transform: translateY(-10px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
          z-index: 15;
        }

        /* Pull animation for left tilted card */
        @keyframes pullInLeft {
          0% {
            transform: rotate(8deg) translateY(0);
          }
          100% {
            transform: rotate(8deg) translateY(-15px);
          }
        }

        /* Pull animation for right tilted card */
        @keyframes pullInRight {
          0% {
            transform: rotate(-8deg) translateY(0);
          }
          100% {
            transform: rotate(-8deg) translateY(-15px);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .card-large {
            width: 220px;
            height: 300px;
          }
          .card {
            width: 180px;
            height: 250px;
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          div[style*="display: flex"] {
            flex-direction: column;
            gap: 1.5rem;
          }
          .card-large,
          .card-normal {
            width: 90vw;
            height: auto;
            transform: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
}
