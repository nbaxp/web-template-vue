# 开发环境配置

## vscode 配置

参考：<https://code.visualstudio.com/docs/remote/containers>

1. 安装插件 ms-vscode-remote.vscode-remote-extensionpack
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
      "extensions": ["dbaeumer.vscode-eslint", "davidanson.vscode-markdownlint", "vue.volar"]
    }
  },
  "forwardPorts": [4173, 5173],
  "remoteUser": "node"
}
```

1. .devcontainers 目录添加 Dockerfile

```dockerfile
FROM node:16.16-bullseye
```

1. 使用 vscode 在容器中打开项目，在终端的容器命令行进行操作

## .vscode 当前项目配置

.vscode/extensions.json 配置

```json
{
  "recommendations": [
    "howardzuo.vscode-npm-dependency",
    "editorconfig.editorconfig",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "rvest.vs-code-prettier-eslint",
    "stylelint.vscode-stylelint",
    "davidanson.vscode-markdownlint",
    "vue.volar"
  ]
}
```

.vscode/settings.json 配置

```json
{
  "editor.formatOnSave": true,
  "editor.formatOnSaveMode": "file",
  "editor.formatOnPaste": false,
  "editor.formatOnType": false,
  "files.autoSave": "onFocusChange",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  },
  "editor.defaultFormatter": "rvest.vs-code-prettier-eslint",
  "[html]": {
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  },
  "[javascript]": {
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  },
  "[json]": {
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  },
  "[css]": {
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  },
  "[scss]": {
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  },
  "[markdown]": {
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  },
  "[vue]": {
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  }
}
```
