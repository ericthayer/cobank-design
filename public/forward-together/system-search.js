export const searchItems=Object.freeze([
  {title:'Foundations',description:'Color, typography, spacing, and shared principles',href:'#foundation-detail',keywords:'tokens theme palette color typography spacing breakpoints'},
  {title:'Components',description:'Reusable controls and interaction patterns',href:'#component-detail',keywords:'button form input switch grid table patterns'},
  {title:'Workflows',description:'A starting point for design, development, and content',href:'#workflows',keywords:'figma react developer engineering content writing'},
  {title:'Field guides',description:'Practical guidance for every discipline',href:'#resources',keywords:'guides resources documentation getting started'},
  {title:'Agrikit engineering reference',description:'Component library, delivery platform, and MCP tooling',href:'https://state-of-agrikit.netlify.app/deck/',keywords:'ai agents mcp toolkit release react agrikit',external:true}
]);
export class SystemSearch extends HTMLElement {
  connectedCallback(){
    this.innerHTML='<dialog aria-labelledby="search-heading"><div class="dialog-head"><h2 id="search-heading">Find your next starting point.</h2><button class="close-dialog" aria-label="Close search">×</button></div><div class="search-input-wrap"><label class="eyebrow" for="system-query">SEARCH THE DESIGN SYSTEM</label><input id="system-query" type="search" placeholder="Try “tokens” or “components”" autocomplete="off"></div><ul class="search-results" aria-label="Search results"></ul><p class="dialog-key" aria-live="polite"></p></dialog>';
    this.dialog=this.querySelector('dialog');this.input=this.querySelector('input');
    this.querySelector('.close-dialog').addEventListener('click',()=>this.dialog.close());
    this.input.addEventListener('input',()=>this.render(this.input.value));
    this.input.addEventListener('keydown',e=>{if(e.key==='ArrowDown'){e.preventDefault();this.querySelector('.search-results a')?.focus();}if(e.key==='Enter'){e.preventDefault();this.querySelector('.search-results a')?.click();}});
    this.querySelector('.search-results').addEventListener('click',e=>{if(e.target.closest('a'))this.dialog.close();});
    this.dialog.addEventListener('close',()=>{document.body.style.overflow='';this.opener?.focus();});
    this.dialog.addEventListener('click',e=>{if(e.target===this.dialog){const r=this.dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)this.dialog.close();}});
    this.render('');
  }
  render(query){
    const words=query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    const results=searchItems.filter(item=>words.every(word=>(item.title+' '+item.description+' '+item.keywords).toLowerCase().includes(word)));
    this.querySelector('.search-results').innerHTML=results.length?results.map(item=>`<li><a href="${item.href}" ${item.external?'target="_blank" rel="noopener"':''}><span>${item.title}<small>${item.description}</small></span><span aria-hidden="true">${item.external?'↗':'→'}</span></a></li>`).join(''):'<li class="search-empty">No matching resources. Try “design”, “tokens”, or “Agrikit”.</li>';
    this.querySelector('.dialog-key').textContent=`${results.length} resource${results.length===1?'':'s'} · Enter to open the first result · Esc to close`;
  }
  show(){this.opener=document.activeElement;this.input.value='';this.render('');this.dialog.showModal();document.body.style.overflow='hidden';this.input.focus();}
}
customElements.define('system-search',SystemSearch);
