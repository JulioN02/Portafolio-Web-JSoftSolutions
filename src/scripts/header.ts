export function initHeader(): void {
  const toggle = document.querySelector(".site-header__toggle") as HTMLButtonElement;
  const nav = document.querySelector(".site-header__nav") as HTMLElement;
  const links = document.querySelectorAll(".site-header__link") as NodeListOf<HTMLElement>;

  // Toggle menú hamburguesa
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active");
      toggle.classList.toggle("active");
      
      // Animación del hamburguesa
      updateToggleIcon(toggle);
    });

    // Cerrar menú al hacer click en un link
    links.forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("active");
        toggle.classList.remove("active");
        updateToggleIcon(toggle);
      });
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener("click", (e) => {
      if (!nav.contains(e.target as Node) && !toggle.contains(e.target as Node)) {
        nav.classList.remove("active");
        toggle.classList.remove("active");
        updateToggleIcon(toggle);
      }
    });
  }

  // Scroll logic para header y footer
  initScrollLogic();
}

function updateToggleIcon(toggle: HTMLButtonElement): void {
  const spans = toggle.querySelectorAll("span");
  const isActive = toggle.classList.contains("active");

  spans.forEach((span, index) => {
    if (isActive) {
      if (index === 0) {
        span.style.transform = "rotate(45deg) translate(10px, 10px)";
      } else if (index === 1) {
        span.style.opacity = "0";
      } else if (index === 2) {
        span.style.transform = "rotate(-45deg) translate(7px, -7px)";
      }
    } else {
      span.style.transform = "none";
      span.style.opacity = "1";
    }
  });
}

function initScrollLogic(): void {
  const header = document.querySelector(".site-header") as HTMLElement;
  const footer = document.querySelector(".site-footer") as HTMLElement;
  let lastScrollTop = 0;
  let isHeaderVisible = true;
  let isFooterVisible = true;

  if (!header || !footer) return;

  window.addEventListener(
    "scroll",
    () => {
      const currentScroll = window.scrollY;
      const scrollDirection = currentScroll > lastScrollTop ? "down" : "up";

      // Lógica del header
      if (scrollDirection === "down" && isHeaderVisible) {
        header.style.transform = "translateY(-100%)";
        isHeaderVisible = false;
      } else if (scrollDirection === "up" && !isHeaderVisible) {
        header.style.transform = "translateY(0)";
        isHeaderVisible = true;
      }

      // Lógica del footer (aparecer al llegar al final)
      const scrollPercentage =
        (currentScroll /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;

      if (scrollPercentage >= 85 && !isFooterVisible) {
        footer.style.opacity = "1";
        footer.style.visibility = "visible";
        isFooterVisible = true;
      } else if (scrollPercentage < 85 && isFooterVisible) {
        footer.style.opacity = "0";
        footer.style.visibility = "hidden";
        isFooterVisible = false;
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    },
    { passive: true }
  );
}