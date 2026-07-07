# 学海无涯 · 个人博客

基于 [Astro](https://astro.build) 的静态博客，部署在 GitHub Pages。

**功能一览**：文章列表与分页 · 全文搜索 · 归档时间线 · 分类 / 标签 · 项目页（自动同步 GitHub 仓库）· 友链 · 关于 · RSS 订阅 · 站点地图 · 深浅双主题 · LaTeX 数学公式 · 代码高亮与一键复制 · 文章目录滚动跟随 · 阅读时长统计 · 草稿 / 置顶 · 移动端适配

## 常用命令

| 命令 | 作用 |
| --- | --- |
| `npm install` | 安装依赖（首次克隆后执行一次） |
| `npm run dev` | 本地预览，打开 http://localhost:4321 |
| `npm run build` | 构建静态站点到 `dist/` |
| `npm run new -- "标题" [slug]` | 新建一篇文章草稿 |

## 如何发布文章

把带 frontmatter 的 Markdown 文件放进 `src/content/posts/`，推送到 GitHub 即自动发布。
详细说明见站内文章[《本站写作指南》](src/content/posts/how-to-write-posts.md)，或线上 `/posts/how-to-write-posts/`。

最小示例：

```markdown
---
title: 我的第一篇笔记
date: 2026-07-08
category: 学习笔记
tags: [机器学习]
---

正文……
```

## 首次部署到 GitHub Pages

1. 在 GitHub 新建一个**公开**仓库，名字必须是 `xuehaiwuya1214.github.io`；
2. 本地关联并推送：

   ```bash
   git remote add origin git@github.com:xuehaiwuya1214/xuehaiwuya1214.github.io.git
   # 或 HTTPS：https://github.com/xuehaiwuya1214/xuehaiwuya1214.github.io.git
   git push -u origin main
   ```

3. 打开仓库 **Settings → Pages**，把 **Source** 设为 **GitHub Actions**；
4. 等 Actions 构建完成（约 1–2 分钟），访问 <https://xuehaiwuya1214.github.io> 即可。

之后每次 `git push`（或在 GitHub 网页上传 md 文件）都会自动重新构建发布。

> 如果部署到其他名字的仓库（如 `blog`），站点会位于子路径 `/blog/`，
> 需要在 `astro.config.mjs` 中加 `base: '/blog'` 并把站内绝对路径改为带前缀，不推荐；
> 直接用 `用户名.github.io` 仓库最省心。

## 定制

所有站点信息集中在 [`src/site.config.ts`](src/site.config.ts)：

- **标题 / 签名 / 作者 / 邮箱**：改 `SITE` 对象（不想公开邮箱就置为空字符串）；
- **导航菜单**：改 `NAV` 数组；
- **友链**：改 `FRIENDS` 数组；
- **头像**：替换 `public/avatar.svg`（也可以换成 `avatar.png`，同时更新 `Sidebar.astro` 和 `about.astro` 中的引用）；
- **主题色 / 字体**：改 `src/styles/global.css` 顶部的 CSS 变量。

## 开启评论（可选）

评论基于 [Giscus](https://giscus.app)（GitHub Discussions）：

1. 博客仓库 Settings → 勾选 **Discussions**；
2. 在 <https://github.com/apps/giscus> 给该仓库安装 giscus App；
3. 到 <https://giscus.app/zh-CN> 填入仓库名，复制生成的 `data-repo-id`、`data-category-id`；
4. 填入 `src/site.config.ts` 的 `GISCUS` 配置并把 `enabled` 改为 `true`。

## 目录结构

```
├── public/              # 静态资源（头像、图标、图片）
├── scripts/new-post.mjs # 新建文章脚本
├── src/
│   ├── components/      # 侧边栏、文章卡片、目录等组件
│   ├── content/posts/   # ★ 文章都放这里（Markdown）
│   ├── layouts/         # 页面骨架
│   ├── pages/           # 路由（首页/归档/分类/标签/搜索/项目/友链/关于）
│   ├── styles/          # 全局样式（主题变量在这里改）
│   ├── content.config.ts# 文章 frontmatter 校验规则
│   └── site.config.ts   # ★ 站点配置（标题/导航/友链/评论）
└── .github/workflows/   # GitHub Actions 自动部署
```
