// @ts-nocheck
import { ApplyPluginsType } from '/Users/zhoufei/private_project/cup-cli-template/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/index.html",
    "component": require('@/pages/index').default,
    "title": "无关紧要的页面",
    "exact": true
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
