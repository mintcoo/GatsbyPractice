import { graphql, useStaticQuery } from "gatsby";
import React from "react";

interface ISeoProps {
  title: string;
}

function Seo({ title }: ISeoProps) {
  const data = useStaticQuery<Queries.SeoDataQuery>(graphql`
    query SeoData {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  // GraphQL을 이용해 유저가 도착전 data가져오기 << 로딩 없음
  // Queries.SeoQueryQuery << 쿼리문을 개츠비가 자동으로 타입 만들어줌 gastby-types.d.ts에서 제일 밑에
  // 타입이 있으니 이제 하위항복 잘 탐색가능 data.site?.siteMetadata?.title 이렇게
  const siteTitle = data.site?.siteMetadata?.title;
  // console.log(data.site?.siteMetadata?.title);
  return (
    <title>
      {title} | {siteTitle}
    </title>
  );
}

export default Seo;
