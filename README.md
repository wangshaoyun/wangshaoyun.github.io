# Shaoyun Wang · Academic website

Astro 静态学术网站。新版位于本目录，旧网站 `/Users/wang/Documents/GitHub/wangshaoyun.github.io` 未修改。

## 本地预览

需要 Node.js 22.12+（也支持 Astro 要求的其他版本）。本机 `/usr/local/bin/node` 很旧，请使用应用提供的运行环境：

```sh
export PATH="/Users/wang/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH"
ASTRO_TELEMETRY_DISABLED=1 node node_modules/astro/astro.js dev --host 127.0.0.1
```

打开终端显示的本地地址，默认 http://localhost:4321 。停止后可以运行上述命令重新打开。

```sh
npm install
npm run dev
npm run build
```

上述 npm 命令适用于已配置现代 Node.js/npm 的环境。生产静态文件生成在 `dist/`。

## 如何维护

| 内容 | 文件 |
| --- | --- |
| 职位、单位、简介、邮箱、CV、学术链接 | `src/data/profile.json` |
| 论文列表 | `src/data/publications.json` |
| 研究项目及首页选中项目 | `src/data/projects.json` |
| 笔记 | `src/content/notes/*.md` |
| Notes 主题卡片、分类归属和说明 | `src/data/note-topics.ts` |
| PDF、照片与科研图 | `public/assets/` |
| 配色、字体和排版 | `src/styles/global.css` |

添加论文：复制一条论文记录，使用唯一 id，填写 year、title、authors、venue、url、pdf。selected 控制代表作筛选。首页最近论文取列表前四条；保持记录按年份倒序。项目通过 match 对应论文标题，请使用唯一且稳定的标题片段。

添加笔记：新建 Markdown 文件，开头填写 title、date（YYYY-MM-DD 字符串）和 category。主题卡片会根据 category 自动统计数量，并链接到各自的主题页面；新增类别时在 note-topics.ts 中设置归属。支持 `$...$`、`$$...$$`、代码块、图片和 PDF 链接，公式在构建时排版，无需远程 MathJax。已有笔记保留原文。

BibTeX 下载目前是由旧站元数据生成的最小引用（标题、年份、URL 和可提取的 DOI），不是出版社完整引用。投稿前应从 DOI/出版社获取完整 BibTeX；旧作者字符串有省略号，未自动推断完整作者。

## 内容核对

- 当前职位及联系信息来自旧站本地文件，发布前确认仍然有效。
- 旧个人经历的博士时间仍为“Expected July 2025”；新版未猜测实际毕业日期。
- 论文按旧站分组年份迁移。旧站 2025 分组中有一篇文献标注 2026，2015 分组中有文献标注 2016，需人工确认。
- 旧研究项目和论文链接有过期 PDF 文件名；已使用实际存在的论文路径。旧笔记自身若有缺失附件会在校验报告中列出。
- 既有 CV 原样复制，不保证内容已更新。
- 旧研究经历、教学经历等完整信息仍保留在原站；新版 About 先选取核心经历，未填充不确定的“至今”日期。
- 未添加虚构新闻、研究贡献或出版状态。

## GitHub 发布（尚未启用）

`.github/workflows/deploy.yml` 对应原仓库的 `master` 分支。Pull request 自动构建并检查本地链接；合并到 master 后自动部署。
本目录已连接原仓库 `https://github.com/wangshaoyun/wangshaoyun.github.io.git`，并保留旧站快照分支 `legacy-jekyll-2026-10-24`。原本地目录仍独立保留。
在目标仓库的 Settings → Pages 选择 GitHub Actions 后，推送 master 将自动安装、构建和部署。用户主页继续使用 wangshaoyun.github.io。测试项目仓库需先在 astro.config.mjs 设置对应 base 路径，并调整根相对链接；当前配置针对根域名用户主页，不适合直接部署到子路径。

旧笔记地址对应的跳转页保存在 `src/data/redirects.json`。原 PDF 路径保留。迁移脚本仅首次导入使用，再次运行会拒绝覆盖论文库，以保护后续手工更新。

外部字体来自 Google Fonts，离线时使用系统字体。发布前请确认个人照片、科研图与 PDF 的公开展示权限，并保留原站 LICENSE 中适用的版权声明。
