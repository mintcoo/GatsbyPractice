import React from "react";
import Layout from "../../Components/Layout";
import { HeadFC, Link, PageProps, graphql } from "gatsby";
import Seo from "../../Components/Seo";

function Blog({ data }: PageProps<Queries.BlogPostQuery>) {
  // console.log(data);
  // 아래에서 query로 받아온 데이터가 담겨있음
  return (
    <Layout title="Blog">
      <ul>
        {data.allMdx.nodes.map((file, index) => (
          <li key={index}>
            <Link to={`/blog/${file.frontmatter?.slug}`}>
              <div>{file.frontmatter?.title}</div>
              <div>{file.excerpt}</div>
              <div className="text-2xl">{file.frontmatter?.date}</div>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default Blog;

export const query = graphql`
  query BlogPost {
    allMdx {
      nodes {
        frontmatter {
          category
          date
          title
          slug
        }
        excerpt(pruneLength: 55)
      }
    }
  }
`;
// 이렇게 쓰는건 gatsby의 문법이다

export const Head: HeadFC = () => <Seo title="Blog" />;
