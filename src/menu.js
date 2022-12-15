//create Element
function createEl(el, classList, content) {
  const elementCreated = document.createElement(`${el}`);
  if (classList !== "none") {
    elementCreated.classList.add(classList);
  }
  elementCreated.textContent = `${content}`;
  return elementCreated;
}

function createMenuItem(title, content, array) {
  const menuItem = createEl("div", "menu-item", "");

  const menuHeader = createEl("div", "menu-header", `${title}`);
  const menuContent = createEl("div", "menu-content", `${content}`);
  const menuIngredients = createEl("div", "menu-ingredients", "");

  const a = createEl("div", "ingredients-item", `${array[0]}`);
  const b = createEl("div", "ingredients-item", `${array[1]}`);
  const c = createEl("div", "ingredients-item", `${array[2]}`);

  menuIngredients.appendChild(a);
  menuIngredients.appendChild(b);
  menuIngredients.appendChild(c);

  menuItem.appendChild(menuHeader);
  menuItem.appendChild(menuContent);
  menuItem.appendChild(menuIngredients);

  return menuItem;
}

export default function createMenu() {
  const menu = createEl("div", "menu", "");

  const item1 = createMenuItem(
    "carbonara",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    ["Spaghetti", "Sauce", "Bacon"]
  );
  const item2 = createMenuItem(
    "carbonara",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    ["Spaghetti", "Sauce", "Bacon"]
  );
  const item3 = createMenuItem(
    "carbonara",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    ["Spaghetti", "Sauce", "Bacon"]
  );

  menu.appendChild(item1);
  menu.appendChild(item2);
  menu.appendChild(item3);

  return menu;
}
