// @ts-nocheck
import { ApplyPluginsType } from '/Users/zhoufei/project/activity/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/index.html",
    "component": require('@/pages/index').default,
    "title": "无关紧要的页面",
    "exact": true
  },
  {
    "path": "/",
    "component": require('@/pages/index').default,
    "title": "无关紧要的页面",
    "exact": true
  },
  {
    "path": "/lottery.html",
    "component": require('@/pages/lottery').default,
    "title": "转转赚活动，快来参加吧",
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
