/*=============== показати меню ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

/*=============== закрити меню при натисканні ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== змінити фон хедера при скролі ===============*/
const scrollHeader = () => {
    const header = document.getElementById("header");

    this.scrollY >= 50 ? header.classList.add("bg-header") : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== зробити лінк активним при скролі ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute("id");
        const sectionsClass = document.querySelector(".nav__menu a[href*=" + sectionId + "]");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add("active-link");
        } else {
            sectionsClass.classList.remove("active-link");
        }
    });
};

window.addEventListener("scroll", scrollActive);

/*=============== показати кнопку вверх ===============*/
const scrollUP = () => {
    const scrollup = document.getElementById("scroll-up");
    this.scrollY >= 350 ? scrollup.classList.add("show-scroll") : scrollup.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUP);

/*=============== анімації ===============*/
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
});

sr.reveal(`.home__data`);
sr.reveal(`.home__img`, { delay: 700, origin: "bottom" });
sr.reveal(`.logo__img, .program__card, .pricing__card`, { interval: 100 });
sr.reveal(`.choose__img, .calculate__content`, { origin: "left" });
sr.reveal(`.choose__content, .calculate__img`, { origin: "right" });
sr.reveal(`.footer__container, .footer__group`, { origin: "bottom" });

/*=============== калькулятор ===============*/
const calculateForm = document.getElementById("calculate-form");
const calculateCm = document.getElementById("calculate-cm");
const calculateKg = document.getElementById("calculate-kg");
const calculateMessage = document.getElementById("calculate-message");

const calculateBmi = (e) => {
    e.preventDefault();

    if (calculateCm.value === "" || calculateKg.value === "") {
        calculateMessage.classList.remove("color-green");
        calculateMessage.classList.add("color-red");

        calculateMessage.textContent = "Заповніть поля «Зріст» та «Вага»!";
        setTimeout(() => {
            calculateMessage.textContent = "";
        }, 3000);
    } else {
        const cm = calculateCm.value / 100;
        const kg = calculateKg.value;
        const bmi = Math.round(kg / (cm * cm));

        if (bmi < 18.5) {
            calculateMessage.classList.add("color-green");
            calculateMessage.textContent = `Ваш ІМТ становить ${bmi}, ви дуже стрункі.`;
        } else if (bmi <= 25) {
            calculateMessage.classList.add("color-green");
            calculateMessage.textContent = `Ваш ІМТ становить ${bmi}, прекрасна форма.`;
        } else {
            calculateMessage.classList.add("color-green");
            calculateMessage.textContent = `Ваш ІМТ становить ${bmi}, треба щось з цим робити.`;
        }

        calculateCm.value = "";
        calculateKg.value = "";

        setTimeout(() => {
            calculateMessage.textContent = "";
        }, 4000);
    }
};

calculateForm.addEventListener("submit", calculateBmi);
