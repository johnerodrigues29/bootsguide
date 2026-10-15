(() => {
 'use strict';
 const menu=document.querySelector('#bg-mobile-menu'), search=document.querySelector('#bg-search');
 let active=null, opener=null, background=[];
 const focusable=el=>[...el.querySelectorAll('a[href],button,input,select,textarea,[tabindex="0"]')].filter(x=>!x.disabled&&!x.hidden);
 function close(restore=true){
  if(!active)return; active.hidden=true; active=null;
  background.forEach(([el,was])=>el.inert=was);background=[];
  document.body.classList.remove('nav-open');
  document.querySelectorAll('[data-bg-open]').forEach(b=>b.setAttribute('aria-expanded','false'));
  if(restore&&opener){const target=opener.closest("[hidden]")?document.querySelector(".bg-actions [data-bg-open=search]"):opener;target?.focus();}
 }
 function open(dialog,button){
  close(false);active=dialog;opener=button;dialog.hidden=false;document.body.classList.add('nav-open');
  background=[...document.body.children].filter(el=>el!==dialog&&!['SCRIPT','STYLE','LINK'].includes(el.tagName)).map(el=>[el,el.inert]);
  background.forEach(([el])=>el.inert=true);
  button.setAttribute('aria-expanded','true');
  (dialog.querySelector('input')||focusable(dialog)[0]).focus();
 }
 document.querySelectorAll('[data-bg-open]').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();open(b.dataset.bgOpen==='menu'?menu:search,b)}));
 document.querySelectorAll('[data-bg-close]').forEach(b=>b.addEventListener('click',()=>close()));
 menu?.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>close(false)));
 search?.addEventListener('click',e=>{if(e.target===search)close()});
 document.addEventListener('keydown',e=>{
  if(!active)return;
  if(e.key==='Escape'){e.preventDefault();close();return}
  if(e.key==='Tab'){
   const list=focusable(active),first=list[0],last=list[list.length-1];
   if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
   else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
  }
 });
 window.addEventListener('resize',()=>{if(active===menu&&window.innerWidth>767)close()});
 const form=document.querySelector('[data-bg-search-page]');
 if(!form)return;
 const results=document.querySelector('[data-bg-results]'), status=document.querySelector('[data-bg-status]');
 const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
 let entries=null;
 function render(){
  if(!entries)return;
  const query=form.elements.q.value.trim(),tokens=normalize(query).split(/\s+/).filter(Boolean);
  const matches=entries.map(e=>({e,score:tokens.reduce((n,t)=>n+(normalize(e.title).includes(t)?4:0),0)})).filter(({e})=>tokens.every(t=>normalize(e.title+' '+e.text+' '+e.type).includes(t))).sort((a,b)=>b.score-a.score);
  results.replaceChildren();status.textContent=matches.length+' '+(matches.length===1?'result':'results')+(query?' for “'+query+'”':'. Browse our articles.');
  if(!matches.length){const p=document.createElement('p');p.textContent='No matches found. Try a model number, brand, “sizing” or “waterproof”.';results.append(p)}
  matches.forEach(({e})=>{const a=document.createElement('a');a.className='bg-result';a.href=e.url;for(const [tag,value,cls] of [['span',e.type,'meta-label'],['h2',e.title,''],['p',e.text,'']]){const el=document.createElement(tag);el.textContent=value;if(cls)el.className=cls;a.append(el)}results.append(a)});
 }
 form.elements.q.value=new URLSearchParams(location.search).get('q')||'';
 form.addEventListener('submit',e=>{e.preventDefault();history.replaceState(null,'','?q='+encodeURIComponent(form.elements.q.value.trim()));render()});
 fetch('/assets/search-index-20261015.json').then(r=>{if(!r.ok)throw Error();return r.json()}).then(data=>{entries=data;render()}).catch(()=>{status.textContent='Search could not load. Please reload the page or browse Reviews, Comparisons and Buying Guides from the menu.'});
})();
