import React from "react";

export const HomeLayout = ({ children, className = "" }) => {
  return <div className={`w-full  ${className}`}>{children}</div>;
};
