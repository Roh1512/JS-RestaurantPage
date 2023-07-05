export default pageLoad;
import footer from "../footer";

import heroImg from "./heroImg.jpg";

//Home Page Function
function pageLoad() {
    const content = document.createElement("div");
    content.setAttribute("id","content");
    const header = document.createElement('header');
    const pageHeading = document.createElement('h1');
    pageHeading.innerText = "Restaurant Page"
    header.appendChild(pageHeading);


    const section = document.createElement("section");
    const heroImage = new Image();
    heroImage.src = heroImg;
    heroImage.setAttribute("height","400px");

    const heroTxt = document.createElement("p");
    heroTxt.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ipsum, et quaerat soluta ipsam, quasi quae quam eius repudiandae quis fugiat cum quia nesciunt sed deserunt officiis optio doloribus. Quo placeat architecto, laudantium similique tempora earum quibusdam, harum accusamus non corporis maxime. Assumenda autem, placeat, nulla officia magni vitae hic molestiae alias odio ratione tempora nobis ex inventore labore aspernatur odit eligendi, pariatur deleniti et non est culpa. Sit eligendi ut quisquam deleniti pariatur facilis, veniam sed error similique necessitatibus harum perspiciatis voluptatibus praesentium odio incidunt nulla est, dolor suscipit mollitia tenetur, nihil excepturi! Saepe soluta doloremque explicabo accusantium corporis.";

    section.appendChild(heroImage);
    section.appendChild(heroTxt);






    content.appendChild(header);
    content.appendChild(section);  
    content.appendChild(footer());  
    return content;
}
