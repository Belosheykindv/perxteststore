export const entry = './src/index.tsx'
export const resolve = {
  extensions: ['.tsx'],
}
export const module = {
  rules: [
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    },
    {
      test: /\.svg$/,
      use: ['file-loader'],
    },
    {
      test: /\.module\.css$/i,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
          },
        },
      ],
    },
    {
      test: /\.module.s[ac]ss$/i,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
        'sass-loader',
      ],
    },
  ],
}
export const output = {
  filename: 'bundle.js',
  path: path.resolve(__dirname, 'dist'),
}
