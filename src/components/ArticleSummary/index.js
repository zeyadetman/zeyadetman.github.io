import React from "react";
import { Link } from "gatsby";
import styles from "./styles.module.scss";
import GLOBAL_IMAGES from "../../globalImages";

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
      </header>
      <p>{excerpt}</p>
      <small className="article-meta">
        <div>
          <span>{date}</span>
          {"   •   "}
          <span>{`${timeToRead} ${timeToRead > 1 ? "mins" : "min"} read`}</span>
        </div>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURI(
            "Read: " + title
          )}&url=${`https://zeyadetman.github.io/${encodeURI(
            slug
          )}`}&via=zeyadetman`}>
          <img src={GLOBAL_IMAGES.twitterLogo} />
        </a>
      </small>
    </article>
  );
}
