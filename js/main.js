// !change background of first page
const bg1 = document.querySelector("#bg1");
const bg2 = document.querySelector("#bg2");
const bg3 = document.querySelector("#bg3");

setTimeout(() => {
    bg1.className = "close";
    bg2.className = "open";
    bg3.className = "close";
}, 15000);

setTimeout(() => {
    bg1.className = "close";
    bg2.className = "close";
    bg3.className = "open";
}, 30000);

setTimeout(() => {
    bg1.className = "open";
    bg2.className = "close";
    bg3.className = "close";
}, 45000);

setInterval(() => {
    setTimeout(() => {
        bg1.className = "close";
        bg2.className = "open";
        bg3.className = "close";
    }, 15000);

    setTimeout(() => {
        bg1.className = "close";
        bg2.className = "close";
        bg3.className = "open";
    }, 30000);

    setTimeout(() => {
        bg1.className = "open";
        bg2.className = "close";
        bg3.className = "close";
    }, 45000);
}, 65000);




// ! change language popup
const language = document.querySelector("#language");
const languageIcon = document.querySelector("#language-icon");
const languageChange = document.querySelector("#language-change");
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
    languageIcon.addEventListener("click", () => {
        if(languageChange.style.opacity == 0){
            languageChange.style.opacity = 1;
            languageChange.classList.remove("animate__rollOut");
            languageChange.classList.add("animate__jackInTheBox");
        }else{
            languageChange.style.opacity = 0;
            languageChange.classList.remove("animate__jackInTheBox");
            languageChange.classList.add("animate__rollOut");
        }
    });
}else{
    // false for not mobile device
    languageIcon.addEventListener("mouseenter", () => {
        languageChange.style.opacity = 1;
        languageChange.classList.remove("animate__rollOut");
        languageChange.classList.add("animate__jackInTheBox");
        language.addEventListener("mousemove", () => {
            languageChange.style.opacity = 1;
        });
    });
    
    language.addEventListener("mouseleave", () => {
        languageChange.classList.remove("animate__jackInTheBox");
        languageChange.classList.add("animate__rollOut");
        languageChange.style.opacity = 0;
    });
}




// ! down icon and up icon
const downIcon = document.querySelector("#down-icon i");
const downLink = document.querySelector("#down-link");
window.onscroll = () => {
    if(pageYOffset > 50){
        
        if(downIcon.className == "bi bi-chevron-double-down"){
            
            downLink.setAttribute("href", "#body");
            downIcon.style.transform = "scale(0)";
            setTimeout(() => {
                downIcon.className = "bi bi-chevron-double-up";
                downIcon.style.transform = "scale(1)";
            }, 200);
            
        }
        
    }else if((downIcon.className == "bi bi-chevron-double-up")){
        
        downLink.setAttribute("href", "#footer");
        downIcon.style.transform = "scale(0)";
        setTimeout(() => {
            downIcon.className = "bi bi-chevron-double-down";
            downIcon.style.transform = "scale(1)";
        }, 200);
        
    }
};




// !load function
function load() {
    document.body.style.opacity = 1;

    setInterval(() => {
        document.querySelector("#text-company-name").classList.add("animation-class");
        setTimeout(() => {
            document.querySelector("#text-company-name").classList.remove("animation-class");
        }, 3000);
    }, 10000);

    document.querySelectorAll("#text-company-name span").forEach(item => {
        setTimeout(() => {
            item.style.color = "#fff";
        }, 3000);
    });
};




// ! pages
const nav = document.querySelector("#home nav");
const logo = document.querySelector("#logo");
const text = document.querySelector("#text");

const home = document.querySelector("#home");
const services = document.querySelector("#services");

const homeButton = document.querySelector("#home-button");
const servicesButton = document.querySelector("#services-button");
const aboutUsButton = document.querySelector("#about-us-button");
const contactUsButton = document.querySelector("#contact-us-button");

// ! services page
servicesButton.addEventListener("click", (e) => {
    e.preventDefault();

    home.style.backgroundColor = "#00000099";
    nav.style.top = "2rem";

    logo.classList.add("animate__animated", "animate__fadeOutDown");
    text.classList.add("animate__animated", "animate__fadeOutDown");

    services.style.visibility = "visible";
    services.classList.remove("animate__animated", "animate__fadeOutDown");
    services.classList.add("animate__animated", "animate__fadeInUp");
});

// ! home page
homeButton.addEventListener("click", (e) => {
    e.preventDefault();

    home.style.backgroundColor = "#00000066";
    nav.style.top = "9.5rem";

    logo.classList.remove("animate__animated", "animate__fadeOutDown");
    text.classList.remove("animate__animated", "animate__fadeOutDown");
    logo.classList.add("animate__animated", "animate__fadeInUp");
    text.classList.add("animate__animated", "animate__fadeInUp");

    services.classList.remove("animate__animated", "animate__fadeInUp");
    services.classList.add("animate__animated", "animate__fadeOutDown");
});

