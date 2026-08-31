const menuToggle=document.querySelector('.menu');
const nav=document.querySelector('.nav nav');
menuToggle.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

let lang='en';
const langBtn=document.getElementById('langBtn');
function setLanguage(next){
  lang=next;
  document.documentElement.lang=lang;
  document.querySelectorAll('[data-en][data-zh]').forEach(el=>{
    el.textContent=el.dataset[lang];
  });
  langBtn.textContent=lang==='en'?'中文':'EN';
}
langBtn.addEventListener('click',()=>setLanguage(lang==='en'?'zh':'en'));

document.getElementById('contactForm').addEventListener('submit',function(e){
  e.preventDefault();
  const name=document.getElementById('name').value.trim();
  const age=document.getElementById('age').value.trim();
  const interest=document.getElementById('interest').value;
  const message=document.getElementById('message').value.trim();
  const subject=encodeURIComponent('Teacher Gelley Inquiry - '+interest);
  const body=encodeURIComponent(`Hello Teacher Gelley,

Name: ${name}
Student age: ${age || 'Not provided'}
Interested in: ${interest}

Message:
${message}`);
  window.location.href=`mailto:osmanmagelle5@gmail.com?subject=${subject}&body=${body}`;
});
