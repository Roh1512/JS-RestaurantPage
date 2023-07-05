//Menu page
export default menuPage;
import footer from "../footer";

import PeachFizzImg from "./peachFizz.jpg";
import FrozenAppleMargerita from "./FrozenAppleMargarita.jpg";
import ChickenPieImg from "./ChickenPie.jpg";
import ZucchiniSliceImg from "./ZucchiniSlice.jpg";

function menuPage() {
    const content = document.createElement("div");
    content.setAttribute("id","content");

    const header = document.createElement("header");
    const menuHeading = document.createElement("h1");
    menuHeading.textContent = "Menu";
    header.appendChild(menuHeading);


    //Menu section
    const section = document.createElement("section");
    //beverages Section
    const beverages = document.createElement("div");
    const bevHeading = document.createElement("h1");
    bevHeading.textContent = "Beverages";
    beverages.appendChild(bevHeading);

    //PeachFizz
    const peachFizz = document.createElement("div");
    const peachFizzHead = document.createElement("h3");
    peachFizzHead.textContent = "Peach Fizz";
    const peachFizzImage = new Image();
    peachFizzImage.src = PeachFizzImg;
    peachFizzImage.setAttribute("height","300px");

    peachFizz.appendChild(peachFizzHead);
    peachFizz.appendChild(peachFizzImage);



    //Frozen apple margarita
    const frozenApple = document.createElement("div");
    const frozenAppleHead = document.createElement("h3");
    frozenAppleHead.textContent = "Frozen apple margarita";

    const frozenAppleImg = new Image();
    frozenAppleImg.src = FrozenAppleMargerita;
    frozenAppleImg.setAttribute("height", "300px");

    frozenApple.appendChild(frozenAppleHead)
    frozenApple.appendChild(frozenAppleImg)



    beverages.appendChild(peachFizz);
    beverages.appendChild(frozenApple);


    section.appendChild(beverages);
    //Appending Beverage

    //Dishes
    const dishes = document.createElement("div");
    const dishesHead = document.createElement("h1")
    dishesHead.textContent = "Dishes";
    dishes.appendChild(dishesHead);

    //ChickenPie
    const chickenPie = document.createElement("div");
    const chickenPieHead = document.createElement("h3");
    chickenPieHead.textContent = "Chicken Pie";
    const chickenPieimage = new Image();
    chickenPieimage.src = ChickenPieImg;
    chickenPieimage.setAttribute("height","300px");

    chickenPie.appendChild(chickenPieHead);
    chickenPie.appendChild(chickenPieimage);

    //Zucchini Slice
    const zucchiniSliceDiv = document.createElement("div");
    const zucchiniSliceHead = document.createElement("h1");
    zucchiniSliceHead.textContent = "Zucchini Slice";
    const zucchiniSliceImage = new Image();
    zucchiniSliceImage.src = ZucchiniSliceImg;
    zucchiniSliceImage.setAttribute("height","300px");

    zucchiniSliceDiv.appendChild(zucchiniSliceHead);
    zucchiniSliceDiv.appendChild(zucchiniSliceImage);

    dishes.appendChild(chickenPie);
    dishes.appendChild(zucchiniSliceDiv);
    section.appendChild(dishes);

    
    

    content.appendChild(header);
    content.appendChild(section);
    content.appendChild(footer());
    return content;
}