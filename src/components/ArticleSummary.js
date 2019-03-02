import React from "react";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";

export default function ArticleSummary({
  excerpt,
  title,
  date,
  id,
  timeToRead,
  slug
}) {
  return (
    <article
      style={{
        marginBottom: 55,
        width: "70%",
        marginLeft: "auto",
        marginRight: "auto",
        minWidth: 320
      }}
      className="article-summary article"
    >
      <header>
        <h3
          style={{
            fontSize: "1.6em",
            margin: "10px 0"
          }}
        >
          <Link to={slug}>{title}</Link>{" "}
        </h3>
        <small>
          <span>{date}</span>
          {"   •   "}
          <span>
            <FontAwesomeIcon icon={faClock} />{" "}
            {`${timeToRead} ${timeToRead > 1 ? "mins" : "min"} read`}
          </span>
        </small>
      </header>
      <p>{excerpt}</p>
    </article>
  );
}
