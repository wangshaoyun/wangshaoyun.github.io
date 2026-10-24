import fs from 'node:fs';
import path from 'node:path';
function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(d=>d.isDirectory()?walk(path.join(dir,d.name)):[path.join(dir,d.name)])}
const missing=[];let checked=0;
for(const file of walk('dist').filter(f=>f.endsWith('.html'))){const text=fs.readFileSync(file,'utf8');for(const match of text.matchAll(/(?:href|src)="([^"#]+)"/g)){let url=match[1];if(!url.startsWith('/')||url.startsWith('//'))continue;url=decodeURIComponent(url.split(/[?#]/)[0]);const target='dist'+url;if(!fs.existsSync(target)&&!fs.existsSync(path.join(target,'index.html')))missing.push({file,url});checked++;}}
console.log(JSON.stringify({checked,missing},null,2));if(missing.length)process.exitCode=1;
