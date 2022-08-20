// 参数1:当前文件的路径，参数2:是否读取子元素，参数3:获取什么类型的文件
// 这个方法是webpack的一个api,在vue的官方示例中，注册全局组件的时候也用这种方式
const files = require.context(".", true, /\.js$/);

const modules = {};
files.keys().forEach((key) => {
  // ./cart/actions.js 把前面的./和后面js替换掉
  const path = key.replace(/\.\/|\.js$/, "");
  if (path === "index") return;
  let [namespace, type] = path.split("/");
  if (!modules[namespace]) {
    modules[namespace] = { namespaced: true };
  }
  modules[namespace][type] = files(key).default;
});

export default modules;
