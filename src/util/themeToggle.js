const toggle = document.getElementById("themeToggle");
const darkIcon = document.getElementById("DarkIcon");
const lightIcon = document.getElementById("LightIcon");

refreshTheme();
toggle.addEventListener("click", toggleTheme);

function toggleTheme() {
  if (localStorage.theme == "light") {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
  refreshTheme();
}

function refreshTheme() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    darkIcon.style.display = "block";
    lightIcon.style.display = "none";
  } else {
    document.documentElement.classList.remove("dark");
    darkIcon.style.display = "none";
    lightIcon.style.display = "block";
  }
}
