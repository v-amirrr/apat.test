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
const languageChange = document.querySelector("#language-change");
language.addEventListener("click", () => {
    if(languageChange.style.opacity == 1){
        languageChange.style.opacity = 0;
        languageChange.classList.remove("animate__jackInTheBox");
        languageChange.classList.add("animate__rollOut");
    }else{
        languageChange.style.opacity = 1;
        languageChange.classList.remove("animate__rollOut");
        languageChange.classList.add("animate__jackInTheBox");
    }
});


// !load function
const body = document.querySelector("body");
function load() {
    setTimeout(() => {
        body.style.opacity = 1;
        document.querySelector("#text").className = "animate__animated animate__flipInX";
        setTimeout(() => {
            document.querySelector("#text").className = "";
            document.querySelector("#company-name").style.backdropFilter = "blur(10px)";
        }, 2000);

        document.querySelector("#language").className = "animate__animated animate__lightSpeedInRight animate__delay-1s";
        document.querySelectorAll("#company-name span").forEach(item => {
            setTimeout(() => {
                item.style.color = "#fff";
            }, 3000);
        });
        // !scroll reveal
    }, 500);
}

setTimeout(() => {
    body.style.opacity = 1;
}, 3000);


// ! down and up icon
window.onscroll = () => {
    if(window.pageYOffset > 50){
        if(document.querySelector("#down i").className != "fas fa-hand-point-up"){
            document.querySelector("#down-link").setAttribute("href", "#body");
            document.querySelector("#down i").style.transform = "scale(0)";
            setTimeout(() => {
                document.querySelector("#down i").className = "fas fa-hand-point-up";
            }, 300);
            setTimeout(() => {
                document.querySelector("#down i").style.transform = "scale(1)";
            }, 300);
        }
    }else{
        if(document.querySelector("#down i").className != "fas fa-hand-point-down"){
            document.querySelector("#down-link").setAttribute("href", "#services");
            document.querySelector("#down i").style.transform = "scale(0)";
            setTimeout(() => {
                document.querySelector("#down i").className = "fas fa-hand-point-down";
            }, 300);
            setTimeout(() => {
                document.querySelector("#down i").style.transform = "scale(1)";
            }, 300);
        }
    }
};