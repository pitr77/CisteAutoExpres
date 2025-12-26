
(function () {
  // Year
  var y = document.getElementById('caeYear');
  if (y) y.textContent = new Date().getFullYear();

  // Smooth anchor scroll (works with the template sticky header)
  function smoothTo(hash) {
    var el = document.querySelector(hash);
    if (!el) return;
    var header = document.querySelector('.header-area');
    var h = header ? header.offsetHeight : 0;
    var top = el.getBoundingClientRect().top + window.pageYOffset - (h + 10);
    window.scrollTo({ top: top, behavior: 'smooth' });
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest('a');
    if (!a) return;
    var href = a.getAttribute('href') || '';
    if (href.startsWith('#') && href.length > 1) {
      e.preventDefault();
      smoothTo(href);
    }
  });

  // Active menu item on scroll
  var sections = Array.prototype.slice.call(document.querySelectorAll('section[id]'));
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.main-nav .nav a'));

  function setActive() {
    var scrollPos = window.scrollY || window.pageYOffset;
    var header = document.querySelector('.header-area');
    var h = header ? header.offsetHeight : 0;
    var current = sections[0] ? sections[0].id : '';

    for (var i = 0; i < sections.length; i++) {
      var s = sections[i];
      var offset = s.offsetTop - (h + 30);
      if (scrollPos >= offset) current = s.id;
    }

    navLinks.forEach(function (lnk) {
      var href = (lnk.getAttribute('href') || '').replace('#', '');
      if (!href) return;
      if (href === current) lnk.classList.add('active');
      else lnk.classList.remove('active');
    });
  }

  window.addEventListener('scroll', setActive, { passive: true });
  window.addEventListener('load', setActive);

  // Contact form: basic validation + mailto fallback
  var form = document.getElementById('caeContactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = (document.getElementById('name') || {}).value || '';
      var phone = (document.getElementById('phone') || {}).value || '';
      var email = (document.getElementById('email') || {}).value || '';
      var message = (document.getElementById('message') || {}).value || '';

      if (!name.trim() || !phone.trim() || !message.trim()) {
        alert('Prosím vyplň Meno, Telefón a Správu.');
        return;
      }

      var subject = encodeURIComponent('Dopyt – Čisté Auto Expres');
      var body = encodeURIComponent(
        'Meno: ' + name + '\n' +
        'Telefón: ' + phone + '\n' +
        'E-mail: ' + email + '\n\n' +
        'Správa:\n' + message + '\n'
      );

      // Replace with real address when ready
      var to = 'info@cisteautoexpres.sk';
      window.location.href = 'mailto:' + to + '?subject=' + subject + '&body=' + body;

      form.reset();
    });
  }
  // ---------------------------------------------------------------------------------------
  // PETO
  //---------------------------------------------------------------------------------------

  // CONTACT FAQ: nedovoľ zbalenie poslednej otvorenej otázky (aby sa blok nehýbal)

  // CONTACT FAQ: iba jedna otvorená + nedovoľ stav "všetko zatvorené"
  (function () {
    const faq = document.getElementById("caeFaq");
    if (!faq || typeof bootstrap === "undefined") return;

    let lastToggleBtn = null;

    // zachyť, na čo user klikol ešte predtým, než Bootstrap spracuje toggle
    faq.addEventListener(
      "pointerdown",
      function (e) {
        const btn = e.target.closest(".accordion-button");
        if (btn) lastToggleBtn = btn;
      },
      true
    );

    // aj pre klávesnicu (Enter / Space)
    faq.addEventListener(
      "keydown",
      function (e) {
        if (e.key !== "Enter" && e.key !== " ") return;
        const btn = e.target.closest(".accordion-button");
        if (btn) lastToggleBtn = btn;
      },
      true
    );

    // vždy len jedna otvorená (pre istotu, keby sa to niekde “rozbilo”)
    faq.addEventListener("show.bs.collapse", function (e) {
      faq.querySelectorAll(".accordion-collapse.show").forEach((el) => {
        if (el !== e.target) {
          bootstrap.Collapse.getOrCreateInstance(el).hide();
        }
      });
    });

    // nedovoľ zavrieť poslednú otvorenú (ale prepnutie na inú otázku povol)
    faq.addEventListener("hide.bs.collapse", function (e) {
      const opened = faq.querySelectorAll(".accordion-collapse.show");
      if (opened.length !== 1) return;
      if (opened[0] !== e.target) return;

      const targetId = e.target.id;
      const controls = lastToggleBtn && lastToggleBtn.getAttribute("aria-controls");

      // ak user klikol na tú istú otvorenú otázku -> chcel ju zavrieť -> blokuj
      if (controls === targetId) {
        e.preventDefault();
      }
    });
  })();

})();
