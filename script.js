const themeButton = document.getElementById("theme-toggle");

function updateButton() {
    if (document.documentElement.classList.contains("light-mode")) {
        themeButton.textContent = "Dark Mode";
    } else {
        themeButton.textContent = "Light Mode";
    }
}

// Φόρτωση αποθηκευμένης επιλογής
if (localStorage.getItem("theme") === "light") {
    document.documentElement.classList.add("light-mode");
}

updateButton();

// Αλλαγή θέματος
themeButton.addEventListener("click", function () {
    document.documentElement.classList.toggle("light-mode");

    if (document.documentElement.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }

    updateButton();
});