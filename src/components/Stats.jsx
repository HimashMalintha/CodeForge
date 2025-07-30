import React from "react";

const Stats = () => (
  <section
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "3rem 6rem",
      background: "linear-gradient(to right, #ffffff 70%, rgba(212,186,255,0.3))",
      fontFamily: "Inter, sans-serif",
      flexWrap: "wrap",
      gap: "8rem", // Spacing between stat blocks
    }}
  >
    <StatItem number="5+" label="Years of Experience" />
    <StatItem number="80+" label="Projects Completed" />
    <StatItem number="100+" label="Happy Clients" />
    <StatItem number="20+" label="Award Winnings" />
  </section>
);

const StatItem = ({ number, label }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      minWidth: "190px",
      fontFamily: "Inter, sans-serif",
    }}
  >
    {/* Number on the left */}
    <div
      style={{
        fontSize: "40px",
        fontWeight: "700",
        color: "#5E01D6",
        lineHeight: "1",
      }}
    >
      {number}
    </div>

    {/* Bold Label on the right */}
    <div
      style={{
        fontSize: "16px",
        fontWeight: "700", // ⬅️ Bold label
        color: "#333",
        lineHeight: "1.4",
        textAlign: "left",
      }}
    >
      {label}
    </div>
  </div>
);

export default Stats;
