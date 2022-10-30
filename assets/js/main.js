/*==================== MENU SHOW Y HIDDEN ====================*/
const toggleBtn = document.getElementById("toggle"),
    menu = document.getElementById("menu"),
    menuLinks = document.querySelectorAll("#menu li a");

toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    toggleBtn.classList.toggle("active");
});

menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
        toggleBtn.classList.remove("active");
    });
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector("#menu a[href*=" + sectionId + "]")?.classList.add("active");
        } else {
            document
                .querySelector("#menu a[href*=" + sectionId + "]")?.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", scrollActive);
