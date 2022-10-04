module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@images': ['./src/assets/images'],
          '@components':['./src/components'],
          '@screens':['./src/screens'],
          '@themes':['./src/theme'],
          '@fonts':['./src/assets/fonts'],
        },
      },
    ],
  ],
};