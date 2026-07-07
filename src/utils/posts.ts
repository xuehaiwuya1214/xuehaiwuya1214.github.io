import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

/** 全部文章：按日期倒序；正式构建时过滤草稿（本地 dev 可预览草稿） */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) =>
    import.meta.env.PROD ? !data.draft : true
  );
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** 首页排序：置顶优先，其余按日期倒序 */
export function sortForHome(posts: Post[]): Post[] {
  return [...posts].sort(
    (a, b) =>
      Number(b.data.pinned) - Number(a.data.pinned) ||
      b.data.date.valueOf() - a.data.date.valueOf()
  );
}

export function postUrl(post: Post): string {
  return `/posts/${post.id}/`;
}

/** 按分类分组 */
export function groupByCategory(posts: Post[]): Map<string, Post[]> {
  const map = new Map<string, Post[]>();
  for (const post of posts) {
    const key = post.data.category;
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(post);
  }
  return new Map([...map.entries()].sort((a, b) => b[1].length - a[1].length));
}

/** 按标签分组 */
export function groupByTag(posts: Post[]): Map<string, Post[]> {
  const map = new Map<string, Post[]>();
  for (const post of posts) {
    for (const tag of post.data.tags) {
      if (!map.has(tag)) map.set(tag, []);
      map.get(tag)!.push(post);
    }
  }
  return new Map([...map.entries()].sort((a, b) => b[1].length - a[1].length));
}

/** 按年份分组（归档页），年份倒序 */
export function groupByYear(posts: Post[]): [number, Post[]][] {
  const map = new Map<number, Post[]>();
  for (const post of posts) {
    const year = post.data.date.getFullYear();
    if (!map.has(year)) map.set(year, []);
    map.get(year)!.push(post);
  }
  return [...map.entries()].sort((a, b) => b[0] - a[0]);
}
