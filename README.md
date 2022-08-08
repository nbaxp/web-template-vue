# web-template-vue

## 开发环境配置

参考：<https://code.visualstudio.com/docs/remote/containers>

1. 安装 vscode 和 插件 ms-vscode-remote.vscode-remote-extensionpack
1. 项目根目录添加 .devcontainers 目录
1. .devcontainers 目录添加 devcontainer.json。非容器化开发方式可以在 .vscode 目录下的 extensions.json 中添加推荐插件

```json
{
    "name": "Node.js",
    "build": {
        "dockerfile": "Dockerfile"
    },
    "customizations": {
        "vscode": {
            "extensions": [
                "dbaeumer.vscode-eslint",
                "davidanson.vscode-markdownlint",
                "vue.volar"
            ]
        }
    },
    "forwardPorts": [
        4173,
        5173
    ],
    "remoteUser": "node"
}
```

1. .devcontainers 目录添加 Dockerfile

```dockerfile
FROM node:16.16-bullseye
```

## 项目搭建

参考：<https://cn.vitejs.dev/>

1. 在容器中打开项目，在终端的容器命令行进行操作
1. 使用 vite 生成项目初始化文件并提取到根目录

```bash
npm create vite@latest
```

1. 安装程序包

```bash
npm install
```

1. 开发

```bash
npm run dev
```

1. 构建

```bash
npm run build
```

1. 预览

```bash
npm run preview
```
