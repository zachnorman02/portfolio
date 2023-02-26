function openNavbar() {
    const links = document.getElementById("navbar-links");
    const icon = document.getElementById("navbar-toggle-icon");
    if (links.style.display === "flex") {
      links.style.display = "none";
      icon.classList.replace("fa-times", "fa-bars");
    } else {
      links.style.display = "flex";
      icon.classList.replace("fa-bars", "fa-times");
    }
}