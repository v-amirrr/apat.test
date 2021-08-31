// // !change background of first page
// // const bg1 = document.querySelector("#bg1");
// // const bg2 = document.querySelector("#bg2");
// // const bg3 = document.querySelector("#bg3");

// // setTimeout(() => {
// //     bg1.className = "close";
// //     bg2.className = "open";
// //     bg3.className = "close";
// // }, 15000);

// // setTimeout(() => {
// //     bg1.className = "close";
// //     bg2.className = "close";
// //     bg3.className = "open";
// // }, 30000);

// // setTimeout(() => {
// //     bg1.className = "open";
// //     bg2.className = "close";
// //     bg3.className = "close";
// // }, 45000);

// // setInterval(() => {
// //     setTimeout(() => {
// //         bg1.className = "close";
// //         bg2.className = "open";
// //         bg3.className = "close";
// //     }, 15000);

// //     setTimeout(() => {
// //         bg1.className = "close";
// //         bg2.className = "close";
// //         bg3.className = "open";
// //     }, 30000);

// //     setTimeout(() => {
// //         bg1.className = "open";
// //         bg2.className = "close";
// //         bg3.className = "close";
// //     }, 45000);
// // }, 65000);




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

setTimeout(() => {
    document.body.style.opacity = 1;
}, 3000);




// ! pages
const nav = document.querySelector("#home nav");
const logo = document.querySelector("#logo");
const text = document.querySelector("#text");

const home = document.querySelector("#home");
const services = document.querySelector("#services");
const aboutUs = document.querySelector("#about-us");
const contactUs = document.querySelector("#contact-us");

const homeButton = document.querySelectorAll("#home-button");
const servicesButton = document.querySelectorAll("#services-button");
const aboutUsButton = document.querySelectorAll("#about-us-button");
const contactUsButton = document.querySelectorAll("#contact-us-button");

// ! services page
servicesButton.forEach(item => {
    item.addEventListener("click", e => {
        e.preventDefault();
        
        homeButton.forEach(btn => {
            btn.style.color = "var(--p)";
            btn.style.backgroundColor = "";
        });
        servicesButton.forEach(btn => {
            btn.style.color = "#fff";
            btn.style.backgroundColor = "var(--hover)";
        });
        aboutUsButton.forEach(btn => {
            btn.style.color = "var(--p)";
            btn.style.backgroundColor = "";
        });
        contactUsButton.forEach(btn => {
            btn.style.backgroundColor = "";
            btn.style.color = "var(--p)";
        });

        home.style.backgroundColor = "#00000077";
        nav.style.top = "2rem";
    
        logo.classList.add("animate__animated", "animate__fadeOutDown");
        text.classList.add("animate__animated", "animate__fadeOutDown");
    
        aboutUs.classList.remove("animate__animated", "animate__fadeInUp");
        aboutUs.classList.add("animate__animated", "animate__fadeOutDown");
    
        contactUs.classList.remove("animate__animated", "animate__fadeInUp");
        contactUs.classList.add("animate__animated", "animate__fadeOutDown");
    
        services.style.visibility = "visible";
        services.classList.remove("animate__animated", "animate__fadeOutDown");
        services.classList.add("animate__animated", "animate__fadeInUp");

        document.querySelector("#mobile-nav").classList.add("animate__animated", "animate__fadeOut");
        document.querySelector(".blur-effect").style.opacity = 0;
        setTimeout(() => {        
            document.querySelector("#mobile-nav").classList.remove("animate__animated", "animate__fadeIn");
            document.querySelector("#mobile-nav").style.opacity = "0";
            document.querySelector("#mobile-nav").style.display = "none";
            document.querySelector(".blur-effect").style.display = "none";
        }, 1000);
    });
});

