import React, { useEffect } from "react";
import { Link } from "gatsby";

const TabCard = ({ page, info }) => (
  <div
    className="card"
    style={{
      ...(page.title !== "Subscribe"
        ? {
            padding: "15px 1.5em",
          }
        : { padding: "15px 0" }),
    }}
  >
    <h3 style={{ textAlign: "center", marginTop: 0 }}>
      {page.path ? (
        <Link to={page.path}>{page.title}</Link>
      ) : (
        <a href={page.url}>{page.title}</a>
      )}
    </h3>
    {info}
  </div>
);

const tabs = [
  {
    page: { path: "/blog", title: "Writing" },
    info: (
      <p>
        I'm Writing from time to time, mainly programming and a little of
        mathematics. You also can follow me on{" "}
        <a href="https://dev.to/zeyadetman">dev.to</a>
      </p>
    ),
  },
  {
    page: { title: "Follow Me" },
    info: (
      <>
        {" "}
        <div
          class="g-ytsubscribe"
          data-channel="zeyadetman"
          data-layout="full"
          data-count="default"
        ></div>
        <p>
          You can follow me on{" "}
          <a href="https://github.com/zeyadetman">GitHub</a>
          {", "}
          <a href="https://twitter.com/zeyadetman">Twitter</a>
          {", "}
          <a href="https://youtube.com/c/zeyadetman">YouTube</a>
          {", "}
          <a href="https://www.linkedin.com/in/zeyadetman">LinkedIn</a>
          {", "}
          <a href="https://www.quora.com/profile/Zeyad-Etman">Quora</a>
        </p>
      </>
    ),
  },
  {
    page: { title: "Subscribe" },
    info: (
      <iframe
        src="https://zeyadetman.substack.com/embed"
        width="fit-content"
        height="320"
        frameborder="0"
        scrolling="no"
      ></iframe>
    ),
  },
];
export default function SeeMore() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      style={{
        marginTop: "15px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gridGap: "15px",
      }}
    >
      {tabs.map(({ page, info }) => (
        <TabCard page={page} key={page.title} info={info} />
      ))}
    </div>
  );
}
