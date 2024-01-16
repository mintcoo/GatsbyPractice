import React from "react";
import Layout from "../../Components/Layout";
import { graphql } from "gatsby";
import Seo from "../../Components/Seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

interface IBlogPost {
  data: Queries.BlogPostDetailQuery;
  children: any;
}

function BlogPost({ data, children }: IBlogPost) {
  // children에는 내가 mdx파일에 막 적은 내용이 html로 담겨있다
  // 그래서 마크다운문법이 먹히지만 나는 tailwind깔아놔서 그냥 글만나옴
  console.log(data, "zz");
  const image = getImage(
    data.mdx?.frontmatter?.headerImage?.childImageSharp?.gatsbyImageData!
  );
  // 여기는 이미지 받아오는것 이미지객체 생성
  return (
    <Layout title="BlogPost">
      <GatsbyImage image={image as any} alt={data.mdx?.frontmatter?.title!} />
      <div className="text-2xl font-bold text-teal-700">{children}</div>
    </Layout>
  );
}

export const query = graphql`
  query BlogPostDetail($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      body
      frontmatter {
        category
        date
        slug
        title
        headerImage {
          childImageSharp {
            gatsbyImageData(width: 800, placeholder: TRACED_SVG)
          }
        }
      }
    }
  }
`;

export default BlogPost;

export const Head = ({ data }: IBlogPost) => (
  <Seo title={data.mdx?.frontmatter?.title!} />
);
