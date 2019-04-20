import React from "react";
import { Link } from "gatsby";

const TabCard = ({ page, info }) => (
  <div
    className="card"
    style={{
      padding: "0 1.5em"
    }}
  >
    <h3 style={{ textAlign: "center" }}>
      {page.path ? (
        <Link to={page.path}>{page.title}</Link>
      ) : (
        <a href="javascript:void(0);">{page.title}</a>
      )}
    </h3>
    {info}
  </div>
);

const tabs = [
  {
    page: { path: "/projects", title: "Side Projects & Tools" },
    info:
      "I'm building some cool stuff to learn new things, and make the internet a better place."
  },
  {
    page: { path: "/blog", title: "Writing" },
    info: (
      <p>
        I'm Writing from time to time, mainly programming and a little of
        mathematics. You also can follow me on{" "}
        <a href="https://dev.to/zeyadetman">dev.to</a>
      </p>
    )
  },
  {
    page: { title: "Follow Me" },
    info: (
      <p>
        You can follow me on <a href="https://github.com/zeyadetman">GitHub</a>
        {", "}
        <a href="https://twitter.com/zeyadetman">Twitter</a>
        {", "}
        <a href="https://www.facebook.com/zeyadetman">Facebook</a>
        {", "}
        <a href="https://www.linkedin.com/in/zeyadetman">LinkedIn</a>
        {", "}
        <a href="https://stackoverflow.com/users/5721245/zeyad-etman">
          Stack Overflow
        </a>
        {", "}
        <a href="https://www.quora.com/profile/Zeyad-Etman">Quora</a>
        {", "}
        <a href="mailto:zeyadetman@gmail.com">Email</a>.
      </p>
    )
  }
];
export default function SeeMore() {
  return (
    <div
      style={{
        marginTop: "15px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gridGap: "15px"
      }}
    >
      {tabs.map(({ page, info }) => (
        <TabCard page={page} key={page.title} info={info} />
      ))}
    </div>
  );
}
