// MOBILE MENU
function toggleMenu() {
const nav = document.querySelector(".nav-links");
if (nav) {
nav.classList.toggle("mobile-open");
}
}

// SIGN UP
function openSignup() {
const modal = document.getElementById("signupModal");
if (modal) {
modal.classList.add("active");
document.body.style.overflow = "hidden";
}
}

function closeSignup() {
const modal = document.getElementById("signupModal");
if (modal) {
modal.classList.remove("active");
document.body.style.overflow = "";
}
}

function submitSignup(event) {
event.preventDefault();

const name = document.getElementById("signupName").value;
const message = document.getElementById("signupMessage");

if (message) {
message.textContent = "Welcome to Muzz, " + name + "! Your signup was successful.";
}

event.target.reset();
}

// COUNTRY / LANGUAGE
document.addEventListener("DOMContentLoaded", function() {
  const countryButton = document.getElementById("countryButton");
  const countryMenu = document.getElementById("countryMenu");
  const selector = document.querySelector(".country-selector");

  if (countryButton && countryMenu) {
    countryButton.addEventListener("click", function(event) {
      event.stopPropagation();
      countryMenu.classList.toggle("active");
    });

    const options = document.querySelectorAll(".country-option");

    options.forEach(function(option) {
      option.addEventListener("click", function(event) {
        event.stopPropagation();

        const flag = option.dataset.flag;
        const language = option.dataset.language;

        const selectedFlag = document.getElementById("selectedFlag");
        const selectedLanguage = document.getElementById("selectedLanguage");

        if (selectedFlag) {
          selectedFlag.textContent = flag;
        }

        if (selectedLanguage) {
          selectedLanguage.textContent = language;
        }

        countryMenu.classList.remove("active");
      });
    });

    document.addEventListener("click", function(event) {
      if (selector && !selector.contains(event.target)) {
        countryMenu.classList.remove("active");
      }
    });
  }

  const modal = document.getElementById("signupModal");

  if (modal) {
    modal.addEventListener("click", function(event) {
      if (event.target === modal) {
        closeSignup();
      }
    });
  }

  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      closeSignup();
    }
  });
});