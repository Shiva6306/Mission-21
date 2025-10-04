import React from "react";
import { Link } from "react-router-dom";

export default function Themes3() {
  const cardStyle = {
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
    padding: "0",
    width: "220px",
    height: "300px",
    display: "block",
    cursor: "pointer",
    userSelect: "none",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    overflow: "hidden"
  };

  const cardLargeStyle = {
    ...cardStyle,
    width: "280px",
    height: "380px",
    fontSize: "1.1rem",
    fontWeight: "600"
  };

  const cardTiltLeftStyle = {
    ...cardLargeStyle
  };

  const cardTiltRightStyle = {
    ...cardLargeStyle
  };

  return (
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
      </video>

      {/* Overlay */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0, 0, 0, 0.4)", zIndex: 0 }}></div>

      {/* Image of 21 clicks at top with padding */}
      <div style={{ paddingBottom: "2rem", position: "relative", zIndex: 10 }}>
        <img
          src="/KNO.png"
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
        {/* Card 1 */}
        <Link to="/userinput" style={cardTiltLeftStyle}>
          <img src="/Z3-1.png" alt="Theme 3 Card 1" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }} />
        </Link>

        {/* Card 2 */}
        <Link to="/userinput" style={cardStyle}>
          <img src="/Z3-2.png" alt="Theme 3 Card 2" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }} />
        </Link>

        {/* Card 3 */}
        <Link to="/userinput" style={cardStyle}>
          <img src="/Z3-3.png" alt="Theme 3 Card 3" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }} />
        </Link>

        {/* Card 4 */}
        <Link to="/userinput" style={cardTiltRightStyle}>
          <img src="/Z3-4.png" alt="Theme 3 Card 4" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }} />
        </Link>
      </div>
    </div>
  );
}