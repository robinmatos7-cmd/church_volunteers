document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector("#theme-toggle");

  if (!themeToggle) {
    return;
  }

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }

  themeToggle.addEventListener("click", () => {
    const currentTheme =
      document.documentElement.getAttribute("data-theme");

    if (currentTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  });
});