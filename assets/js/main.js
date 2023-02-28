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
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
    width=480,height=0`;
    
    open("assets/doc/cv_jwhh.pdf", "javier", params);
    
     
    }