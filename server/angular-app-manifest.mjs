
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/website/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/website"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 440, hash: 'd024283d40ce82f589be48985609b407a395420efa7c77ce7ca9952ac2c29454', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 953, hash: '0b2a25a3ef8eb1af05ce74a51408e25abf100a6c5469ad1f08618309b5325aaa', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21570, hash: '777e2b905a640f700f92e7ff0c94554bc54d3a6a696ef650034a2db9e9949899', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
