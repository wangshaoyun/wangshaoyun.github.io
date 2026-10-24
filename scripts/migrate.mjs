import fs from 'node:fs';
import path from 'node:path';
const source='/Users/wang/Documents/GitHub/wangshaoyun.github.io';
if(fs.existsSync('src/data/publications.json')) throw new Error('Migration already completed; refusing to overwrite edited content.');
fs.mkdirSync('public/assets',{recursive:true});
for(const dir of ['images','files','notes']) fs.cpSync(path.join(source,'assets',dir),`public/assets/${dir}`,{recursive:true,filter:p=>!p.endsWith('.DS_Store')});
fs.mkdirSync('src/data',{recursive:true});fs.mkdirSync('src/content/notes',{recursive:true});
const original=fs.readFileSync(path.join(source,'publications.md'),'utf8');
const publications=[];let year;
for(const line of original.split('\n')){
 if(/^## \d{4}/.test(line)){year=Number(line.slice(3));continue;}
 if(!/^\d+\. /.test(line))continue;
 const m=line.match(/^\d+\.\s+([\s\S]*?)\[([^\]]+)\]\(([^)]+)\)([\s\S]*)/);if(!m)throw new Error('Unparsed publication: '+line);
 const tail=m[4];let pdf=tail.match(/href="([^"]+)"/)?.[1]||'';
 if(pdf && !fs.existsSync('public'+pdf) && fs.existsSync('public'+pdf+'.pdf'))pdf+='.pdf';
 const journal=tail.replace(/<a[\s\S]*/,'').replace(/^[.,\s]+/,'').replace(/\*/g,'').trim();
 publications.push({id:`paper-${publications.length+1}`,year,title:m[2].trim(),authors:m[1].replace(/\*/g,'').replace(/\(\d{4}\)[,.]?\s*$/,'').trim(),venue:journal,url:m[3],pdf,selected:/temporal refraction|Smart patterning|Dynamic Willis|odd mass density/.test(m[2])});
}
fs.writeFileSync('src/data/publications.json',JSON.stringify(publications,null,2)+'\n');
const redirects=[];
for(const file of fs.readdirSync(path.join(source,'_posts')).filter(f=>f.endsWith('.md'))){
 let text=fs.readFileSync(path.join(source,'_posts',file),'utf8');const fm=text.match(/^---\s*\n([\s\S]*?)\n---/);if(!fm)continue;
 const title=fm[1].match(/^title:\s*(.+)$/m)[1],category=fm[1].match(/^category:\s*(.+)$/m)?.[1]||'Notes';
 const date=file.slice(0,10),slug=file.slice(11,-3).replaceAll(' ','-');
 const body=text.slice(fm[0].length).replace(/\[TOC\]/g,'');
 fs.writeFileSync(`src/content/notes/${slug}.md`,`---\ntitle: ${JSON.stringify(title)}\ncategory: ${JSON.stringify(category)}\ndate: ${JSON.stringify(date)}\n---\n${body}`);
 redirects.push({from:`/${category.toLowerCase()}/${date.replaceAll('-','/')}/${slug}.html`,to:`/notes/${slug}/`});
}
fs.writeFileSync('src/data/redirects.json',JSON.stringify(redirects,null,2));
console.log(`Migrated ${publications.length} publications and ${redirects.length} notes. Original files untouched.`);
