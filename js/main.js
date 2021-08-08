// !change background of first page
const bg1 = document.querySelector("#bg1");
const bg2 = document.querySelector("#bg2");
setInterval(() => {
    if(bg1.className === "close"){
        bg1.className = "open";
        bg2.className = "close";
    }else{
        bg1.className = "close";
        bg2.className = "open";
    }
}, 20000);


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
        
    }else if ((downIcon.className == "bi bi-chevron-double-up")){
        
        downLink.setAttribute("href", "#services");
        downIcon.style.transform = "scale(0)";
        setTimeout(() => {
            downIcon.className = "bi bi-chevron-double-down";
            downIcon.style.transform = "scale(1)";
        }, 200);
        
    }
};


// !load function
const body = document.querySelector("body");
function load() {
    body.style.opacity = 1;

    setTimeout(() => {
        document.querySelector("#text-company-name").classList.add("animation-class");
    }, 2000);

    document.querySelectorAll("#text-company-name span").forEach(item => {
        setTimeout(() => {
            item.style.color = "#fff";
        }, 3000);
    });

    setTimeout(() => {
        var typed = new Typed('.sentences', {
            strings: ["", "<strong>We make better world for all creatures.</strong>"],
            typeSpeed: 60,
            suffle: true,
            showCursor: false
        });
    }, 3000);
};

setTimeout(() => {
    body.style.opacity = 1;

    setTimeout(() => {
        document.querySelector("#text-company-name").classList.add("animation-class");
    }, 2000);

    document.querySelectorAll("#text-company-name span").forEach(item => {
        setTimeout(() => {
            item.style.color = "#fff";
        }, 3000);
    });

    setTimeout(() => {
        var typed = new Typed('.sentences', {
            strings: ["", "<strong>We make better world for all creatures.</strong>"],
            typeSpeed: 60,
            suffle: true,
            showCursor: false
        });
    }, 3000);
}, 5000);




  