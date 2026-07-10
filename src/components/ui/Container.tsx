import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Shared page-width container used by every section and the navbar.
 * Max-width: 1520px, horizontal padding scales from 24px → 40px.
 */
export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`max-w-[1800px] mx-auto px-6 md:px-10 xl:px-16 w-full ${className}`}>
      {children}
    </div>
  );
}
