import React from "react";

interface ISeoProps {
  title: string;
}

function Seo({ title }: ISeoProps) {
  return <title>{title} | 개츠비!</title>;
}

export default Seo;
