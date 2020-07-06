// @ts-nocheck
import { Plugin } from '/Users/zhoufei/private_project/cup-cli-template/node_modules/@umijs/runtime';

const plugin = new Plugin({
  validKeys: ['patchRoutes','rootContainer','render','onRouteChange','getInitialState','request',],
});
plugin.register({
  apply: require('/Users/zhoufei/private_project/cup-cli-template/src/app.ts'),
  path: '/Users/zhoufei/private_project/cup-cli-template/src/app.ts',
});
plugin.register({
  apply: require('/Users/zhoufei/private_project/cup-cli-template/node_modules/umi-plugin-antd-icon-config/lib/app.js'),
  path: '/Users/zhoufei/private_project/cup-cli-template/node_modules/umi-plugin-antd-icon-config/lib/app.js',
});
plugin.register({
  apply: require('../plugin-initial-state/runtime'),
  path: '../plugin-initial-state/runtime',
});
plugin.register({
  apply: require('../plugin-model/runtime'),
  path: '../plugin-model/runtime',
});

export { plugin };
