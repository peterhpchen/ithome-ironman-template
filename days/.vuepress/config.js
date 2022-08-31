import { defineUserConfig } from 'vuepress';
import { defaultTheme } from 'vuepress';

import { redirectPlugin } from 'vuepress-plugin-redirect';

export default defineUserConfig({
  base: '/ithome-ironman-template/',
  lang: 'zh-TW',
  title: 'ithome-ironman-template',
  description:
    'This is the template for ithome ironman.',
  theme: defaultTheme({
    home: '/01/README.md',
    navbar: [
      {
        text: 'iThome iron man',
        link: 'https://ithelp.ithome.com.tw',
      },
    ],
    repo: 'peterhpchen/ithome-ironman-template',
    sidebar: [
      '/01/README.md',
      '/02/README.md',
      '/03/README.md',
      '/04/README.md',
      '/05/README.md',
      '/06/README.md',
      '/07/README.md',
      '/08/README.md',
      '/09/README.md',
      '/10/README.md',
      '/11/README.md',
      '/12/README.md',
      '/13/README.md',
      '/14/README.md',
      '/15/README.md',
      '/16/README.md',
      '/17/README.md',
      '/18/README.md',
      '/19/README.md',
      '/20/README.md',
      '/21/README.md',
      '/22/README.md',
      '/23/README.md',
      '/24/README.md',
      '/25/README.md',
      '/26/README.md',
      '/27/README.md',
      '/28/README.md',
      '/29/README.md',
      '/30/README.md',
    ],
    sidebarDepth: 0,
    docsDir: 'days',
  }),
  plugins: [
    redirectPlugin({
      config: {
        '/index.html': '/01/',
      },
    }),
  ],
});
