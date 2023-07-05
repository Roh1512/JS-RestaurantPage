export default aboutPage;
import footer from "../footer";

function aboutPage() {
    const content = document.createElement("div");
    content.setAttribute("id","content");

    const aboutDiv = document.createElement("div");
    const aboutHeading = document.createElement("h1");
    aboutHeading.textContent = "About us";
    const aboutText = document.createElement("p");
    aboutText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    aboutDiv.appendChild(aboutHeading);
    aboutDiv.appendChild(aboutText);


    const contactDiv = document.createElement("div");
    const contactHead = document.createElement("h2");
    contactHead.textContent = "Contact Information";

    const contactNo = document.createElement("p");
    contactNo.textContent = "555-555-5555";
    const contactEmail = document.createElement("p");
    contactEmail.textContent = "abcdefg@hikj.com";
    contactDiv.appendChild(contactHead);
    contactDiv.appendChild(contactNo);
    contactDiv.appendChild(contactEmail);


    content.appendChild(aboutDiv);
    content.appendChild(contactDiv);
    content.appendChild(footer());
    return content;
}