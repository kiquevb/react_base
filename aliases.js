const aliases = {
  "@components": "src/components",
  "@resources": "src/resources",
  "@infra": "src/infrastructure",
  "@layout": "src/layout",
  "@navigation": "src/navigation",
  "@wrappers": "src/wrappers",
  "@": "src",
};
export default aliases;

// Change jsconfig.json too when changing aliases

// const paths = { "@/*": ["src/*"] };
// Object.keys(aliases).forEach((k) => {
//   paths[`${k}/*`] = [`${aliases[k]}/*`];
// });
// console.log(paths);
