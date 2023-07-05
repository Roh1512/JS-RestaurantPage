export default footer;
function footer() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");
    const footerNav = document.createElement("nav");

    const loc1 = document.createElement("h5");
    loc1.textContent = "Location1";
    const loc2 = document.createElement("h5");
    loc2.textContent = "Location2";
    const loc3 = document.createElement("h5");
    loc3.textContent = "Location3";

    footer.appendChild(loc1);
    footer.appendChild(loc2);
    footer.appendChild(loc3);

    return footer;
}