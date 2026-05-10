import React from "react";

export default function LastUpdated({ date }) {
  const formatted = new Date(date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="themesflat-container">
      <div
        className="last-updated"
        style={{
          textAlign: "center",
          padding: "12px 0 28px",
          fontSize: 13,
          color: "#5a5874",
          letterSpacing: "0.02em",
        }}
      >
        <time dateTime={date}>Last updated: {formatted}</time>
      </div>
    </div>
  );
}
