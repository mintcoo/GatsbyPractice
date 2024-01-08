import * as React from "react";
import { HeadFC, type PageProps } from "gatsby";
import Layout from "../Components/Layout";
import Seo from "../Components/Seo";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Welcome Gatsby">
      {/* 이렇게 레이아웃 안에 넣는건 자동으로 레이아웃 페이지의 children으로 들어감 */}
      <div></div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo title="Home Page" />;
