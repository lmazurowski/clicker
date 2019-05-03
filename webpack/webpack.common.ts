import * as path from 'path';
import { RuleSetRule, Configuration, Plugin } from 'webpack';
import { CheckerPlugin } from 'awesome-typescript-loader';
import * as ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

export const commonPlugins: Plugin[] = [
  new CheckerPlugin(),
  new ForkTsCheckerWebpackPlugin({
    checkSyntacticErrors: true,
    async: false,
    tsconfig: path.resolve('./tsconfig.json'),
    tslint: path.resolve('./tslint.json'),
  }),
  new HtmlWebpackPlugin({template: 'index.html',}),
];

export const commonRules: RuleSetRule[] = [
  {
    test: /\.(ts|tsx)$/,
    use: [ 'babel-loader', 'awesome-typescript-loader' ],
  },
];

export const commonConfig: Configuration = {
  target: 'web',
  context: path.resolve(__dirname, '..', 'src'),
  resolve: {
    modules: [ 'node_modules', 'src' ],
    extensions: [ '.js', '.jsx', '.ts', '.tsx' ],
  },
  optimization: {
    minimize: false,
  },
};

