const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

menu?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menu?.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".offer-tabs button").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelector(".offer-tabs .selected")?.classList.remove("selected");
    tab.classList.add("selected");
  });
});

document.querySelector(".newsletter form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector("button");
  button.textContent = "ثبت شد";
  event.currentTarget.reset();
  setTimeout(() => (button.textContent = "ارسال"), 1800);
});

const dots = [...document.querySelectorAll(".hero-dots button")];
dots.forEach((dot) => dot.addEventListener("click", () => {
  document.querySelector(".hero-dots .selected")?.classList.remove("selected");
  dot.classList.add("selected");
}));
