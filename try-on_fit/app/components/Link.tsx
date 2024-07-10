import React from "react";
interface Link {
  href: string;
  children: React.ReactNode;
}

const Link: React.FC<Link> = ({ href, children }) => {
  return <a href={href}>{children}</a>;
};
