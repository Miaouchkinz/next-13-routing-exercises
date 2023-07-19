import Link from 'next/link';
import React from 'react';

function ScreenSaverIndexPage() {
  return (
    <main className="screen-saver-wrapper">
      <h2>Choose your screen saver's logo color:</h2>
      <ul>
        <li>
          <Link href="/exercises/01-screensaver/LightCoral">
            LightCoral
          </Link>
        </li>
        <li>
          <Link href="/exercises/01-screensaver/LightSalmon">
            LightSalmon
          </Link>
        </li>
        <li>
          <Link href="/exercises/01-screensaver/MediumPurple">
            MediumPurple
          </Link>
        </li>
        <li>
          <Link href="/exercises/01-screensaver/Plum">Plum</Link>
        </li>
        <li>
          <Link href="/exercises/01-screensaver/Turquoise">
            Turquoise
          </Link>
        </li>
      </ul>
    </main>
  );
}

export default ScreenSaverIndexPage;
