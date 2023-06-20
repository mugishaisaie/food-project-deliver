// change navbar style on scroll

window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})


// show/ hide faq answers

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
        // chane icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === ' fas fa-plus'){
            icon.className = "fas fa-minus "
        } else {
            icon.className = "fas fa-plus";
        }
    })
})

// show / hide nav menu

const menu = document.querySelector(".nav-menu");
const menubtn = document.querySelector("#open-btn");
const closebtn = document.querySelector("#close-btn");

menubtn.addEventListener('click', () =>{
    menu.style.display = "flex";
    closebtn.style.display = "inline-block";
    menubtn.style.display = "none"; 
})

//close nav menu

const closeNav = () =>{
    menu.style.display = "none";
    closebtn.style.display = "none";
    menubtn.style.display = "inline-block"; 

}

closebtn.addEventListener('click', closeNav);