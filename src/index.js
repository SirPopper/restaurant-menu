import "./style.css";

function printing() {
  const el = document.createElement("div");

  el.textContent = "Hello I am Danny";

  console.log("is this working?");
  return el;
}

document.body.appendChild(printing());