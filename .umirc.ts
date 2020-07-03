import { defineConfig } from 'umi';

export default defineConfig({
  base: '/',
  publicPath: './',
  exportStatic: {
    htmlSuffix: true
  },
  define: {
    API_ENV: process.env.API_ENV
  },
  routes: [
    { path: '/', component: '@/pages/index', title: '无关紧要的页面' },
  ],
  proxy: {
    '/20/turn.php': {
      'target': 'https://cellapi.youzhuan.com',
      'changeOrigin': true,
    },
  },
  alias: {
    '@styles': '@/styles',
    '@pages': '@/pages',
    '@components': '@/components',
    '@common': '@/common',
    '@utils': '@/utils',
    '@images': '@/assets/images',
    '@layout': '@/layout',
  },
  extraPostCSSPlugins: [
    require('postcss-flexbugs-fixes'),
    require('postcss-px-to-viewport')({
      viewportWidth: 375, // 视窗的宽度，对应的是我们设计稿的宽度，一般是375
      unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
      selectorBlackList: [], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: false, // 允许在媒体查询中转换`px`
    }),
  ],
  nodeModulesTransform: {
    type: 'none',
  },
});