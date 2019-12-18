// create two containers, one equal to 20% of screen size and the other equal to 80%
let headerContainer = document.createElement("header");
headerContainer.setAttribute("class", "headerSection");
headerContainer.style.width = "100%";
headerContainer.style.height = "10%";
headerContainer.style.top = "0";
headerContainer.style.margin = "0";
headerContainer.style.backgroundColor = "pink";

let mainContainer = document.createElement("main");
mainContainer.setAttribute("class", "mainSection");
mainContainer.style.width = "100%";
mainContainer.style.height = "90%";
mainContainer.style.bottom = "0";
mainContainer.style.margin = "0";
mainContainer.style.backgroundColor = "blue";

// within the top container add a title h1 element and label it DOM-only etch-a-sketch
let headerTitle = document.createElement("h1");
headerTitle.setAttribute("class","pageTitleHeader");
headerTitle.innerText = "Jimbo's Javascript-only Etch-a-Sketch";
headerTitle.style.margin = "auto";
headerTitle.style.textAlign = "center";
headerTitle.style.fontFamily = "cursive";
headerTitle.style.padding = "0";

// append children
document.body.appendChild(headerContainer);
document.body.appendChild(mainContainer);
headerContainer.appendChild(headerTitle);


