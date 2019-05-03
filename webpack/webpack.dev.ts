import * as webpack from 'webpack';

import { commonPlugins, commonRules, commonConfig } from './webpack.common';

const withHot = !!process.env.WATCH_MODE;

const rules: webpack.Rule[] = commonRules.concat([]);

const plugins: webpack.Plugin[] = commonPlugins
  .concat(withHot ? new webpack.HotModuleReplacementPlugin() : []);

const devConfig: webpack.Configuration = {
  ...commonConfig,
  mode: 'development',
  watch: true,
  entry: [
    'react-hot-loader/patch', // activate HMR for React
    'webpack-dev-server/client?http://localhost:8080',// bundle the client for webpack-dev-server and connect to the provided endpoint
    'webpack/hot/only-dev-server', // bundle the client for hot reloading, only- means to only hot reload for successful updates
    './index.tsx' // the entry point of our app
  ],
  module: {
    rules,
  },
  plugins,
  devtool: 'eval',
  devServer: {
    hot: true,
  },
};

export default devConfig;
