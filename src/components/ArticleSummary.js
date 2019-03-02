import React from "react";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ArticleSummary({
  excerpt,
  title,
  date,
  id,
  timeToRead
}) {
  return (
    <article
      style={{
        marginBottom: 55,
        width: "70%",
        marginLeft: "auto",
        marginRight: "auto",
        minWidth: 300
      }}
      className="article"
    >
      <header>
        <h3
          style={{
            fontSize: "1.7em",
            margin: "10px 0"
          }}
        >
          <a
            href=""
            onClick={() => {
              console.log(id);
            }}
          >
            {title}
          </a>{" "}
          <small
            style={{
              fontSize: 12
            }}
          >
            <FontAwesomeIcon icon={faClock} />{" "}
            {`${timeToRead} ${timeToRead > 1 ? "mins" : "min"} read`}
          </small>
        </h3>
        <small>
          <span>{date}</span>{" "}
        </small>
      </header>
      <p>{excerpt}</p>
    </article>
  );
}
