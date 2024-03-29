# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)


- 创建项目 npm init @vitejs/app 
- npm install 
- npm run dev

- 安装vue-router 和 vuex  npm install vue-router@next vuex@next


- index.html 是项目入口 
- package.json 是管理项目依赖和配置文件
- public目录防止静态资源
- vite.config.js 就是和vite 相关所有工程化配置
- src 是工作的重点 大部分代码会在src 目录下管理和书写


- api 数据请求
- assets 静态资源
- componens 组件
- pages 页面
- router 路由配置
- store vuex 数据
- utils 工具函数

- 因为ref 和 computed 等功能都可以从vue 中全局引入 所以我们就可以把组件进行任意颗粒度的拆分和组合 这样就大大提高了代码的可维护性和复用性
- 如果在scroped 内部想写全局样式 可以用:global 来标记

- vuex有一个持久化存储的插件persistedstate可以直接存储在localstorage中

- ajax让数据的获取不需要刷新页面 spa 应用让路由跳转也不需要刷新页面

- vux 的实现
- vue-router 实现

```
// 统计页面中一共有多少html标签
new Set([...document.querySelectorAll('*')].map(n=>n.nodeName)).size
// 统计页面出现次数最多的3中html标签
Object.entries([...document.querySelectorAll('*')].map(node => node.node.nodeName)).recude((r, n) => { r[n] = r[n] ? r[n] + 1 : 1; return r }, {}).sort((a,b) => b[1] - a[1]).slice(0, 3)
console.table()
```