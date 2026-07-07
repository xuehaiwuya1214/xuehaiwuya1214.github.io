import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    /** 文章标题（必填） */
    title: z.string(),
    /** 发布日期（必填），如 2026-07-07 */
    date: z.coerce.date(),
    /** 最后更新日期（可选） */
    updated: z.coerce.date().optional(),
    /** 摘要（可选，不填则自动截取正文开头） */
    description: z.string().optional(),
    /** 分类（单个），如 学习笔记 / 课程整理 / 生活随想 */
    category: z.string().default('未分类'),
    /** 标签（多个） */
    tags: z.array(z.string()).default([]),
    /** 草稿：true 时正式构建不发布（本地 dev 可见） */
    draft: z.boolean().default(false),
    /** 置顶：true 时固定在首页最前 */
    pinned: z.boolean().default(false),
  }),
});

export const collections = { posts };
