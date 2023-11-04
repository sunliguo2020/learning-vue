### 创建项目：npm init vue@latest

```
D:\github\learning-vue\Vue例子\Vue3Blog>npm init vue@latest

Vue.js - The Progressive JavaScript Framework

√ 请输入项目名称： ... vueBlog
√ 请输入包名称： ... vueblog
√ 是否使用 TypeScript 语法？ ... 否 / 是
√ 是否启用 JSX 支持？ ... 否 / 是
√ 是否引入 Vue Router 进行单页面应用开发？ ... 否 / 是
√ 是否引入 Pinia 用于状态管理？ ... 否 / 是
√ 是否引入 Vitest 用于单元测试？ ... 否 / 是
√ 是否要引入一款端到端（End to End）测试工具？ » 不需要
√ 是否引入 ESLint 用于代码质量检测？ ... 否 / 是

正在构建项目 D:\github\learning-vue\Vue例子\Vue3Blog\vueBlog...

项目构建完成，可执行以下命令：

  cd vueBlog
  npm install
  npm run dev


D:\github\learning-vue\Vue例子\Vue3Blog>
```



```
npm install ant-design-vue --save

```

### vite 按需引入

先安装unplugin-vue-components这个包

--save-dev 该依赖为开发时依赖，不打包到线上环境

```
npm install unplugin-vue-components --save-dev
```

之后在vite.config.js 中引入如下配置：

```vue
import Components from 'unplugin-vue-components/vite'
import {AntDesignVueResolver} from 'unplugin-vue-components/resolvers'

export default defineConfig({
plugins: [
    vue(),
     // 在此处引入如下配置
     Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
  ],
```

