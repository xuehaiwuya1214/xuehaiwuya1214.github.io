/**
 * 站点全局配置 —— 改这里即可定制整个博客。
 */
export const SITE = {
  /** 部署后的完整地址（同 astro.config.mjs 中的 site） */
  url: 'https://xuehaiwuya1214.github.io',
  /** 站点标题 */
  title: '学海无涯',
  /** 副标题 / 签名，显示在侧边栏头像下方 */
  tagline: '书山有路勤为径，学海无涯苦作舟',
  /** 作者名（可改成中文名） */
  author: 'Dong Xuanran',
  /** 站点描述，用于 SEO 与 RSS */
  description:
    'Dong Xuanran 的个人博客 —— 记录 AI 学习笔记、课程整理与生活随想。',
  /** GitHub 用户名（项目页会自动拉取该账号的公开仓库） */
  githubUser: 'xuehaiwuya1214',
  /** GitHub 主页链接 */
  github: 'https://github.com/xuehaiwuya1214',
  /** 联系邮箱（不想公开可留空字符串） */
  email: 'vafunchae1658@gmail.com',
  /** 首页每页文章数 */
  pageSize: 8,
  /** 建站年份，用于页脚版权 */
  startYear: 2026,
};

/** 侧边栏导航 */
export const NAV: { label: string; href: string; icon: string }[] = [
  { label: '首页', href: '/', icon: 'home' },
  { label: '归档', href: '/archive/', icon: 'archive' },
  { label: '分类', href: '/categories/', icon: 'folder' },
  { label: '标签', href: '/tags/', icon: 'tag' },
  { label: '搜索', href: '/search/', icon: 'search' },
  { label: '项目', href: '/projects/', icon: 'code' },
  { label: '友链', href: '/friends/', icon: 'users' },
  { label: '关于', href: '/about/', icon: 'user' },
];

/** 友情链接（按需增删） */
export const FRIENDS: {
  name: string;
  url: string;
  description: string;
}[] = [
  {
    name: 'Elysium Seeker',
    url: 'https://elysium-seeker.github.io/',
    description: '请用一支玫瑰纪念我',
  },
];

/**
 * Giscus 评论（基于 GitHub Discussions）。
 * 开启方法见 README「开启评论」一节；填好四个字段后把 enabled 改为 true。
 */
export const GISCUS = {
  enabled: false,
  repo: '',
  repoId: '',
  category: 'Announcements',
  categoryId: '',
};
