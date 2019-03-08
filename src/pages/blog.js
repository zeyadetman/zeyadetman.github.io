import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { StaticQuery, graphql } from "gatsby";
import ArticleSummary from "../components/ArticleSummary";
import { TwitterFollowButton } from "react-twitter-embed";
import "../styles/blogpost.css";

export default function blog() {
  return (
    <Layout>
      <SEO title="Blog" keywords={[`zeyadetman`, `blog`, "technical"]} />
      <StaticQuery
        query={graphql`
          query retrievePosts {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              edges {
                node {
                  id
                  excerpt
                  frontmatter {
                    title
                    date(formatString: "MMMM DD, YYYY")
                  }
                  timeToRead
                  fields {
                    slug
                  }
                  wordCount {
                    words
                  }
                }
              }
            }
          }
        `}
        render={({ allMarkdownRemark: { edges: posts } }) => {
          return (
            <>
              <h1
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                Writings & Thoughts
                <TwitterFollowButton screenName={"zeyadetman"} />
              </h1>
              {posts.map(
                ({ node }) =>
                  !node.fields.slug.includes("/ar/") && (
                    <ArticleSummary
                      title={node.frontmatter.title}
                      date={node.frontmatter.date}
                      id={node.id}
                      timeToRead={node.timeToRead}
                      excerpt={node.excerpt}
                      key={node.id}
                      slug={node.fields.slug}
                    />
                  )
              )}
            </>
          );
        }}
      />
    </Layout>
  );
}
