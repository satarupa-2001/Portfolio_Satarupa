const primaryNav=document.querySelector('.primary-navigation');
const mobileNav=document.querySelector('.mobile-nav');

mobileNav.addEventListener('click',() => {
    const visibility=primaryNav.getAttribute("data-visible");
    if(visibility==="false"){
        primaryNav.setAttribute("data-visible",true);
        mobileNav.setAttribute("aria-expanded",true);
        
    }
    else if(visibility==="true"){
        primaryNav.setAttribute("data-visible",false); 
        mobileNav.setAttribute("aria-expanded",false);
        
    }
});
var btn_diva = document.getElementById("btn_diva");
var btn_divb = document.getElementById("btn_divb");
var diva = document.getElementById("diva");
var divb = document.getElementById("divb");
btn_diva.addEventListener('click',()=>{
    diva.style.display='block';
    divb.style.display='none';
    btn_diva.style.background='black';
    btn_diva.style.color='white';
    btn_divb.style.background='none';
    btn_divb.style.color='black';
});
btn_divb.addEventListener('click', ()=>{
    diva.style.display='none';
    divb.style.display='block';
    btn_divb.style.background='black';
    btn_divb.style.color='white';
    btn_diva.style.background='none';
    btn_diva.style.color='black';
});
