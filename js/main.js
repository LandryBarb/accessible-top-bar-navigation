// js/main.js

// Reserved for future progressive enhancement.
// Example: theme toggler to add/remove `.theme-dark` on <html> or <body>.

 (function () {
    const toggle = document.getElementById("profileToggle");
    const menu = document.getElementById("profileMenu");
    if (!toggle || !menu) return;

    function openMenu() {
      menu.hidden = false;
      toggle.setAttribute("aria-expanded", "true");
      // Move focus to first menuitem
      const firstItem = menu.querySelector('[role="menuitem"]');
      if (firstItem) firstItem.focus();
    }

    function closeMenu({ restoreFocus = true } = {}) {
      menu.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
      if (restoreFocus) toggle.focus();
    }

    function isOpen() {
      return menu.hidden === false;
    }

    toggle.addEventListener("click", () => {
      if (isOpen()) closeMenu({ restoreFocus: false });
      else openMenu();
    });

    document.addEventListener("click", (e) => {
      if (!isOpen()) return;
      const target = e.target;
      if (!(target instanceof Node)) return;
      if (!menu.contains(target) && !toggle.contains(target)) closeMenu({ restoreFocus: false });
    });

    document.addEventListener("keydown", (e) => {
      if (!isOpen()) return;
      if (e.key === "Escape") {
        e.preventDefault();
        closeMenu();
      }
    });
  })();