(function () {
  "use strict";

  var STORAGE_KEY = "atario-a11y";

  function defaults() {
    return {
      font: 0,
      contrast: false,
      links: false,
      spacing: false,
      readable: false,
      reduceMotion: false,
    };
  }

  function readState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaults();
      var o = JSON.parse(raw);
      var d = defaults();
      if (typeof o.font === "number" && o.font >= 0 && o.font <= 2) d.font = o.font;
      if (typeof o.contrast === "boolean") d.contrast = o.contrast;
      if (typeof o.links === "boolean") d.links = o.links;
      if (typeof o.spacing === "boolean") d.spacing = o.spacing;
      if (typeof o.readable === "boolean") d.readable = o.readable;
      if (typeof o.reduceMotion === "boolean") d.reduceMotion = o.reduceMotion;
      return d;
    } catch (e) {
      return defaults();
    }
  }

  function writeState(s) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
    } catch (e) {}
  }

  function applyState(s) {
    var h = document.documentElement;
    h.classList.remove(
      "a11y-font-l",
      "a11y-font-xl",
      "a11y-contrast",
      "a11y-links",
      "a11y-spacing",
      "a11y-readable",
      "a11y-reduce-motion"
    );
    if (s.font === 1) h.classList.add("a11y-font-l");
    if (s.font === 2) h.classList.add("a11y-font-xl");
    if (s.contrast) h.classList.add("a11y-contrast");
    if (s.links) h.classList.add("a11y-links");
    if (s.spacing) h.classList.add("a11y-spacing");
    if (s.readable) h.classList.add("a11y-readable");
    if (s.reduceMotion) h.classList.add("a11y-reduce-motion");
  }

  var state = readState();
  applyState(state);

  function initUI() {
    if (document.getElementById("atario-a11y-widget")) return;

    var skip = document.createElement("a");
    skip.className = "skip-link";
    skip.href = "#main-content";
    skip.textContent = "דלג לתוכן הראשי";
    skip.addEventListener("click", function (e) {
      var m = document.getElementById("main-content");
      if (!m) return;
      e.preventDefault();
      m.focus();
      m.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    document.body.insertBefore(skip, document.body.firstChild);

    var wrap = document.createElement("div");
    wrap.className = "a11y-widget";
    wrap.id = "atario-a11y-widget";

    var toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "a11y-widget__toggle";
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-controls", "atario-a11y-panel");
    toggle.setAttribute("aria-label", "פתיחה וסגירה של תפריט התאמות נגישות");
    toggle.id = "atario-a11y-toggle";
    toggle.innerHTML =
      '<span class="a11y-widget__icon" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="currentColor"/><path d="M6.5 9.5C5.67 9.5 5 10.17 5 11v1c0 .83.67 1.5 1.5 1.5S8 12.83 8 12v-1c0-.83-.67-1.5-1.5-1.5zm11 0c-.83 0-1.5.67-1.5 1.5v1c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5z" fill="currentColor"/><path d="M12 9c-2.5 0-4.5 2-4.5 4.5V18c0 .55.45 1 1 1h7c.55 0 1-.45 1-1v-4.5C16.5 11 14.5 9 12 9z" fill="currentColor"/><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.2" fill="none" opacity="0.35"/></svg></span><span class="a11y-widget__label">נגישות</span>';

    var panel = document.createElement("div");
    panel.className = "a11y-panel";
    panel.id = "atario-a11y-panel";
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-modal", "true");
    panel.setAttribute("aria-labelledby", "atario-a11y-title");
    panel.hidden = true;

    panel.innerHTML =
      '<div class="a11y-panel__header">' +
      '<h2 id="atario-a11y-title" class="a11y-panel__title">התאמות נגישות</h2>' +
      '<button type="button" class="a11y-panel__close" aria-label="סגור חלון נגישות"><span aria-hidden="true">×</span></button>' +
      "</div>" +
      '<p class="a11y-panel__intro">הגדרות נשמרות בדפדפן שלך (מכשיר זה בלבד).</p>' +
      '<div class="a11y-panel__body">' +
      '<fieldset class="a11y-fieldset">' +
      '<legend class="a11y-legend">גודל טקסט</legend>' +
      '<div class="a11y-seg" role="group" aria-label="גודל טקסט">' +
      '<button type="button" class="a11y-seg__btn" data-a11y-font="0">רגיל</button>' +
      '<button type="button" class="a11y-seg__btn" data-a11y-font="1">גדול</button>' +
      '<button type="button" class="a11y-seg__btn" data-a11y-font="2">גדול מאוד</button>' +
      "</div></fieldset>" +
      '<div class="a11y-toggles">' +
      '<label class="a11y-switch"><input type="checkbox" data-a11y-key="contrast" /><span class="a11y-switch__text">ניגודיות גבוהה</span></label>' +
      '<label class="a11y-switch"><input type="checkbox" data-a11y-key="links" /><span class="a11y-switch__text">הדגשת קישורים</span></label>' +
      '<label class="a11y-switch"><input type="checkbox" data-a11y-key="spacing" /><span class="a11y-switch__text">ריווח שורות מורחב</span></label>' +
      '<label class="a11y-switch"><input type="checkbox" data-a11y-key="readable" /><span class="a11y-switch__text">גופן מערכת (קריא)</span></label>' +
      '<label class="a11y-switch"><input type="checkbox" data-a11y-key="reduceMotion" /><span class="a11y-switch__text">הפחתת תנועה ואנימציה</span></label>' +
      "</div></div>" +
      '<div class="a11y-panel__footer">' +
      '<button type="button" class="a11y-reset" id="atario-a11y-reset">איפוס כל ההגדרות</button>' +
      "</div>";

    wrap.appendChild(toggle);
    wrap.appendChild(panel);
    document.body.appendChild(wrap);

    var closeBtn = panel.querySelector(".a11y-panel__close");
    var fontBtns = panel.querySelectorAll("[data-a11y-font]");
    var checkboxes = panel.querySelectorAll("input[data-a11y-key]");
    var resetBtn = panel.querySelector("#atario-a11y-reset");

    function syncControls() {
      fontBtns.forEach(function (b) {
        var v = parseInt(b.getAttribute("data-a11y-font"), 10);
        b.classList.toggle("is-active", state.font === v);
        b.setAttribute("aria-pressed", state.font === v ? "true" : "false");
      });
      checkboxes.forEach(function (cb) {
        var k = cb.getAttribute("data-a11y-key");
        cb.checked = !!state[k];
      });
    }

    function openPanel() {
      panel.hidden = false;
      toggle.setAttribute("aria-expanded", "true");
      syncControls();
      var toFocus = panel.querySelector(".a11y-panel__close");
      if (toFocus) toFocus.focus();
    }

    function closePanel() {
      panel.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
      toggle.focus();
    }

    function isOpen() {
      return !panel.hidden;
    }

    toggle.addEventListener("click", function () {
      if (isOpen()) closePanel();
      else openPanel();
    });

    closeBtn.addEventListener("click", closePanel);

    fontBtns.forEach(function (b) {
      b.addEventListener("click", function () {
        state.font = parseInt(b.getAttribute("data-a11y-font"), 10);
        writeState(state);
        applyState(state);
        syncControls();
      });
    });

    checkboxes.forEach(function (cb) {
      cb.addEventListener("change", function () {
        var k = cb.getAttribute("data-a11y-key");
        state[k] = cb.checked;
        writeState(state);
        applyState(state);
      });
    });

    resetBtn.addEventListener("click", function () {
      state = defaults();
      writeState(state);
      applyState(state);
      syncControls();
    });

    syncControls();

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && isOpen()) {
        e.preventDefault();
        closePanel();
      }
      if (!isOpen() || e.key !== "Tab") return;
      var focusables = panel.querySelectorAll(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      var list = Array.prototype.slice.call(focusables).filter(function (el) {
        return el.offsetParent !== null || el === document.activeElement;
      });
      if (list.length === 0) return;
      var first = list[0];
      var last = list[list.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });

    document.addEventListener("click", function (e) {
      if (!isOpen()) return;
      if (wrap.contains(e.target)) return;
      closePanel();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initUI);
  } else {
    initUI();
  }
})();
