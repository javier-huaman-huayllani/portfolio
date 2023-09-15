//=============== Filter =======================
const filter_tabs=document.querySelectorAll(".filter-btn");
const filter_contents=document.querySelectorAll(".filter [data-content]");


filter_tabs.forEach((tab)=>{
    tab.addEventListener('click',()=>{
        const target=document.querySelector(tab.dataset.target);
        filter_contents.forEach(fc=>{
            fc.classList.remove("active");
        });

        target.classList.add('active');

        filter_tabs.forEach(tab=>{
            tab.classList.remove('active');
         });
        tab.classList.add("active");
    });
});
// ============= Theme =========================
const theme_btn=document.getElementById("theme-btn");
theme_btn.addEventListener("click",()=>{
    const body=document.querySelector("body");
    body.classList.toggle("dark-theme");
   // change icon
    theme_btn.classList.toggle("ri-moon-line"); // moon icon
    theme_btn.classList.toggle("ri-sun-line"); // sun icon
})

//=============Scrool Reveal Animation =========
const sr= ScrollReveal({
    origin:"bottom",
    distance:"150px",
    duration: 2500,
    delay:400
});

sr.reveal('.profile-data .imgBx');
sr.reveal('.profile-data .name',{delay:500});
sr.reveal('.profile-data .profession',{delay:600});
sr.reveal('.profile-data .socials',{delay:700});
sr.reveal('.profile-info ',{interval:100,delay:700});
sr.reveal('.profile-btns ',{delay:800});
sr.reveal('.filter-tabs ',{delay:900});
sr.reveal('.filter-sections',{delay:1000, mobile:true});



//nwe window
function myFunction() {
  let googleDocsURL = 'https://docs.google.com/document/d/1PGoK2inoduXDC27Szf5VzpWeQhvNvhZrqPLqB3INQRw/edit?usp=sharing';

  // Configura las dimensiones de la ventana
  let windowWidth = 720;
  let windowHeight = window.innerHeight;

  // Calcula la posición en el centro de la pantalla
  let windowLeft = (window.screen.width - windowWidth) / 2;
  let windowTop = (window.screen.height - windowHeight) / 2;

  // Construye la cadena de parámetros
  let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=${windowWidth},height=${windowHeight},left=${windowLeft},top=${windowTop}`;

  // Abre la ventana con las dimensiones y la URL especificadas
  window.open(googleDocsURL, 'javier', params);
}
