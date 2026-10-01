const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation')});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation')}));document.getElementById('year').textContent=new Date().getFullYear();
function initSlideshow(prefix,folder,filePrefix,total,label){
  const image=document.getElementById(prefix+'-slide-image');
  const count=document.getElementById(prefix+'-slide-count');
  let index=0;
  function show(next){
    const nextIndex=(next+total)%total;
    const src='assets/'+folder+'/'+filePrefix+'-'+String(nextIndex+1).padStart(2,'0')+'.jpg';
    const preload=new Image();
    image.classList.add('is-changing');
    preload.onload=()=>{
      index=nextIndex;
      image.src=src;
      image.alt=label+' photo '+String(index+1).padStart(2,'0')+' of '+String(total).padStart(2,'0')+' from Kankia Apple Store';
      count.textContent=String(index+1).padStart(2,'0')+' / '+String(total).padStart(2,'0');
      image.classList.remove('is-changing');
    };
    preload.onerror=()=>{
      image.classList.remove('is-changing');
      console.error('Could not load slideshow image:',src);
    };
    preload.src=src;
  }
  document.getElementById(prefix+'-previous').addEventListener('click',()=>show(index-1));
  document.getElementById(prefix+'-next').addEventListener('click',()=>show(index+1));
  window.setInterval(()=>show(index+1),4000);
}
initSlideshow('phone','phones','device',20,'Phone');
initSlideshow('laptop','laptops','laptop',3,'Laptop');
initSlideshow('airpods','airpods','airpods',2,'AirPods');