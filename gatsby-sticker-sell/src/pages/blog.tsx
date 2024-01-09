import React from "react";
import Layout from "../Components/Layout";
import { HeadFC, PageProps, graphql } from "gatsby";
import Seo from "../Components/Seo";

function Blog({ data }: PageProps<Queries.BlogTitlesQuery>) {
  // console.log(data);
  // 아래에서 query로 받아온 데이터가 담겨있음
  return (
    <Layout title="Blog">
      <ul>
        {data.allFile.nodes.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </Layout>
  );
}

export default Blog;

export const query = graphql`
  query BlogTitles {
    allFile {
      nodes {
        name
      }
    }
  }
`;
// 이렇게 쓰는건 gatsby의 문법이다

export const Head: HeadFC = () => <Seo title="Blog" />;
