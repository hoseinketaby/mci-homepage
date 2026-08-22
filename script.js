const menu = document.querySelector(".hamb");
const nav = document.querySelector("nav");

document.querySelectorAll("a:not([href])").forEach((link) => {
  link.setAttribute("href", "#");
});

document.querySelector(".logo")?.addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

menu?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menu?.setAttribute("aria-expanded", "false");
  });
});

const heroDots = [...document.querySelectorAll(".hero .dots i")];
heroDots.forEach((dot, index) => {
  dot.setAttribute("role", "button");
  dot.setAttribute("tabindex", "0");
  dot.addEventListener("click", () => {
    heroDots.forEach((item) => item.classList.remove("on"));
    dot.classList.add("on");
    document.querySelector(".hero")?.classList.toggle("alt-slide", index % 2 === 1);
  });
});

document.querySelectorAll(".quickcards a,.shop article,.storygrid article").forEach((item) => {
  item.addEventListener("click", () => item.classList.add("selected"));
});
