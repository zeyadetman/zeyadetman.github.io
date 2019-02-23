import React from "react";

export default function Tag({ style, title, url, type, color }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...style
      }}
    >
      <span
        style={{
          background: color,
          padding: "2px 5px 1px 5px",
          fontSize: 12,
          textTransform: "capitalize",
          display: "inline-block",
          verticalAlign: "text-bottom",
          color: "#0d0d0d"
        }}
      >
        {type}
      </span>
      {title && url && (
        <a href={url} style={{ marginLeft: 5 }}>
          {title}
        </a>
      )}
    </div>
  );
}
