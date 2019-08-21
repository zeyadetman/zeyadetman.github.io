import React from "react";
import { Link } from "gatsby";
import styles from "./styles.module.scss";

export default function ArticleSummary({
  excerpt,
  title,
  date,
  id,
  timeToRead,
  slug
}) {
  return (
    <article className={`${styles.articleSummary} article`} key={id}>
      <header>
        <h3>
          <Link to={`/${slug}`}>{title}</Link>{" "}
        </h3>
        <small className="article-meta">
          <span>{date}</span>
          {"   •   "}
          <span>{`${timeToRead} ${timeToRead > 1 ? "mins" : "min"} read`}</span>
        </small>
      </header>
      <p>{excerpt}</p>
    </article>
  );
}
