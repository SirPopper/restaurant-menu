(() => {
  "use strict";
  function e(e, n, t) {
    const i = document.createElement(`${e}`);
    return "none" !== n && i.classList.add(n), (i.textContent = `${t}`), i;
  }
  function n(e, n, t) {
    const i = document.createElement(`${e}`);
    return "none" !== n && i.classList.add(n), (i.textContent = `${t}`), i;
  }
  function t(e, t, i) {
    const d = n("div", "menu-item", ""),
      o = n("div", "menu-header", `${e}`),
      a = n("div", "menu-content", `${t}`),
      s = n("div", "menu-ingredients", ""),
      p = n("div", "ingredients-item", `${i[0]}`),
      r = n("div", "ingredients-item", `${i[1]}`),
      l = n("div", "ingredients-item", `${i[2]}`);
    return (
      s.appendChild(p),
      s.appendChild(r),
      s.appendChild(l),
      d.appendChild(o),
      d.appendChild(a),
      d.appendChild(s),
      d
    );
  }
  function i(e, n, t) {
    const i = document.createElement(`${e}`);
    return "none" !== n && i.classList.add(n), (i.textContent = `${t}`), i;
  }
  function d(e, n, t) {
    const i = document.createElement(`${e}`);
    return "none" !== n && i.classList.add(n), (i.textContent = `${t}`), i;
  }
  !(function () {
    const o = document.getElementById("content");
    o.appendChild(
      (function () {
        const e = d("div", "links", ""),
          n = d("a", "none", "Github");
        n.setAttribute("href", "https://github.com/SirPopper"),
          n.setAttribute("target", "_blank"),
          e.appendChild(n);
        const t = d("div", "header", "WINTERFUL RESTAURANT");
        t.addEventListener("click", () => {
          const e = document.querySelector(".home"),
            n = document.querySelector(".menu"),
            t = document.querySelector(".contact");
          (e.style.display = "grid"),
            (n.style.display = "none"),
            (t.style.display = "none");
        });
        const i = d("div", "links", ""),
          o = d("a", "none", "Socials");
        o.setAttribute(
          "href",
          "https://www.linkedin.com/in/daniel-handojo-b46563165/"
        ),
          o.setAttribute("target", "_blank"),
          i.appendChild(o);
        const a = d("div", "header-container", "");
        return a.appendChild(e), a.appendChild(t), a.appendChild(i), a;
      })()
    ),
      o.appendChild(
        (function () {
          const e = d("div", "number", "01"),
            n = d("div", "nav-item", "HOME"),
            t = d("div", "number", "02"),
            i = d("div", "nav-item", "MENU"),
            o = d("div", "number", "03"),
            a = d("div", "nav-item", "CONTACT"),
            s = d("div", "navigation", "");
          s.appendChild(e),
            s.appendChild(n),
            s.appendChild(t),
            s.appendChild(i),
            s.appendChild(o),
            s.appendChild(a);
          const p = d("div", "side", "");
          return p.appendChild(s), p;
        })()
      ),
      o.appendChild(
        (function () {
          const o = d("div", "web-wrapper", "");
          return (
            o.appendChild(
              (function () {
                const n = e("div", "home-title", "Cozy & Delicious"),
                  t = e(
                    "div",
                    "home-content",
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
                  ),
                  i = e("div", "img-container", ""),
                  d = document.createElement("img");
                (d.src = "../src/winter.jpg"),
                  d.classList.add("home-pic"),
                  i.appendChild(d);
                const o = e("div", "home", "");
                return o.appendChild(n), o.appendChild(t), o.appendChild(i), o;
              })()
            ),
            o.appendChild(
              (function () {
                const e = n("div", "menu", ""),
                  i = t(
                    "carbonara",
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                    ["Spaghetti", "Sauce", "Bacon"]
                  ),
                  d = t(
                    "carbonara",
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                    ["Spaghetti", "Sauce", "Bacon"]
                  ),
                  o = t(
                    "carbonara",
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                    ["Spaghetti", "Sauce", "Bacon"]
                  ),
                  a = t(
                    "carbonara",
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                    ["Spaghetti", "Sauce", "Bacon"]
                  );
                return (
                  e.appendChild(i),
                  e.appendChild(d),
                  e.appendChild(o),
                  e.appendChild(a),
                  e
                );
              })()
            ),
            o.appendChild(
              (function () {
                const e = i("div", "contact", ""),
                  n = i("div", "contact-title", "Contact"),
                  t = i("div", "phone", "Phone +101 101 101"),
                  d = i(
                    "div",
                    "address",
                    "Melbourne Boulevard <br /> Nonaffordable Food 2 <br /> 11111 Disney Land"
                  );
                return e.appendChild(n), e.appendChild(t), e.appendChild(d), e;
              })()
            ),
            o
          );
        })()
      ),
      document.querySelectorAll(".nav-item").forEach((e) => {
        e.addEventListener("click", (e) => {
          const n = document.querySelector(".home"),
            t = document.querySelector(".menu"),
            i = document.querySelector(".contact");
          console.log(e.target.textContent),
            "HOME" == e.target.textContent
              ? (console.log(n),
                (n.style.display = "grid"),
                (t.style.display = "none"),
                (i.style.display = "none"))
              : "MENU" == e.target.textContent
              ? (console.log(t),
                (n.style.display = "none"),
                (t.style.display = "grid"),
                (i.style.display = "none"))
              : "CONTACT" == e.target.textContent &&
                (console.log(i),
                (n.style.display = "none"),
                (t.style.display = "none"),
                (i.style.display = "grid"));
        });
      });
  })(),
    console.log("is this working?");
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMxQixHQUNBLEdBWU4sQ0N0SEFvQyxHQUVBSCxRQUFRQyxJQUFJLG1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1tZW51Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1tZW51Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1tZW51Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1tZW51Ly4vc3JjL3dlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1tZW51Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vZnVuY3Rpb24gdG8gY3JlYXRlIGVsZW1lbnRcbmZ1bmN0aW9uIGNyZWF0ZUVsKGVsLCBjbGFzc0xpc3QsIGNvbnRlbnQpIHtcbiAgY29uc3QgZWxlbWVudENyZWF0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke2VsfWApO1xuICBpZiAoY2xhc3NMaXN0ICE9PSBcIm5vbmVcIikge1xuICAgIGVsZW1lbnRDcmVhdGVkLmNsYXNzTGlzdC5hZGQoY2xhc3NMaXN0KTtcbiAgfVxuICBlbGVtZW50Q3JlYXRlZC50ZXh0Q29udGVudCA9IGAke2NvbnRlbnR9YDtcbiAgcmV0dXJuIGVsZW1lbnRDcmVhdGVkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVIb21lKCkge1xuICBjb25zdCBob21lVGl0bGUgPSBjcmVhdGVFbChcImRpdlwiLCBcImhvbWUtdGl0bGVcIiwgXCJDb3p5ICYgRGVsaWNpb3VzXCIpO1xuICBjb25zdCBob21lQ29udGVudCA9IGNyZWF0ZUVsKFxuICAgIFwiZGl2XCIsXG4gICAgXCJob21lLWNvbnRlbnRcIixcbiAgICBcIkxvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeSdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suIFwiXG4gICk7XG4gIGNvbnN0IGltZ0NvbnRhaW5lciA9IGNyZWF0ZUVsKFwiZGl2XCIsIFwiaW1nLWNvbnRhaW5lclwiLCBcIlwiKTtcbiAgY29uc3QgaW1nQXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1nQXJ0LnNyYyA9IFwiLi4vc3JjL3dpbnRlci5qcGdcIjtcbiAgaW1nQXJ0LmNsYXNzTGlzdC5hZGQoXCJob21lLXBpY1wiKTtcbiAgaW1nQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZ0FydCk7XG5cbiAgY29uc3QgaG9tZSA9IGNyZWF0ZUVsKFwiZGl2XCIsIFwiaG9tZVwiLCBcIlwiKTtcbiAgaG9tZS5hcHBlbmRDaGlsZChob21lVGl0bGUpO1xuICBob21lLmFwcGVuZENoaWxkKGhvbWVDb250ZW50KTtcbiAgaG9tZS5hcHBlbmRDaGlsZChpbWdDb250YWluZXIpO1xuXG4gIHJldHVybiBob21lO1xufVxuIiwiLy9jcmVhdGUgRWxlbWVudFxuZnVuY3Rpb24gY3JlYXRlRWwoZWwsIGNsYXNzTGlzdCwgY29udGVudCkge1xuICBjb25zdCBlbGVtZW50Q3JlYXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7ZWx9YCk7XG4gIGlmIChjbGFzc0xpc3QgIT09IFwibm9uZVwiKSB7XG4gICAgZWxlbWVudENyZWF0ZWQuY2xhc3NMaXN0LmFkZChjbGFzc0xpc3QpO1xuICB9XG4gIGVsZW1lbnRDcmVhdGVkLnRleHRDb250ZW50ID0gYCR7Y29udGVudH1gO1xuICByZXR1cm4gZWxlbWVudENyZWF0ZWQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKHRpdGxlLCBjb250ZW50LCBhcnJheSkge1xuICBjb25zdCBtZW51SXRlbSA9IGNyZWF0ZUVsKFwiZGl2XCIsIFwibWVudS1pdGVtXCIsIFwiXCIpO1xuXG4gIGNvbnN0IG1lbnVIZWFkZXIgPSBjcmVhdGVFbChcImRpdlwiLCBcIm1lbnUtaGVhZGVyXCIsIGAke3RpdGxlfWApO1xuICBjb25zdCBtZW51Q29udGVudCA9IGNyZWF0ZUVsKFwiZGl2XCIsIFwibWVudS1jb250ZW50XCIsIGAke2NvbnRlbnR9YCk7XG4gIGNvbnN0IG1lbnVJbmdyZWRpZW50cyA9IGNyZWF0ZUVsKFwiZGl2XCIsIFwibWVudS1pbmdyZWRpZW50c1wiLCBcIlwiKTtcblxuICBjb25zdCBhID0gY3JlYXRlRWwoXCJkaXZcIiwgXCJpbmdyZWRpZW50cy1pdGVtXCIsIGAke2FycmF5WzBdfWApO1xuICBjb25zdCBiID0gY3JlYXRlRWwoXCJkaXZcIiwgXCJpbmdyZWRpZW50cy1pdGVtXCIsIGAke2FycmF5WzFdfWApO1xuICBjb25zdCBjID0gY3JlYXRlRWwoXCJkaXZcIiwgXCJpbmdyZWRpZW50cy1pdGVtXCIsIGAke2FycmF5WzJdfWApO1xuXG4gIG1lbnVJbmdyZWRpZW50cy5hcHBlbmRDaGlsZChhKTtcbiAgbWVudUluZ3JlZGllbnRzLmFwcGVuZENoaWxkKGIpO1xuICBtZW51SW5ncmVkaWVudHMuYXBwZW5kQ2hpbGQoYyk7XG5cbiAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQobWVudUhlYWRlcik7XG4gIG1lbnVJdGVtLmFwcGVuZENoaWxkKG1lbnVDb250ZW50KTtcbiAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQobWVudUluZ3JlZGllbnRzKTtcblxuICByZXR1cm4gbWVudUl0ZW07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gIGNvbnN0IG1lbnUgPSBjcmVhdGVFbChcImRpdlwiLCBcIm1lbnVcIiwgXCJcIik7XG5cbiAgY29uc3QgaXRlbTEgPSBjcmVhdGVNZW51SXRlbShcbiAgICBcImNhcmJvbmFyYVwiLFxuICAgIFwiTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeVwiLFxuICAgIFtcIlNwYWdoZXR0aVwiLCBcIlNhdWNlXCIsIFwiQmFjb25cIl1cbiAgKTtcbiAgY29uc3QgaXRlbTIgPSBjcmVhdGVNZW51SXRlbShcbiAgICBcImNhcmJvbmFyYVwiLFxuICAgIFwiTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeVwiLFxuICAgIFtcIlNwYWdoZXR0aVwiLCBcIlNhdWNlXCIsIFwiQmFjb25cIl1cbiAgKTtcbiAgY29uc3QgaXRlbTMgPSBjcmVhdGVNZW51SXRlbShcbiAgICBcImNhcmJvbmFyYVwiLFxuICAgIFwiTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeVwiLFxuICAgIFtcIlNwYWdoZXR0aVwiLCBcIlNhdWNlXCIsIFwiQmFjb25cIl1cbiAgKTtcbiAgY29uc3QgaXRlbTQgPSBjcmVhdGVNZW51SXRlbShcbiAgICBcImNhcmJvbmFyYVwiLFxuICAgIFwiTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeVwiLFxuICAgIFtcIlNwYWdoZXR0aVwiLCBcIlNhdWNlXCIsIFwiQmFjb25cIl1cbiAgKTtcblxuICBtZW51LmFwcGVuZENoaWxkKGl0ZW0xKTtcbiAgbWVudS5hcHBlbmRDaGlsZChpdGVtMik7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoaXRlbTMpO1xuICBtZW51LmFwcGVuZENoaWxkKGl0ZW00KTtcblxuICByZXR1cm4gbWVudTtcbn1cbiIsImZ1bmN0aW9uIGNyZWF0ZUVsKGVsLCBjbGFzc0xpc3QsIGNvbnRlbnQpIHtcbiAgY29uc3QgZWxlbWVudENyZWF0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke2VsfWApO1xuICBpZiAoY2xhc3NMaXN0ICE9PSBcIm5vbmVcIikge1xuICAgIGVsZW1lbnRDcmVhdGVkLmNsYXNzTGlzdC5hZGQoY2xhc3NMaXN0KTtcbiAgfVxuICBlbGVtZW50Q3JlYXRlZC50ZXh0Q29udGVudCA9IGAke2NvbnRlbnR9YDtcbiAgcmV0dXJuIGVsZW1lbnRDcmVhdGVkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xuICBjb25zdCBjb250YWN0ID0gY3JlYXRlRWwoXCJkaXZcIiwgXCJjb250YWN0XCIsIFwiXCIpO1xuXG4gIGNvbnN0IGNvbnRhY3RUaXRsZSA9IGNyZWF0ZUVsKFwiZGl2XCIsIFwiY29udGFjdC10aXRsZVwiLCBcIkNvbnRhY3RcIik7XG4gIGNvbnN0IHBob25lID0gY3JlYXRlRWwoXCJkaXZcIiwgXCJwaG9uZVwiLCBcIlBob25lICsxMDEgMTAxIDEwMVwiKTtcbiAgY29uc3QgYWRkcmVzcyA9IGNyZWF0ZUVsKFxuICAgIFwiZGl2XCIsXG4gICAgXCJhZGRyZXNzXCIsXG4gICAgYE1lbGJvdXJuZSBCb3VsZXZhcmQgPGJyIC8+IE5vbmFmZm9yZGFibGUgRm9vZCAyIDxiciAvPiAxMTExMSBEaXNuZXkgTGFuZGBcbiAgKTtcblxuICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RUaXRsZSk7XG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQocGhvbmUpO1xuICBjb250YWN0LmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuXG4gIHJldHVybiBjb250YWN0O1xufVxuIiwiaW1wb3J0IGNyZWF0ZUhvbWUgZnJvbSBcIi4vaG9tZS5qc1wiO1xuaW1wb3J0IGNyZWF0ZU1lbnUgZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IGNyZWF0ZUNvbnRhY3QgZnJvbSBcIi4vY29udGFjdC5qc1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIC8vY3JlYXRlIEdpdGh1YiBMaW5rXG4gIGNvbnN0IGdpdGh1YkVsID0gY3JlYXRlRWwoXCJkaXZcIiwgXCJsaW5rc1wiLCBcIlwiKTtcbiAgY29uc3QgbGlua2dpdGh1YiA9IGNyZWF0ZUVsKFwiYVwiLCBcIm5vbmVcIiwgXCJHaXRodWJcIik7XG4gIGxpbmtnaXRodWIuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vZ2l0aHViLmNvbS9TaXJQb3BwZXJcIik7XG4gIGxpbmtnaXRodWIuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xuICBnaXRodWJFbC5hcHBlbmRDaGlsZChsaW5rZ2l0aHViKTtcblxuICAvL2NyZWF0ZSBSZXN0YXVyYW50IHRpdGxlXG4gIGNvbnN0IGhlYWRlckVsID0gY3JlYXRlRWwoXCJkaXZcIiwgXCJoZWFkZXJcIiwgXCJXSU5URVJGVUwgUkVTVEFVUkFOVFwiKTtcbiAgaGVhZGVyRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lXCIpO1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIik7XG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdFwiKTtcbiAgICBob21lLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgICBtZW51LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBjb250YWN0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSk7XG5cbiAgLy9zb2NpYWwgYnV0dG9uXG4gIGNvbnN0IHNvY2lhbEVsID0gY3JlYXRlRWwoXCJkaXZcIiwgXCJsaW5rc1wiLCBcIlwiKTtcbiAgY29uc3Qgc29jaWFsTGluayA9IGNyZWF0ZUVsKFwiYVwiLCBcIm5vbmVcIiwgXCJTb2NpYWxzXCIpO1xuICBzb2NpYWxMaW5rLnNldEF0dHJpYnV0ZShcbiAgICBcImhyZWZcIixcbiAgICBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9kYW5pZWwtaGFuZG9qby1iNDY1NjMxNjUvXCJcbiAgKTtcbiAgc29jaWFsTGluay5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XG4gIHNvY2lhbEVsLmFwcGVuZENoaWxkKHNvY2lhbExpbmspO1xuXG4gIGNvbnN0IGhlYWRlckNvbnRhaW5lckVsID0gY3JlYXRlRWwoXCJkaXZcIiwgXCJoZWFkZXItY29udGFpbmVyXCIsIFwiXCIpO1xuICBoZWFkZXJDb250YWluZXJFbC5hcHBlbmRDaGlsZChnaXRodWJFbCk7XG4gIGhlYWRlckNvbnRhaW5lckVsLmFwcGVuZENoaWxkKGhlYWRlckVsKTtcbiAgaGVhZGVyQ29udGFpbmVyRWwuYXBwZW5kQ2hpbGQoc29jaWFsRWwpO1xuXG4gIHJldHVybiBoZWFkZXJDb250YWluZXJFbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2lkZSgpIHtcbiAgY29uc3QgaG9tZU5yID0gY3JlYXRlRWwoXCJkaXZcIiwgXCJudW1iZXJcIiwgXCIwMVwiKTtcbiAgY29uc3QgaG9tZUNvbnRlbnQgPSBjcmVhdGVFbChcImRpdlwiLCBcIm5hdi1pdGVtXCIsIFwiSE9NRVwiKTtcbiAgY29uc3QgbWVudU5yID0gY3JlYXRlRWwoXCJkaXZcIiwgXCJudW1iZXJcIiwgXCIwMlwiKTtcbiAgY29uc3QgbWVudUNvbnRlbnQgPSBjcmVhdGVFbChcImRpdlwiLCBcIm5hdi1pdGVtXCIsIFwiTUVOVVwiKTtcbiAgY29uc3QgY29udGFjdE5yID0gY3JlYXRlRWwoXCJkaXZcIiwgXCJudW1iZXJcIiwgXCIwM1wiKTtcbiAgY29uc3QgY29udGFjdENvbnRlbnQgPSBjcmVhdGVFbChcImRpdlwiLCBcIm5hdi1pdGVtXCIsIFwiQ09OVEFDVFwiKTtcblxuICBjb25zdCBuYXZpZ2F0aW9uID0gY3JlYXRlRWwoXCJkaXZcIiwgXCJuYXZpZ2F0aW9uXCIsIFwiXCIpO1xuICBuYXZpZ2F0aW9uLmFwcGVuZENoaWxkKGhvbWVOcik7XG4gIG5hdmlnYXRpb24uYXBwZW5kQ2hpbGQoaG9tZUNvbnRlbnQpO1xuICBuYXZpZ2F0aW9uLmFwcGVuZENoaWxkKG1lbnVOcik7XG4gIG5hdmlnYXRpb24uYXBwZW5kQ2hpbGQobWVudUNvbnRlbnQpO1xuICBuYXZpZ2F0aW9uLmFwcGVuZENoaWxkKGNvbnRhY3ROcik7XG4gIG5hdmlnYXRpb24uYXBwZW5kQ2hpbGQoY29udGFjdENvbnRlbnQpO1xuXG4gIGNvbnN0IHNpZGUgPSBjcmVhdGVFbChcImRpdlwiLCBcInNpZGVcIiwgXCJcIik7XG4gIHNpZGUuYXBwZW5kQ2hpbGQobmF2aWdhdGlvbik7XG4gIHJldHVybiBzaWRlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVXZWJXcmFwcGVyKCkge1xuICBjb25zdCB3cmFwcGVyID0gY3JlYXRlRWwoXCJkaXZcIiwgXCJ3ZWItd3JhcHBlclwiLCBcIlwiKTtcblxuICB3cmFwcGVyLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0KCkpO1xuXG4gIHJldHVybiB3cmFwcGVyO1xufVxuXG4vL2Z1bmN0aW9uIHRvIGNyZWF0ZSBlbGVtZW50XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWwoZWwsIGNsYXNzTGlzdCwgY29udGVudCkge1xuICBjb25zdCBlbGVtZW50Q3JlYXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7ZWx9YCk7XG4gIGlmIChjbGFzc0xpc3QgIT09IFwibm9uZVwiKSB7XG4gICAgZWxlbWVudENyZWF0ZWQuY2xhc3NMaXN0LmFkZChjbGFzc0xpc3QpO1xuICB9XG4gIGVsZW1lbnRDcmVhdGVkLnRleHRDb250ZW50ID0gYCR7Y29udGVudH1gO1xuICByZXR1cm4gZWxlbWVudENyZWF0ZWQ7XG59XG5cbi8vZnVuY3Rpb24gdG8gc3dpdGNoIGJldHdlZW4gbmF2aWdhdGlvblxuZnVuY3Rpb24gbmF2UHJlc3NlZCgpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtaXRlbVwiKTtcblxuICBuYXYuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBjb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lXCIpO1xuICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKTtcbiAgICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3RcIik7XG4gICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC50ZXh0Q29udGVudCk7XG4gICAgICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT0gXCJIT01FXCIpIHtcbiAgICAgICAgY29uc29sZS5sb2coaG9tZSk7XG4gICAgICAgIGhvbWUuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xuICAgICAgICBtZW51LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgY29udGFjdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50ID09IFwiTUVOVVwiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG1lbnUpO1xuICAgICAgICBob21lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgbWVudS5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG4gICAgICAgIGNvbnRhY3Quc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC50ZXh0Q29udGVudCA9PSBcIkNPTlRBQ1RcIikge1xuICAgICAgICBjb25zb2xlLmxvZyhjb250YWN0KTtcbiAgICAgICAgaG9tZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIG1lbnUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBjb250YWN0LnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYWxpemVXZWJzaXRlKCkge1xuICBjb25zdCB3ZWJzaXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gIHdlYnNpdGUuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICB3ZWJzaXRlLmFwcGVuZENoaWxkKGNyZWF0ZVNpZGUoKSk7XG4gIHdlYnNpdGUuYXBwZW5kQ2hpbGQoY3JlYXRlV2ViV3JhcHBlcigpKTtcblxuICBuYXZQcmVzc2VkKCk7XG59XG4iLCJpbXBvcnQgaW5pdGlhbGl6ZVdlYnNpdGUgZnJvbSBcIi4vd2Vic2l0ZS5qc1wiO1xuXG5pbml0aWFsaXplV2Vic2l0ZSgpO1xuXG5jb25zb2xlLmxvZyhcImlzIHRoaXMgd29ya2luZz9cIik7XG4iXSwibmFtZXMiOlsiY3JlYXRlRWwiLCJlbCIsImNsYXNzTGlzdCIsImNvbnRlbnQiLCJlbGVtZW50Q3JlYXRlZCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImFkZCIsInRleHRDb250ZW50IiwiY3JlYXRlTWVudUl0ZW0iLCJ0aXRsZSIsImFycmF5IiwibWVudUl0ZW0iLCJtZW51SGVhZGVyIiwibWVudUNvbnRlbnQiLCJtZW51SW5ncmVkaWVudHMiLCJhIiwiYiIsImMiLCJhcHBlbmRDaGlsZCIsIndlYnNpdGUiLCJnZXRFbGVtZW50QnlJZCIsImdpdGh1YkVsIiwibGlua2dpdGh1YiIsInNldEF0dHJpYnV0ZSIsImhlYWRlckVsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhvbWUiLCJxdWVyeVNlbGVjdG9yIiwibWVudSIsImNvbnRhY3QiLCJzdHlsZSIsImRpc3BsYXkiLCJzb2NpYWxFbCIsInNvY2lhbExpbmsiLCJoZWFkZXJDb250YWluZXJFbCIsImNyZWF0ZUhlYWRlciIsImhvbWVOciIsImhvbWVDb250ZW50IiwibWVudU5yIiwiY29udGFjdE5yIiwiY29udGFjdENvbnRlbnQiLCJuYXZpZ2F0aW9uIiwic2lkZSIsImNyZWF0ZVNpZGUiLCJ3cmFwcGVyIiwiaG9tZVRpdGxlIiwiaW1nQ29udGFpbmVyIiwiaW1nQXJ0Iiwic3JjIiwiY3JlYXRlSG9tZSIsIml0ZW0xIiwiaXRlbTIiLCJpdGVtMyIsIml0ZW00IiwiY3JlYXRlTWVudSIsImNvbnRhY3RUaXRsZSIsInBob25lIiwiYWRkcmVzcyIsImNyZWF0ZUNvbnRhY3QiLCJjcmVhdGVXZWJXcmFwcGVyIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJpbml0aWFsaXplV2Vic2l0ZSJdLCJzb3VyY2VSb290IjoiIn0=
