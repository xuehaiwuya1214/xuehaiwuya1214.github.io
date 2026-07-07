---
title: 本站写作指南：如何发布一篇新文章
date: 2026-07-07
category: 站务
tags: [博客, 教程]
description: 三种发布方式：本地写完 git push、GitHub 网页直接上传、一条命令新建草稿。附 frontmatter 字段完整说明。
pinned: true
---

把 Markdown 笔记变成一篇博客文章，只需要**放一个 `.md` 文件进 `src/content/posts/` 文件夹**。推送到 GitHub 后，Actions 会自动构建并发布，一两分钟后就能在线上看到。

## 文章头部（frontmatter）

每篇文章开头需要一段用 `---` 包裹的元信息：

```yaml
---
title: 文章标题            # 必填
date: 2026-07-07          # 必填，发布日期
category: 学习笔记         # 分类（单选），不填则归入「未分类」
tags: [机器学习, 数学]     # 标签（多选），可省略
description: 一句话摘要    # 可省略，默认自动截取正文开头
updated: 2026-07-08       # 可省略，最后更新日期
draft: true               # 可省略，草稿不会被发布
pinned: true              # 可省略，置顶到首页最前
---
```

正文就是普通 Markdown，支持代码高亮、表格、脚注和 LaTeX 数学公式。

## 方式一：本地写作 + git push（推荐）

```bash
# 1. 新建文件（文件名就是文章的 URL，建议用英文）
#    例如 src/content/posts/my-first-note.md

# 2. 本地预览
npm run dev          # 打开 http://localhost:4321

# 3. 发布
git add .
git commit -m "post: 我的第一篇笔记"
git push
```

## 方式二：GitHub 网页直接上传

不在自己电脑旁边时最方便：

1. 打开仓库的 `src/content/posts/` 目录；
2. 点击 **Add file → Upload files**，把整理好的 `.md` 笔记拖进去（记得加上 frontmatter）；
3. 点击 **Commit changes**，等 Actions 跑完即发布。

## 方式三：一条命令新建草稿

```bash
npm run new -- "文章标题" my-post-slug
```

会自动在 `src/content/posts/` 下生成带今日日期的模板文件，写完把 `draft: true` 删掉即可发布。

## 图片怎么放

把图片放进 `public/images/` 文件夹，正文里这样引用：

```markdown
![图片说明](/images/example.png)
```

## 常见问题

| 问题 | 解决 |
| --- | --- |
| 推送后没更新 | 打开仓库 Actions 页看构建是否失败 |
| 文章不显示 | 检查 frontmatter 里是否有 `draft: true` |
| 日期格式报错 | 使用 `YYYY-MM-DD` 格式 |
| 中文文件名 | 可以用，但 URL 会被编码，建议英文文件名 |
