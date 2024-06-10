import whyDidYouRender from '@welldone-software/why-did-you-render';
import React from 'react';

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
}
