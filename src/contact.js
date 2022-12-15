function createEl(el, classList, content) {
  const elementCreated = document.createElement(`${el}`);
  if (classList !== "none") {
    elementCreated.classList.add(classList);
  }
  elementCreated.textContent = `${content}`;
  return elementCreated;
}

export default function createContact() {
  const contact = createEl("div", "contact", "");

  const contactTitle = createEl("div", "contact-title", "Contact");
  const phone = createEl("div", "phone", "Phone +101 101 101");
  const address = createEl(
    "div",
    "address",
    " Melbourne Boulevard <br /> Nonaffordable Food 2 <br /> 11111 Disney Land"
  );

  contact.appendChild(contactTitle);
  contact.appendChild(phone);
  contact.appendChild(address);

  return contact;
}
