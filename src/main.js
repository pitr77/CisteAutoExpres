import "./style.css";

const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu");

if (hamburger && menu) {
  hamburger.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("isOpen");
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });

  menu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      menu.classList.remove("isOpen");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
}

const form = document.getElementById("contactForm");
const hint = document.getElementById("formHint");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);

    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    const subject = encodeURIComponent(`Dopyt z webu – ${name || "bez mena"}`);
    const body = encodeURIComponent(
      `Meno: ${name}\nEmail: ${email}\n\nSpráva:\n${message}\n`
    );

    const to = "hello@tvojadomena.sk";
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

    if (hint) hint.textContent = "Otvoril som tvoj email klient. Stačí odoslať 🙂";
  });
}
