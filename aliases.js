const aliases = {
  "@": "src",
  "@components": "src/components",
  "@features": "src/features",
  "@infra": "src/infrastructure",
  "@layout": "src/layout",
  "@navigation": "src/navigation",
  "@wrappers": "src/wrappers",
};
export default aliases;

// Change jsconfig.json too when changing aliases

// const paths = { "@/*": ["src/*"] };
// Object.keys(aliases).forEach((k) => {
//   paths[`${k}/*`] = [`${aliases[k]}/*`];
// });
// console.log(paths);
