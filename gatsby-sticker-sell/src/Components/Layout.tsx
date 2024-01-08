import { Link } from "gatsby";
import React from "react";

interface ILayoutProps {
  children: any;
  title: string;
}

function Layout({ children, title }: ILayoutProps) {
  return (
    <div>
      <nav>
        <ul className="text-4xl font-bold text-violet-600">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <main>
        <div className="text-6xl">{title}</div>
        {children}
      </main>
    </div>
  );
}

export default Layout;
