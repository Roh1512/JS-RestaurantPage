import pageLoad from "./Home/pageLoad";
import menuPage from "./Menu/menuPage";
import aboutPage from "./About/aboutPage";
import "./style.css"


//Nav Buttons
const head = document.createElement("div");
head.classList.add("navHead");
const homeBtn = document.createElement("button");
homeBtn.classList.add("navHeadBtn");
homeBtn.innerText = "HOME";
const menuBtn = document.createElement("button");
menuBtn.classList.add("navHeadBtn");
menuBtn.innerText = "MENU";
const aboutBtn = document.createElement("button");
aboutBtn.classList.add("navHeadBtn");
aboutBtn.innerText = "ABOUT";

head.appendChild(homeBtn);
head.appendChild(menuBtn);
head.appendChild(aboutBtn);




const body = document.querySelector('body');
body.appendChild(head);
const homePage = pageLoad();
const menupage = menuPage();
const aboutPage1 = aboutPage();
homeBtn.addEventListener("click", () => {
    body.appendChild(homePage);
    menupage.remove();
    aboutPage1.remove();
    homeBtn.classList.add("active");
    menuBtn.classList.remove("active");
    aboutBtn.classList.remove("active");
});
menuBtn.addEventListener("click", () => {
    body.appendChild(menupage);
    homePage.remove();
    aboutPage1.remove();
    menuBtn.classList.add("active");
    homeBtn.classList.remove("active");
    aboutBtn.classList.remove("active");
});
aboutBtn.addEventListener("click", () => {
    body.appendChild(aboutPage1);
    homePage.remove();
    menupage.remove();
    aboutBtn.classList.add("active");
    homeBtn.classList.remove("active");
    menuBtn.classList.remove("active");
})


window.addEventListener("load",() => {
    body.appendChild(homePage);
    homeBtn.classList.add("active");
})
/* body.appendChild(homePage); */
/* body.appendChild(menupage); */
/* body.appendChild(aboutPage1); */