// ! home page
homeButton.forEach(item => {
    item.addEventListener("click", e => {
        e.preventDefault();

        homeButton.forEach(btn => {
            btn.style.color = "#fff";
            btn.style.backgroundColor = "(--hover)";
        });

        servicesButton.forEach(btn => {
            btn.style.color = "var(--p)";
            btn.style.backgroundColor = "";
        });

        aboutUsButton.forEach(btn => {
            btn.style.color = "var(--p)";
            btn.style.backgroundColor = "";
        });

        contactUsButton.forEach(btn => {
            btn.style.color = "var(--p)";
            btn.style.backgroundColor = "";
        });
    
        home.style.backgroundColor = "#00000066";
        nav.style.top = "9.5rem";
    
        logo.classList.remove("animate__animated", "animate__fadeOutDown");
        text.classList.remove("animate__animated", "animate__fadeOutDown");
        logo.classList.add("animate__animated", "animate__fadeInUp");
        text.classList.add("animate__animated", "animate__fadeInUp");
    
        aboutUs.classList.remove("animate__animated", "animate__fadeInUp");
        aboutUs.classList.add("animate__animated", "animate__fadeOutDown");
        
        services.classList.remove("animate__animated", "animate__fadeInUp");
        services.classList.add("animate__animated", "animate__fadeOutDown");
    
        contactUs.classList.remove("animate__animated", "animate__fadeInUp");
        contactUs.classList.add("animate__animated", "animate__fadeOutDown");

        document.querySelector("#mobile-nav").classList.add("animate__animated", "animate__fadeOut");
        document.querySelector(".blur-effect").style.opacity = 0;
        setTimeout(() => {        
            document.querySelector("#mobile-nav").classList.remove("animate__animated", "animate__fadeIn");
            document.querySelector("#mobile-nav").style.opacity = "0";
            document.querySelector("#mobile-nav").style.display = "none";
            document.querySelector(".blur-effect").style.display = "none";
        }, 1000);
    });
});

// ! about us page
aboutUsButton.forEach(item => {
    item.addEventListener("click", e => {
        e.preventDefault();

        homeButton.forEach(btn => {
            btn.style.color = "var(--p)";
            btn.style.backgroundColor = "";
        });

        servicesButton.forEach(btn => {
            btn.style.color = "var(--p)";
            btn.style.backgroundColor = "";
        });

        aboutUsButton.forEach(btn => {
            btn.style.color = "#fff";
            btn.style.backgroundColor = "var(--hover)";
        });

        contactUsButton.forEach(btn => {
            btn.style.color = "var(--p)";
            btn.style.backgroundColor = "";
        });
    
        home.style.backgroundColor = "#00000077";
        nav.style.top = "2rem";
    
        logo.classList.add("animate__animated", "animate__fadeOutDown");
        text.classList.add("animate__animated", "animate__fadeOutDown");
    
        services.classList.remove("animate__animated", "animate__fadeInUp");
        services.classList.add("animate__animated", "animate__fadeOutDown");
    
        contactUs.classList.remove("animate__animated", "animate__fadeInUp");
        contactUs.classList.add("animate__animated", "animate__fadeOutDown");
    
        aboutUs.style.visibility = "visible";
        aboutUs.classList.remove("animate__animated", "animate__fadeOutDown");
        aboutUs.classList.add("animate__animated", "animate__fadeInUp");

        document.querySelector("#mobile-nav").classList.add("animate__animated", "animate__fadeOut");
        document.querySelector(".blur-effect").style.opacity = 0;
        setTimeout(() => {        
            document.querySelector("#mobile-nav").classList.remove("animate__animated", "animate__fadeIn");
            document.querySelector("#mobile-nav").style.opacity = "0";
            document.querySelector("#mobile-nav").style.display = "none";
            document.querySelector(".blur-effect").style.display = "none";
        }, 1000);
    });
});

// ! contact us page
contactUsButton.forEach(item => {
    item.addEventListener("click", e => {
        e.preventDefault();
    
        homeButton.forEach(btn => {
            btn.style.color = "var(--p)";
            btn.style.backgroundColor = "";
        });
    
        servicesButton.forEach(btn => {
            btn.style.color = "var(--p)";
            btn.style.backgroundColor = "";
        });
    
        aboutUsButton.forEach(btn => {
            btn.style.color = "var(--p)";
            btn.style.backgroundColor = "";
        });
    
        contactUsButton.forEach(btn => {
            btn.style.color = "#fff";
            btn.style.backgroundColor = "var(--hover)";
        });
    
        home.style.backgroundColor = "#00000077";
        nav.style.top = "2rem";
    
        logo.classList.add("animate__animated", "animate__fadeOutDown");
        text.classList.add("animate__animated", "animate__fadeOutDown");
    
        services.classList.remove("animate__animated", "animate__fadeInUp");
        services.classList.add("animate__animated", "animate__fadeOutDown");
    
        aboutUs.classList.remove("animate__animated", "animate__fadeInUp");
        aboutUs.classList.add("animate__animated", "animate__fadeOutDown");
    
        contactUs.style.visibility = "visible";
        contactUs.classList.remove("animate__animated", "animate__fadeOutDown");
        contactUs.classList.add("animate__animated", "animate__fadeInUp");
    
        document.querySelector("#mobile-nav").classList.add("animate__animated", "animate__fadeOut");
        document.querySelector(".blur-effect").style.opacity = 0;
        setTimeout(() => {        
            document.querySelector("#mobile-nav").classList.remove("animate__animated", "animate__fadeIn");
            document.querySelector("#mobile-nav").style.opacity = "0";
            document.querySelector("#mobile-nav").style.display = "none";
            document.querySelector(".blur-effect").style.display = "none";
        }, 1000);
    });
});




