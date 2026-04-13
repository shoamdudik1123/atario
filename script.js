(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
})();

(function () {
  var el = document.querySelector(".bg-cursor-glow");
  if (!el) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  function setPos(cx, cy) {
    el.style.setProperty("--cursor-x", cx + "px");
    el.style.setProperty("--cursor-y", cy + "px");
  }

  function center() {
    setPos(window.innerWidth * 0.5, window.innerHeight * 0.45);
  }

  center();

  window.addEventListener(
    "mousemove",
    function (e) {
      setPos(e.clientX, e.clientY);
    },
    { passive: true }
  );

  window.addEventListener(
    "touchmove",
    function (e) {
      var t = e.touches[0];
      if (t) setPos(t.clientX, t.clientY);
    },
    { passive: true }
  );

  window.addEventListener("touchend", center);

  window.addEventListener("resize", center);
})();

(function () {
  var wrap = document.querySelector(".marquee-wrap");
  var track = wrap && wrap.querySelector(".marquee");
  if (!track) return;

  var maxGroups = 64;

  function syncMarquee() {
    var template = track.querySelector(".marquee__group");
    if (!template) return;

    var vw = window.innerWidth || document.documentElement.clientWidth;
    var needWidth = vw * 1.45;

    var groups = track.querySelectorAll(".marquee__group");
    var i = 0;
    while (track.scrollWidth < needWidth && groups.length < maxGroups && i < maxGroups) {
      track.appendChild(template.cloneNode(true));
      groups = track.querySelectorAll(".marquee__group");
      i++;
    }

    while (groups.length > 2) {
      var sw = track.scrollWidth;
      var gw = groups[groups.length - 1].offsetWidth;
      if (sw - gw < needWidth) break;
      track.removeChild(groups[groups.length - 1]);
      groups = track.querySelectorAll(".marquee__group");
    }

    track.style.setProperty("--marquee-n", String(groups.length));
  }

  function run() {
    syncMarquee();
    requestAnimationFrame(syncMarquee);
    requestAnimationFrame(function () {
      syncMarquee();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(syncMarquee);
  }

  var resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(syncMarquee, 120);
  });
})();

