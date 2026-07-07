/** 把 Markdown 粗略转为纯文本（用于摘要与搜索索引） */
export function stripMarkdown(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, ' ') // 代码块
    .replace(/\$\$[\s\S]*?\$\$/g, ' ') // 块级公式
    .replace(/\$[^$\n]+\$/g, ' ') // 行内公式
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ') // 图片
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // 链接保留文字
    .replace(/<[^>]+>/g, ' ') // HTML 标签
    .replace(/^#{1,6}\s+/gm, '') // 标题标记
    .replace(/^>\s?/gm, '') // 引用标记
    .replace(/^[-*+]\s+/gm, '') // 列表标记
    .replace(/^\d+\.\s+/gm, '')
    .replace(/[*_~`|]+/g, '') // 强调、表格符号
    .replace(/\s+/g, ' ')
    .trim();
}

/** 生成摘要 */
export function excerpt(md: string, length = 120): string {
  const text = stripMarkdown(md);
  return text.length > length ? text.slice(0, length) + '……' : text;
}

/** 估算阅读时长：中文约 400 字/分钟，英文约 200 词/分钟 */
export function readingTime(md: string): { minutes: number; words: number } {
  const text = stripMarkdown(md);
  const cjk = (text.match(/[一-鿿㐀-䶿]/g) ?? []).length;
  const latinWords = text
    .replace(/[一-鿿㐀-䶿]/g, ' ')
    .split(/\s+/)
    .filter((w) => /[a-zA-Z0-9]/.test(w)).length;
  const minutes = Math.max(1, Math.round(cjk / 400 + latinWords / 200));
  return { minutes, words: cjk + latinWords };
}

/** 2026-07-07 格式 */
export function fmtDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/** 07-07 格式（归档页年份分组内使用） */
export function fmtMonthDay(date: Date): string {
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${m}-${d}`;
}
