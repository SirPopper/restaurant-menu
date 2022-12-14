document.body.appendChild(
  (function () {
    const n = document.createElement("div");
    return (
      (n.textContent = "Hello I am Danny"), console.log("is this working?"), n
    );
  })()
);
