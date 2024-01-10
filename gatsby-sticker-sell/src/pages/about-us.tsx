import React from "react";
import Layout from "../Components/Layout";
import { HeadFC, graphql } from "gatsby";
import Seo from "../Components/Seo";

function AboutUs() {
  return (
    <Layout title="About Us">
      <div> 어서오세염 전자상거래 사이트 </div>
    </Layout>
  );
}

export default AboutUs;

export const Head: HeadFC = () => <Seo title="About Us" />;
