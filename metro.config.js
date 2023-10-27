const { getDefaultConfig } = require("metro-config");

module.exports = async () => {
  const defaultConfig = await getDefaultConfig();
  const { resolver } = defaultConfig;
  const { sourceExts, assetExts } = resolver;

  const updateSource = [...sourceExts, 'jsx', 'js', 'ts', 'tsx'];

  return {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== "svg"),
      sourceExts: [...updateSource, "svg"],
    },
  };
};
