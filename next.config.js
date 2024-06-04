const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  // Use the basePath and assetPrefix settings for GitHub Pages deployment
  basePath: isProd ? '/copilot-workspace-web_next' : '',
  assetPrefix: isProd ? '/copilot-workspace-web_next/' : '',
};
