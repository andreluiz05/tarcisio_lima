// ======================================================
// 1. MENU MOBILE
// ======================================================
const btn = document.getElementById('btnMenu');
const menu = document.getElementById('menuTopo');
const fundo = document.getElementById('fundoEscuro');
const menuLinks = document.querySelectorAll('.menu-topo a');

function toggleMenu() {
    menu.classList.toggle('ativo');
    fundo.classList.toggle('ativo');
    btn.textContent = menu.classList.contains('ativo') ? '✕' : '☰';
}
if (btn) btn.onclick = toggleMenu;
if (fundo) fundo.onclick = toggleMenu;
menuLinks.forEach(link => { link.onclick = () => { if(menu.classList.contains('ativo')) toggleMenu(); }; });




// ======================================================
// 3. ANIMAÇÕES JS-SCROLL
// ======================================================
const elementosParaAnimar = document.querySelectorAll('.agenda > *, .videos > *, .sobre > *, .contato > *');
elementosParaAnimar.forEach(el => el.classList.add('js-scroll'));

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('ativo');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0, rootMargin: "0px 0px -50px 0px" });

elementosParaAnimar.forEach((el) => observer.observe(el));
