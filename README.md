# 福建中医药大学主页展示

这是一个纯静态网站项目，已经适配桌面端和移动端，可直接部署到 GitHub Pages。

## 本地文件

- `index.html`
- `styles.css`
- `script.js`

## 发布到 GitHub Pages

1. 在 GitHub 新建一个仓库。
2. 把当前目录里的全部文件上传到仓库根目录。
3. 默认分支使用 `main`。
4. 打开仓库的 `Settings -> Pages`。
5. 在 `Build and deployment` 中选择 `GitHub Actions`。
6. 等待仓库里的 `Deploy Static Site to GitHub Pages` 工作流执行完成。

发布成功后，网址通常会是：

`https://你的用户名.github.io/你的仓库名/`

如果你把仓库名设成 `你的用户名.github.io`，网址会变成：

`https://你的用户名.github.io/`

## 当前预览

同一台电脑：

`http://127.0.0.1:8000/`

同一局域网：

`http://172.20.10.2:8000/`

## 说明

- 项目是纯静态页，不需要数据库或后端。
- `.nojekyll` 已添加，避免 GitHub Pages 对静态资源做不必要处理。
- `.github/workflows/deploy-pages.yml` 已添加，上传到 GitHub 后可直接自动部署。
