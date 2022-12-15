import createHome from "./home.js";
import createMenu from "./menu.js";
import createContact from "./contact.js";

function createHeader() {
  //create Github Link
  const githubEl = createEl("div", "links", "");
  const linkgithub = createEl("a", "none", "Github");
  linkgithub.setAttribute("href", "https://github.com/SirPopper");
  linkgithub.setAttribute("target", "_blank");
  githubEl.appendChild(linkgithub);

  //create Restaurant title
  const headerEl = createEl("div", "header", "WINTERFUL RESTAURANT");
  headerEl.addEventListener("click", () => {
    const home = document.querySelector(".home");
    const menu = document.querySelector(".menu");
    const contact = document.querySelector(".contact");
    home.style.display = "grid";
    menu.style.display = "none";
    contact.style.display = "none";
  });

  //social button
  const socialEl = createEl("div", "links", "");
  const socialLink = createEl("a", "none", "Socials");
  socialLink.setAttribute(
    "href",
    "https://www.linkedin.com/in/daniel-handojo-b46563165/"
  );
  socialLink.setAttribute("target", "_blank");
  socialEl.appendChild(socialLink);

  const headerContainerEl = createEl("div", "header-container", "");
  headerContainerEl.appendChild(githubEl);
  headerContainerEl.appendChild(headerEl);
  headerContainerEl.appendChild(socialEl);

  return headerContainerEl;
}

function createSide() {
  const homeNr = createEl("div", "number", "01");
  const homeContent = createEl("div", "nav-item", "HOME");
  const menuNr = createEl("div", "number", "02");
  const menuContent = createEl("div", "nav-item", "MENU");
  const contactNr = createEl("div", "number", "03");
  const contactContent = createEl("div", "nav-item", "CONTACT");

  const navigation = createEl("div", "navigation", "");
  navigation.appendChild(homeNr);
  navigation.appendChild(homeContent);
  navigation.appendChild(menuNr);
  navigation.appendChild(menuContent);
  navigation.appendChild(contactNr);
  navigation.appendChild(contactContent);

  const side = createEl("div", "side", "");
  side.appendChild(navigation);
  return side;
}

function createWebWrapper() {
  const wrapper = createEl("div", "web-wrapper", "");

  wrapper.appendChild(createHome());
  wrapper.appendChild(createMenu());
  wrapper.appendChild(createContact());

  return wrapper;
}

//function to create element
export function createEl(el, classList, content) {
  const elementCreated = document.createElement(`${el}`);
  if (classList !== "none") {
    elementCreated.classList.add(classList);
  }
  elementCreated.textContent = `${content}`;
  return elementCreated;
}

//function to switch between navigation
function navPressed() {
  const nav = document.querySelectorAll(".nav-item");

  nav.forEach((item) => {
    item.addEventListener("click", (e) => {
      const home = document.querySelector(".home");
      const menu = document.querySelector(".menu");
      const contact = document.querySelector(".contact");
      console.log(e.target.textContent);
      if (e.target.textContent == "HOME") {
        console.log(home);
        home.style.display = "grid";
        menu.style.display = "none";
        contact.style.display = "none";
      } else if (e.target.textContent == "MENU") {
        console.log(menu);
        home.style.display = "none";
        menu.style.display = "grid";
        contact.style.display = "none";
      } else if (e.target.textContent == "CONTACT") {
        console.log(contact);
        home.style.display = "none";
        menu.style.display = "none";
        contact.style.display = "grid";
      }
    });
  });
}

export default function initializeWebsite() {
  const website = document.getElementById("content");

  website.appendChild(createHeader());
  website.appendChild(createSide());
  website.appendChild(createWebWrapper());

  navPressed();
}
