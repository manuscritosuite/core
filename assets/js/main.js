(function(){
var $=function(s,r){return (r||document).querySelector(s)},$$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var mb=$('.menu'),nav=$('#nav');
function closeMenu(f){nav.classList.remove('open');mb.setAttribute('aria-expanded','false');mb.textContent='Menu';if(f)mb.focus()}
if(mb&&nav){mb.addEventListener('click',function(){var o=nav.classList.toggle('open');mb.setAttribute('aria-expanded',o);mb.textContent=o?'Fechar':'Menu'});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&nav.classList.contains('open'))closeMenu(true)})}
var y=$('#ano');if(y)y.textContent=new Date().getFullYear();
$$('[role=tablist]').forEach(function(tl){var tabs=$$('[role=tab]',tl);
function sel(n,f){tabs.forEach(function(t,i){var on=i===n;t.setAttribute('aria-selected',on);t.tabIndex=on?0:-1;var p=document.getElementById(t.getAttribute('aria-controls'));if(p)p.hidden=!on});if(f)tabs[n].focus()}
tabs.forEach(function(t,i){t.addEventListener('click',function(){sel(i)});t.addEventListener('keydown',function(e){var d=e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:e.key==='Home'?-i:e.key==='End'?tabs.length-1-i:0;if(!d)return;e.preventDefault();sel((i+d+tabs.length)%tabs.length,true)})})});
$$('.themed').forEach(function(f){var bs=$$('.themes button',f),ims=$$('img.th',f),cap=$('.thcap',f);
bs.forEach(function(b,i){b.addEventListener('click',function(){bs.forEach(function(x,j){x.setAttribute('aria-pressed',j===i)});ims.forEach(function(m,j){m.hidden=j!==i});cap.textContent=b.getAttribute('data-cap')})})});
var back=null;
function openLb(src,alt,btn){back=btn;var d=document.createElement('div');d.className='lb';d.setAttribute('role','dialog');d.setAttribute('aria-modal','true');d.setAttribute('aria-label','Imagem ampliada');
var im=document.createElement('img');im.src=src;im.alt=alt;var c=document.createElement('button');c.className='btn';c.type='button';c.textContent='Fechar';c.style.cssText='position:fixed;top:calc(12px + env(safe-area-inset-top,0px));right:12px';
d.appendChild(im);d.appendChild(c);document.body.appendChild(d);c.focus();
function close(){document.removeEventListener('keydown',k);d.remove();if(back)back.focus()}
function k(e){if(e.key==='Escape')close();if(e.key==='Tab'){e.preventDefault();c.focus()}}
document.addEventListener('keydown',k);d.addEventListener('click',close)}
document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('.zoom');if(!b)return;var im=$$('img',b).filter(function(i){return !i.hidden})[0];if(im)openLb(im.currentSrc||im.src,im.alt,b)});
var cb=$('#ok'),btn=$('#formbtn');
if(cb&&btn){var C=window.MANUSCRITO_CONFIG||{};var SW={literario:'Manuscrito Literário',academico:'Manuscrito Acadêmico',digital:'Manuscrito Digital',estudio:'Manuscrito Estúdio',diagrama:'Manuscrito Diagrama',suite:'Manuscrito Suite'};
var sw=new URLSearchParams(location.search).get('software');
function url(){if(C.entrySoftware&&sw&&SW[sw])return C.formLong+'?usp=pp_url&entry.'+C.entrySoftware+'='+encodeURIComponent(SW[sw]);return C.formShort}
if(C.entrySoftware&&sw&&SW[sw]){var n=$('#swinfo');if(n){n.textContent='Software de interesse já selecionado no formulário: '+SW[sw]+'.';n.hidden=false}}
function upd(){if(cb.checked){btn.href=url();btn.removeAttribute('aria-disabled');btn.classList.remove('off')}else{btn.removeAttribute('href');btn.setAttribute('aria-disabled','true');btn.classList.add('off')}}
cb.addEventListener('change',upd);btn.addEventListener('click',function(e){if(!cb.checked)e.preventDefault()});upd()}
})();
