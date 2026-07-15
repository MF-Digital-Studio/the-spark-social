"use client";

import { ReactLenis } from 'lenis/react';

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis root options={{ lerp: 0.15, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
