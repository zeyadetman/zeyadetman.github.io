import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { StaticQuery, graphql } from "gatsby";
import ArticleSummary from "../components/ArticleSummary/index";
import { TwitterFollowButton } from "react-twitter-embed";
import "../styles/blogpost.css";
import styles from "../styles/blog.module.scss";

export default function blog({ location: { pathname } }) {
  return (
    <Layout currentPath={pathname}>
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
              <h1 className={styles.blogPageH1}>
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