(function () {
  function bindMailtoForm(form) {
    if (!form || form.getAttribute("data-mailto-bound")) return;
    form.setAttribute("data-mailto-bound", "1");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var nameEl = form.querySelector('[name="name"]');
      var emailEl = form.querySelector('[name="email"]');
      var phoneEl = form.querySelector('[name="phone"]');
      var msgEl = form.querySelector('[name="message"]');
      var name = nameEl ? nameEl.value.trim() : "";
      var email = emailEl ? emailEl.value.trim() : "";
      var phone = phoneEl ? phoneEl.value.trim() : "";
      var msg = msgEl ? msgEl.value.trim() : "";
      var body =
        "שם: " + name + "\n" +
        "אימייל: " + email + "\n" +
        "טלפון: " + phone + "\n\n" +
        msg;
      window.location.href =
        "mailto:shoamdudik1123@gmail.com?subject=" +
        encodeURIComponent("יצירת קשר מהאתר" + (name ? " " + name : "")) +
        "&body=" +
        encodeURIComponent(body);
    });
  }

  var modal = document.getElementById("contact-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "contact-modal";
    modal.className = "contact-modal";
    modal.setAttribute("aria-hidden", "true");
    modal.innerHTML = [
      '<div class="contact-modal__backdrop" data-modal-close tabindex="-1"></div>',
      '<div class="contact-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">',
      '  <button type="button" class="contact-modal__close" data-modal-close aria-label="סגירה">\u00d7</button>',
      "  <h2 id=\"contact-modal-title\" class=\"contact-modal__title\">בואו נדבר</h2>",
      "  <p class=\"contact-modal__lead\">מתחילים בשיחת ייעוץ מדויקת לעסק שלך. מלאו פרטים ושלחו במייל או בוואטסאפ, ונחזור אליכם.</p>",
      '  <form class="contact-form" id="modal-contact-form" action="#" method="post">',
      "    <label for=\"m-name\">שם מלא</label>",
      '    <input id="m-name" name="name" type="text" autocomplete="name" required />',
      "    <label for=\"m-email\">אימייל</label>",
      '    <input id="m-email" name="email" type="email" autocomplete="email" required />',
      "    <label for=\"m-phone\">טלפון</label>",
      '    <input id="m-phone" name="phone" type="tel" autocomplete="tel" />',
      "    <label for=\"m-msg\">איך נוכל לעזור?</label>",
      "    <textarea id=\"m-msg\" name=\"message\" placeholder=\"ספרו בקצרה…\"></textarea>",
      '    <button type="submit" class="btn btn--primary btn--glow contact-modal__submit-mail" style="width:100%;border:none;cursor:pointer">שליחה במייל</button>',
      '    <button type="button" class="btn contact-modal__wa" id="modal-whatsapp-btn">שליחה בוואטסאפ</button>',
      "  </form>",
      "  <p class=\"contact-modal__hint\">שליחה במייל תפתח את תוכנת המייל; וואטסאפ יפתח צ'אט עם ההודעה שמילאתם.</p>",
      '  <div class="contact-modal__divider" aria-hidden="true"></div>',
      '  <div class="contact-modal__direct">',
      "    <a href=\"tel:+972534321792\">התקשרו: 053-432-1792</a>",
      "  </div>",
      "</div>",
    ].join("");
    document.body.appendChild(modal);
    bindMailtoForm(modal.querySelector("#modal-contact-form"));
  }

  function bindModalWhatsApp() {
    var btn = modal.querySelector("#modal-whatsapp-btn");
    if (!btn || btn.getAttribute("data-wa-bound") === "1") return;
    btn.setAttribute("data-wa-bound", "1");
    btn.addEventListener("click", function () {
      var f = modal.querySelector("#modal-contact-form");
      if (!f) return;
      var name = (f.querySelector('[name="name"]') || {}).value.trim();
      var email = (f.querySelector('[name="email"]') || {}).value.trim();
      var phone = (f.querySelector('[name="phone"]') || {}).value.trim();
      var msg = (f.querySelector('[name="message"]') || {}).value.trim();
      var parts = [];
      if (name) parts.push("שם: " + name);
      if (phone) parts.push("טלפון: " + phone);
      if (email) parts.push("אימייל: " + email);
      if (msg) parts.push(msg);
      var text =
        parts.length > 0
          ? parts.join("\n")
          : "היי, אשמח לקבל פרטים. פנייה מהאתר.";
      window.open(
        "https://wa.me/972534321792?text=" + encodeURIComponent(text),
        "_blank",
        "noopener,noreferrer"
      );
    });
  }

  bindModalWhatsApp();

  var lastFocus = null;

  function openContactModal() {
    lastFocus = document.activeElement;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    var focusEl = modal.querySelector("#m-name");
    if (focusEl) focusEl.focus();
  }

  function closeContactModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocus && typeof lastFocus.focus === "function") {
      lastFocus.focus();
    }
  }

  modal.querySelectorAll("[data-modal-close]").forEach(function (node) {
    node.addEventListener("click", closeContactModal);
  });

  document.querySelectorAll(".js-open-contact-modal").forEach(function (node) {
    node.addEventListener("click", function (e) {
      e.preventDefault();
      openContactModal();
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("is-open")) {
      closeContactModal();
    }
  });
})();

(function () {
  var el = document.getElementById("page-loader");
  if (!el) return;

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var start = Date.now();
  var minMs = reduce ? 0 : 280;

  function removeEl() {
    if (el && el.parentNode) el.parentNode.removeChild(el);
  }

  function finish() {
    el.setAttribute("aria-busy", "false");
    if (reduce) {
      removeEl();
      return;
    }
    el.classList.add("is-done");
    el.addEventListener(
      "transitionend",
      function (e) {
        if (e.propertyName === "opacity") removeEl();
      },
      { once: true }
    );
    window.setTimeout(removeEl, 700);
  }

  function go() {
    var wait = Math.max(0, minMs - (Date.now() - start));
    window.setTimeout(finish, wait);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", go);
  } else {
    go();
  }
})();
