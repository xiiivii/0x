import React from 'react';

import { ButtonBase } from 'src/components/ButtonBase';
import { VisuallyHidden } from 'src/components/VisuallyHidden';

/**
 * Note:
 * There's a refresh button because I didn't have time to implement pull-to-refresh
 * behavior for iOS devices, which have no other way to refresh page / data
 * in PWA mode expect for an extra button ¯\_(ツ)_/¯
 */
export const RefreshButton = (props: React.ComponentProps<typeof ButtonBase>) => {
  return (
    <ButtonBase {...props}>
      <VisuallyHidden>Refresh data</VisuallyHidden>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" aria-hidden={true}>
        <path
          fill="currentColor"
          d="M15 3c-2.97 0-5.7 1.08-7.8 2.88a1 1 0 1 0 1.3 1.51A9.99 9.99 0 0 1 24.96 14l-2.95.01 4 6 4-6h-3.05C26.44 7.85 21.28 3 15 3zM4 10l-4 6h3.05a12.01 12.01 0 0 0 19.74 8.13 1 1 0 1 0-1.3-1.52A9.99 9.99 0 0 1 5.04 16L8 15.99l-4-6z"
        />
      </svg>
    </ButtonBase>
  );
};
