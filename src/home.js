//function to create element
function createEl(el, classList, content) {
  const elementCreated = document.createElement(`${el}`);
  if (classList !== "none") {
    elementCreated.classList.add(classList);
  }
  elementCreated.textContent = `${content}`;
  return elementCreated;
}

export default function createHome() {
  const homeTitle = createEl("div", "home-title", "Cozy & Delicious");
  const homeContent = createEl(
    "div",
    "home-content",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
  );
  const imgContainer = createEl("div", "img-container", "");
  const imgArt = document.createElement("img");
  imgArt.src = "../src/winter.jpg";
  imgArt.classList.add("home-pic");
  imgContainer.appendChild(imgArt);

  const home = createEl("div", "home", "");
  home.appendChild(homeTitle);
  home.appendChild(homeContent);
  home.appendChild(imgContainer);

  return home;
}
