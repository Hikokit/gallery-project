
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/gallery-project/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/gallery-project"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 732, hash: '8bfd33156cd81623b10b7ef34842cddd49201c73403762d74b873d83df36a8ad', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 969, hash: 'b826688606df2c78203dc21cbd7d141cc66c0fe77332b595a1c49cae929cb106', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 33190, hash: 'daa906c9adba96480ea20b7abafd977d3d0aea8c858f6690b3ba59e9845ce22e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-GFTKXPJL.css': {size: 344, hash: 'JzFYrZXnAo0', text: () => import('./assets-chunks/styles-GFTKXPJL_css.mjs').then(m => m.default)}
  },
};
