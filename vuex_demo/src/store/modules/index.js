// webpack内置的，获取当前路径下的文件列表 第二个参数表示是否查看子节点
const files = require.context(".", true, /\.js$/);

const modules = {};
files.keys().forEach((file) => {
  // ./cart/getters.js 把前面的./ 和后面的.js替换掉
  const path = file.replace(/\.\/|\.js/g, "");
  if (path === "index") return;
  let [namespace, type] = path.split("/");
  if (!modules[namespace]) {
    modules[namespace] = {
      namespaced: true,
    };
  }
  modules[namespace][type] = files(file).default;
});

export default modules;
