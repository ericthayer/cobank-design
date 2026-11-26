export const guides = Object.freeze({
  design: { eyebrow:'FIELD GUIDE / DESIGN', title:'Give good ideas a strong foundation.', description:'Use the shared system to make more room for the decisions that matter to your users.', steps:['Begin with the task: define the user, the outcome, and the states your experience needs.','Find an existing pattern. Compose with shared components before introducing a new one.','Review content, keyboard flow, responsive behavior, and error states with engineering.'], link:'Open design documentation', url:'https://design.cobank.net/' },
  develop: { eyebrow:'FIELD GUIDE / DEVELOP', title:'Build on what we share.', description:'Agrikit brings components, patterns, templates, and a shared theme into one React library.', steps:['Check the development guide for your project’s installed version and supported peer dependencies.','Start with CbAppShell and CbPage. Use the appropriate entry point for optional premium, PDF, notes, or MFA components.','Use the documented component contracts and theme tokens. Validate behavior and accessibility against the acceptance criteria.'], link:'Explore the engineering reference', url:'https://state-of-agrikit.netlify.app/deck/' },
  content: { eyebrow:'FIELD GUIDE / CONTENT', title:'Clarity is part of the craft.', description:'Make every label, instruction, and message help someone take their next step.', steps:['Name actions with concrete verbs. Tell people what will happen before they commit.','Write for every state: empty, loading, successful, and something going wrong.','Review words in context with design and engineering. Keep terminology consistent across the journey.'], link:'Open design documentation', url:'https://design.cobank.net/' },
  foundations: { eyebrow:'FIELD GUIDE / FOUNDATIONS', title:'Consistency begins beneath the surface.', description:'Color, typography, spacing, and breakpoints create the shared language of an experience.', steps:['Use documented semantic tokens for product experiences; check the current theme and component guidance.','Treat this page’s midnight, evergreen, growth, and cloud colors as a proposed editorial palette for the landing page.','Validate readable contrast, clear focus indicators, comfortable type sizes, and responsive spacing.'], link:'Explore the system reference', url:'https://state-of-agrikit.netlify.app/deck/' },
  components: { eyebrow:'FIELD GUIDE / COMPONENTS', title:'Considered once. Useful everywhere.', description:'Begin with the library’s existing patterns, then compose them around the task.', steps:['Match the interaction to a documented component: buttons, inputs, grids, feedback, navigation, or templates.','Read the actual API and behavior in the development guide. The controls on this page are illustrative examples.','Cover real states and real content. Test keyboard interaction, validation, long labels, and small screens.'], link:'Explore the library reference', url:'https://state-of-agrikit.netlify.app/deck/' }
});

export class FieldGuide extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<dialog aria-labelledby="guide-heading"><div class="dialog-head"><h2 id="guide-heading">Your field guide</h2><button class="close-dialog" aria-label="Close field guide">×</button></div><div class="dialog-content"></div></dialog>';
    this.dialog = this.querySelector('dialog');
    this.querySelector('.close-dialog').addEventListener('click',()=>this.dialog.close());
    this.dialog.addEventListener('click',e=>{if(e.target===this.dialog){const r=this.dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)this.dialog.close();}});
    this.dialog.addEventListener('close',()=>{document.body.style.overflow=''; this.opener?.focus();});
    this.addEventListener('click',e=>{const button=e.target.closest('[data-choice]');if(button)this.show(button.dataset.choice);});
  }
  show(key='start') {
    if(!this.dialog.open)this.opener=document.activeElement;
    const content=this.querySelector('.dialog-content');
    if(key==='start') content.innerHTML='<p class="eyebrow">WELCOME TO THE COBANK DESIGN SYSTEM</p><h3>Find your way into the system.</h3><p>Choose a starting point for the work you do.</p><div class="guide-choices"><button data-choice="design">I’m designing an experience <span>↗</span></button><button data-choice="develop">I’m building with Agrikit <span>↗</span></button><button data-choice="content">I’m shaping the content <span>↗</span></button></div><p class="guide-notice">Landing-page concept. Official documentation may require your CoBank network or account.</p>';
    else {
      const guide=guides[key]??guides.design;
      content.innerHTML=`<p class="eyebrow">${guide.eyebrow}</p><h3>${guide.title}</h3><p>${guide.description}</p><ol class="guide-steps">${guide.steps.map(step=>`<li>${step}</li>`).join('')}</ol><div class="guide-links"><a class="button" href="${guide.url}" target="_blank" rel="noopener">${guide.link} <span aria-hidden="true">↗</span></a><button class="text-link" data-choice="start">Other field guides →</button></div><p class="guide-notice">Suggested starting points for this concept. Refer to current internal documentation for approved standards and setup.</p>`;
    }
    if(!this.dialog.open){this.dialog.showModal();document.body.style.overflow='hidden';}
    else this.querySelector('.close-dialog').focus();
  }
}
customElements.define('field-guide',FieldGuide);
