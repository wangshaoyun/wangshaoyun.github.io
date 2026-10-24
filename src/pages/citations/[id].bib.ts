import papers from '../../data/publications.json';
export function getStaticPaths(){return papers.map(p=>({params:{id:p.id},props:{p}}))}
export function GET({props}:{props:{p:typeof papers[number]}}){const p=props.p;const doi=p.url.match(/doi\.org\/(.+)/)?.[1];return new Response(`@misc{wang${p.year}_${p.id.replace('-','')},\n  title = {${p.title}},\n  year = {${p.year}},\n  url = {${p.url}}${doi?`,\n  doi = {${doi}}`:''}\n}\n`,{headers:{'Content-Type':'application/x-bibtex; charset=utf-8'}})}
