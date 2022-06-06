import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'comment-movie',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      baseUrl: 'https://stenciljs.com/',
      prerenderConfig: './prerender.config.ts'
    },
  ],
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/scss/_global.scss'
      ]
    })
  ],
};
