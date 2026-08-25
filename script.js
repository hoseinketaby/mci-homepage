const menu = document.querySelector(".hamb");
const nav = document.querySelector("nav");

document.querySelectorAll("a:not([href])").forEach((link) => {
  link.setAttribute("href", "#");
});
document.querySelector("footer")?.setAttribute("id", "contact");

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

const searchButton = document.querySelector(".search");
const searchPanel = document.querySelector(".search-panel");
const searchInput = document.querySelector("#site-search");
const searchSubmit = document.querySelector("#search-submit");
const searchClose = document.querySelector("#search-close");
const searchResult = document.querySelector("#search-result");

const runSiteSearch = () => {
  const query = searchInput?.value.trim().toLowerCase();
  document.querySelectorAll(".search-hit").forEach((item) => item.classList.remove("search-hit"));
  if (!query) {
    if (searchResult) searchResult.textContent = "عبارت مورد نظر را وارد کنید.";
    return;
  }
  const candidates = [...document.querySelectorAll("main section, main article")];
  const match = candidates.find((item) => item.textContent.toLowerCase().includes(query));
  if (match) {
    match.classList.add("search-hit");
    match.scrollIntoView({ behavior: "smooth", block: "center" });
    if (searchResult) searchResult.textContent = "نتیجه پیدا شد.";
  } else if (searchResult) {
    searchResult.textContent = "نتیجه‌ای برای این عبارت پیدا نشد.";
  }
};

searchButton?.addEventListener("click", () => {
  const open = searchPanel?.classList.toggle("open");
  searchPanel?.setAttribute("aria-hidden", String(!open));
  if (open) window.setTimeout(() => searchInput?.focus(), 0);
});
searchClose?.addEventListener("click", () => {
  searchPanel?.classList.remove("open");
  searchPanel?.setAttribute("aria-hidden", "true");
});
searchSubmit?.addEventListener("click", runSiteSearch);
searchInput?.addEventListener("keydown", (event) => {
  if (event.key === "Enter") runSiteSearch();
});

const hero = document.querySelector(".hero");
const heroSlides = [...document.querySelectorAll(".hero-slide")];
const heroDots = [...document.querySelectorAll(".hero .dots i")];
let heroIndex = 0;

const showHeroSlide = (index) => {
  heroIndex = (index + heroSlides.length) % heroSlides.length;
  heroSlides.forEach((slide, slideIndex) => {
    slide.classList.toggle("active", slideIndex === heroIndex);
    slide.setAttribute("aria-hidden", String(slideIndex !== heroIndex));
  });
  heroDots.forEach((dot, dotIndex) => dot.classList.toggle("on", dotIndex === heroIndex));
};

heroDots.forEach((dot, index) => {
  dot.addEventListener("click", () => showHeroSlide(index));
  dot.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      showHeroSlide(index);
    }
  });
});

if (heroSlides.length > 1) {
  let heroTimer = window.setInterval(() => showHeroSlide(heroIndex + 1), 5500);
  hero?.addEventListener("mouseenter", () => window.clearInterval(heroTimer));
  hero?.addEventListener("mouseleave", () => {
    heroTimer = window.setInterval(() => showHeroSlide(heroIndex + 1), 5500);
  });
}

document.querySelectorAll(".quickcards a,.shop article,.storygrid article").forEach((item) => {
  item.addEventListener("click", () => item.classList.add("selected"));
});
