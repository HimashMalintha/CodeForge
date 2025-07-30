import React from "react";

const Header = () => {
  return (
    <header
      style={{
        minHeight: "100vh",
        padding: "4rem 1.5rem 2rem",
        background:
          "radial-gradient(circle at top left, rgba(135, 60, 255, 0.25), transparent 50%), radial-gradient(circle at bottom right, rgba(135, 60, 255, 0.25), transparent 50%), #ffffff",
        fontFamily: "Inter, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      {/* Top Row: Name + Avatar */}
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "4rem",
        }}
      >
        <span
          style={{
            fontSize: "0.95rem",
            fontWeight: "600",
            color: "#fff",
            background: "linear-gradient(90deg, #B37BFF, #873BFF)",
            padding: "0.4rem 1rem",
            borderRadius: "999px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          }}
        >
          Andrew Wills
        </span>

        <img
          src="/assets/image.jpg"
          alt="Andrew Wills"
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Center Content */}
      <div
        style={{
          textAlign: "center",
          maxWidth: "700px",
          width: "100%",
        }}
      >
        <p
          style={{
            fontSize: "0.9rem",
            color: "#555",
            marginBottom: "1.5rem",
          }}
        >
          👋 Hi There, I’m Andrew Wills
        </p>

        <h1
          style={{
            fontSize: "3.2rem",
            fontWeight: "700",
            margin: "0",
            color: "#C89EFF",
            lineHeight: "1.2",
          }}
        >
          A Self Taught
        </h1>
        <h1
          style={{
            fontSize: "3.2rem",
            fontWeight: "800",
            margin: "0",
            color: "#873BFF",
            lineHeight: "1.2",
          }}
        >
          Web Developer
        </h1>

        <p
          style={{
            fontSize: "1rem",
            color: "#5D5D5D",
            marginTop: "2rem",
            marginBottom: "2.5rem",
            maxWidth: "500px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          I’m Andrew Williams, a freelance photographer with a love for natural light and real moments. I specialize web development.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          {/* Download CV Button */}
          <button
            style={{
              background: "transparent",
              border: "2px solid #873BFF",
              borderRadius: "999px",
              padding: "0.5rem 1.3rem",
              color: "#873BFF",
              fontWeight: "500",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              fontSize: "0.9rem",
            }}
          >
            Download CV
            <span
              style={{
                background: "#873BFF",
                color: "#fff",
                width: "24px",
                height: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
              }}
            >
              <img
                src="/assets/download-icon.svg"
                alt="Download"
                style={{ width: "12px", height: "12px" }}
              />
            </span>
          </button>

          {/* Work With Me Button */}
          <button
            style={{
              background: "#873BFF",
              border: "none",
              borderRadius: "999px",
              padding: "0.5rem 1.3rem",
              color: "#fff",
              fontWeight: "500",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              fontSize: "0.9rem",
            }}
          >
            Work with me
            <span
              style={{
                background: "#fff",
                width: "24px",
                height: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
              }}
            >
              <img
                src="/assets/work-icon.svg"
                alt="Work"
                style={{ width: "12px", height: "12px" }}
              />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
