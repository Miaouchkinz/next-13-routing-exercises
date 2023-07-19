import './styles.css';

import React from 'react';

function ScreenSaverLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default ScreenSaverLayout;
