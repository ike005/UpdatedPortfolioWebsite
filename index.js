const themebutton = document.getElementById("theme-button");

const toggleDarkMode = () => {
    console.log("clicked");
    document.body.classList.toggle("dark-mode");
}

themebutton.addEventListener("click", toggleDarkMode);
