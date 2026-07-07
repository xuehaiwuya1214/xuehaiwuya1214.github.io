#!/usr/bin/env node
/**
 * 新建文章草稿：
 *   npm run new -- "文章标题" [slug]
 * 例：
 *   npm run new -- "Transformer 笔记" transformer-notes
 */
import { writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const [title, slugArg] = process.argv.slice(2);

if (!title) {
  console.error('用法: npm run new -- "文章标题" [slug]');
  process.exit(1);
}

const slug =
  slugArg ??
  title
    .toLowerCase()
    .replace(/[^\p{Letter}\p{Number}]+/gu, '-')
    .replace(/^-+|-+$/g, '') ??
  'untitled';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dir = join(root, 'src', 'content', 'posts');
const file = join(dir, `${slug}.md`);

if (existsSync(file)) {
  console.error(`已存在同名文章: ${file}`);
  process.exit(1);
}

const today = new Date();
const date = [
  today.getFullYear(),
  String(today.getMonth() + 1).padStart(2, '0'),
  String(today.getDate()).padStart(2, '0'),
].join('-');

const template = `---
title: ${title}
date: ${date}
category: 未分类
tags: []
draft: true
---

正文从这里开始……
`;

mkdirSync(dir, { recursive: true });
writeFileSync(file, template, 'utf8');
console.log(`已创建草稿: src/content/posts/${slug}.md`);
console.log('写完后删除 frontmatter 中的 "draft: true" 即可发布。');
