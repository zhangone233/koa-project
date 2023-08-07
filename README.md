## Koa Server
一个由 Koa + Ts 搭建的node服务。

### 启动环境
+ Node >= 16.14
+ pnpm >= 8


### 格式化方式 (vscode编辑器环境)
工具：prettier + eslint(TS Parser)
+ `control + s` 保存文件自动格式化：eslint fix
+ 手动快捷键格式化：
  + prettier：`shift + option + f`
  + eslint：`control + s` （自动）


### 目录


### 其它记录
+ *@types/package*包依赖提升。为了避免npm包的子依赖包在引用类型声明包的幽灵依赖时，会找不到相关包的安装地址，所以将类型声明的包全部提升至node_modules顶层下。(https://pnpm.io/zh/npmrc#public-hoist-pattern)

+ tsnd启动服务，如果开启了Chrome调试器(Node.js debugger), 在监听到文件变更进行热重启服务时，会被阻塞重启。（https://github.com/wclr/ts-node-dev/issues/71）
  > nodemon + ts-node的组合方案启动好像不会有这个问题。

