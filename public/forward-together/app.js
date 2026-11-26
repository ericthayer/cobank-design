import './field-guide.js';
import './system-search.js';
import { initMobileNavigation } from './mobile-navigation.js';

const roles={
  design:{title:'Start with the system. Make it your own.',body:'Find the right pattern, compose with shared components, and bring the details into focus.',label:'Open the design field guide'},
  develop:{title:'Less repetition. More thoughtful engineering.',body:'Build with Agrikit’s shared React components, theme tokens, and application templates.',label:'Open the development field guide'},
  content:{title:'The right words move people forward.',body:'Create clear labels, useful instructions, and helpful messages for every moment in the journey.',label:'Open the content field guide'}
};

export function selectRole(key){
  const role=roles[key]; if(!role)return;
  document.querySelectorAll('[data-role]').forEach(tab=>{const selected=tab.dataset.role===key;tab.setAttribute('aria-selected',String(selected));tab.tabIndex=selected?0:-1;});
  const panel=document.querySelector('#role-panel');panel.setAttribute('aria-labelledby','tab-'+key);
  panel.innerHTML=`<h3>${role.title}</h3><p>${role.body}</p><button class="light-link" data-guide="${key}">${role.label} <span aria-hidden="true">↗</span></button>`;
}
let toastTimer;
export function showToast(message){const toast=document.querySelector('#toast');toast.textContent=message;toast.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('visible'),2600);}
export async function copyColor(value){try{await navigator.clipboard.writeText(value);showToast(`${value} copied to clipboard`);}catch{showToast(`Color value: ${value}`);}}

document.addEventListener('click',e=>{
  const guide=e.target.closest('[data-guide]');if(guide)document.querySelector('field-guide').show(guide.dataset.guide);
  if(e.target.closest('[data-search]'))document.querySelector('system-search').show();
  const role=e.target.closest('[data-role]');if(role)selectRole(role.dataset.role);
  const color=e.target.closest('[data-color]');if(color)copyColor(color.dataset.color);
});
document.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();if(!document.querySelector('dialog[open]'))document.querySelector('system-search').show();}});
const tabs=[...document.querySelectorAll('[data-role]')];
document.querySelector('.role-tabs').addEventListener('keydown',e=>{let index=tabs.indexOf(document.activeElement);if(index===-1)return;if(e.key==='ArrowRight')index=(index+1)%tabs.length;else if(e.key==='ArrowLeft')index=(index+tabs.length-1)%tabs.length;else if(e.key==='Home')index=0;else if(e.key==='End')index=tabs.length-1;else return;e.preventDefault();selectRole(tabs[index].dataset.role);tabs[index].focus();});
initMobileNavigation(document.querySelector('.menu-toggle'), document.querySelector('#mobile-navigation'));
document.querySelector('#demo-save').addEventListener('click',()=>{const input=document.querySelector('#demo-name'),message=document.querySelector('#demo-message');const name=input.value.trim();if(!name){input.setAttribute('aria-invalid','true');input.setAttribute('aria-describedby','demo-message');message.textContent='Add a workspace name to try this interaction.';input.focus();return;}input.removeAttribute('aria-invalid');message.textContent=`“${name}” saved for this preview. Updates ${document.querySelector('#demo-notify').checked?'on':'off'}.`;showToast('Example workspace saved');});
