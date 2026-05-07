const THEME_STORAGE_KEY = "qinxuan-site-theme";
const LIGHT_THEME = "light";

const themeToggle = document.querySelector(".theme-toggle");

function applyTheme(theme) {
  const isLight = theme === LIGHT_THEME;

  document.body.classList.toggle("theme-light", isLight);

  if (themeToggle) {
    themeToggle.textContent = isLight ? "Dark" : "Light";
    themeToggle.setAttribute(
      "aria-label",
      isLight ? "Switch to dark purple theme" : "Switch to light blue theme"
    );
    themeToggle.setAttribute("aria-pressed", String(isLight));
  }
}

const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
applyTheme(savedTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("theme-light") ? "dark" : LIGHT_THEME;

    if (nextTheme === LIGHT_THEME) {
      localStorage.setItem(THEME_STORAGE_KEY, LIGHT_THEME);
    } else {
      localStorage.removeItem(THEME_STORAGE_KEY);
    }

    applyTheme(nextTheme);
  });
}
