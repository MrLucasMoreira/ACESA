const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".main-nav");

toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!open));
  menu.classList.toggle("open", !open);
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelector(".interest-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const note = document.querySelector(".form-note");
  note.textContent = "Obrigado. Seu interesse foi registrado nesta demonstração.";
  event.currentTarget.reset();
});
