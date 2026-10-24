import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
export default defineConfig({site:'https://wangshaoyun.github.io',devToolbar:{enabled:false},markdown:{shikiConfig:{langAlias:{'no-highlight':'plaintext'}},remarkPlugins:[remarkMath],rehypePlugins:[[rehypeKatex,{strict:false,throwOnError:false}]]}});
