import React from 'react';

export const AccessibilityStyles = () => (
  <>
    <style>
      {`
        @media (prefers-reduced-motion: reduce) {
          *, ::before, ::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}
    </style>
    <style>
      {`
        @media (forced-colors: active) {
          :root {
            --primary-color: CanvasText;
            --background-color: Canvas;
          }
        }
      `}
    </style>
  </>
);