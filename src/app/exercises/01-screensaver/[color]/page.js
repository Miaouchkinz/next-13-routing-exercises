import React from 'react';
import ScreenSaver from '../../../../components/ScreenSaver';

/**
 * Acceptance Criteria:
 * - When the user visits a route like /exercises/01-screensaver/hotpink,
 *   a <ScreenSaver> component should be rendered using the color specified (hotpink).
 * - The /exercises/01-screensaver route should be updated so that it includes a list
 *   of links, so that users can choose a color. Feel free to pick your favourite named HTML colors!
 * - All 147 named colors should be supported (not only the 3-4 colors that are explicitly linked to).
 * */
function ScreenSaverExercise({ params }) {
  return (
    <main className="screen-saver-wrapper">
      <ScreenSaver color={params.color} />
    </main>
  );
}

export default ScreenSaverExercise;
