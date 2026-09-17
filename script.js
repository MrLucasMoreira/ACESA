const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".main-nav");

if (toggle && menu) {
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
}

const associationForm = document.querySelector(".association-form");
if (associationForm) {
  associationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelector(".form-note").textContent = "O canal de envio será disponibilizado em breve. Enquanto isso, entre em contato pelo WhatsApp para manifestar seu interesse.";
  });
}
