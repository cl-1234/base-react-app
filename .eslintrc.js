module.exports = {
  extends: ['react-app', 'react-app/jest', 'prettier'],
  env: {},
  settings: {},
  globals: {},
  parserOptions: {},
  plugins: ['prettier'],
  rules: {
    // 缩进强制为 2 个空格，视情况开启
    // 在使用switch/case和三元运算多层嵌套时，eslint的检测规则和prettier规则会冲突 
    // indent: ['error', 2],

    // https://zh-hans.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    eqeqeq: 'error',
  },
  // 比如，如果同一个目录下的文件需要有不同的配置。因此，你可以在配置中使用 overrides 键
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        // 强制要求hooks的deps依赖诚实
        'react-hooks/exhaustive-deps': 'error',
        'no-unused-vars': 'off',
        // 暂时关闭 'Legend' is defined but never used 等多种情况
        '@typescript-eslint/no-unused-vars': [
          'off',
          {
            args: 'none',
            ignoreRestSiblings: true,
            caughtErrors: 'all',
          },
        ],
      },
    },
  ],
};
