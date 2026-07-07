import { getPosts, postUrl } from '../utils/posts';
import { stripMarkdown } from '../utils/text';
import { fmtDate } from '../utils/text';

/** 构建时生成的全文搜索索引 */
export async function GET() {
  const posts = await getPosts();
  const index = posts.map((post) => ({
    title: post.data.title,
    url: postUrl(post),
    date: fmtDate(post.data.date),
    category: post.data.category,
    tags: post.data.tags,
    body: stripMarkdown(post.body ?? '').slice(0, 8000),
  }));
  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