// ! services windows
const servicesPart1 = document.querySelector("#services-part1");
const servicesPart2 = document.querySelector("#services-part2");
const servicesPart3 = document.querySelector("#services-part3");

const servicesPart1CloseIcon1 = document.querySelector(".services-window.one span");
const servicesPart1CloseIcon2 = document.querySelector(".services-window.two span");
const servicesPart1CloseIcon3 = document.querySelector(".services-window.three span");

const servicesWindowOne = document.querySelector(".services-window.one");
const servicesWindowTwo = document.querySelector(".services-window.two");
const servicesWindowThree = document.querySelector(".services-window.three");

const servicesWindow = document.querySelector("#services-window");
const blurEffect = document.querySelector(".blur-effect");

servicesPart1.addEventListener("click", () => {
    blurEffect.style.display = "block";
    blurEffect.style.animation = "opacity-blur-ineffect-animation .5s"
    blurEffect.style.opacity = "1";

    servicesWindow.style.zIndex = 6;
    servicesWindowOne.style.transform = "scale(1)";
});

servicesPart1CloseIcon1.addEventListener("click", () => {
    servicesWindowOne.style.transform = "scale(0)";
    
    setTimeout(() => {
        blurEffect.style.animation = "opacity-blur-outeffect-animation .5s"
        blurEffect.style.opacity = "0";
        servicesWindow.style.zIndex = -1;
    }, 500);

    setTimeout(() => {
        blurEffect.style.display = "none";
    }, 1000);
});

servicesPart2.addEventListener("click", () => {
    blurEffect.style.display = "block";
    blurEffect.style.animation = "opacity-blur-ineffect-animation .5s"
    blurEffect.style.opacity = "1";

    servicesWindow.style.zIndex = 6;
    servicesWindowTwo.style.transform = "scale(1)";
});

servicesPart1CloseIcon2.addEventListener("click", () => {
    servicesWindowTwo.style.transform = "scale(0)";
    
    setTimeout(() => {
        blurEffect.style.animation = "opacity-blur-outeffect-animation .5s"
        blurEffect.style.opacity = "0";
        servicesWindow.style.zIndex = -1;
    }, 500);

    setTimeout(() => {
        blurEffect.style.display = "none";
    }, 1000);
});

servicesPart3.addEventListener("click", () => {
    blurEffect.style.display = "block";
    blurEffect.style.animation = "opacity-blur-ineffect-animation .5s"
    blurEffect.style.opacity = "1";

    servicesWindow.style.zIndex = 6;
    servicesWindowThree.style.transform = "scale(1)";
});

servicesPart1CloseIcon3.addEventListener("click", () => {
    servicesWindowThree.style.transform = "scale(0)";
    
    setTimeout(() => {
        blurEffect.style.animation = "opacity-blur-outeffect-animation .5s"
        blurEffect.style.opacity = "0";
        servicesWindow.style.zIndex = -1;
    }, 500);

    setTimeout(() => {
        blurEffect.style.display = "none";
    }, 1000);
});




// ! image slider
const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },

    effect: 'cube',
    cubeEffect: {
      slideShadows: false,
    },

    autoplay: {
        delay: 10000,
    },
});




// ! footer
const date = new Date();
document.querySelector("#footer p").innerHTML = `${date.getFullYear()} &#169; Copyright`;




// ! mobile nav
const mobileButtonOpen = document.querySelector("#nav-mobile-open");
const mobileButtonClose = document.querySelector("#nav-mobile-close");

mobileButtonOpen.addEventListener("click", () => {
    document.querySelector(".blur-effect").style.display = "block";
    setTimeout(() => {
        document.querySelector(".blur-effect").style.opacity = 1;
    }, 500);
    document.querySelector("#mobile-nav").style.display = "flex";
    document.querySelector("#mobile-nav").classList.remove("animate__animated", "animate__fadeOut");
    document.querySelector("#mobile-nav").classList.add("animate__animated", "animate__fadeIn");
    document.querySelector("#mobile-nav").style.opacity = "1";
});

mobileButtonClose.addEventListener("click", () => {
    document.querySelector("#mobile-nav").classList.add("animate__animated", "animate__fadeOut");
    document.querySelector(".blur-effect").style.opacity = 0;
    setTimeout(() => {        
        document.querySelector("#mobile-nav").classList.remove("animate__animated", "animate__fadeIn");
        document.querySelector("#mobile-nav").style.opacity = "0";
        document.querySelector("#mobile-nav").style.display = "none";
        document.querySelector(".blur-effect").style.display = "none";
    }, 1000);
});