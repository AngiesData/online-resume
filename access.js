/*
=========================================================
PRIVATE PORTFOLIO ACCESS GATE

This is a visual privacy gate for GitHub Pages.
Change PORTFOLIO_PASSWORD whenever you want a new password.
=========================================================
*/

const PORTFOLIO_PASSWORD = "2026";

const accessGate = document.getElementById("access-gate");
const protectedPortfolio = document.getElementById(
  "protected-portfolio"
);
const accessForm = document.getElementById("access-form");
const passwordInput = document.getElementById(
  "portfolio-password"
);
const accessError = document.getElementById("access-error");


function showPortfolio() {
  accessGate.classList.add("access-gate-hidden");
  protectedPortfolio.classList.add("portfolio-unlocked");

  sessionStorage.setItem("portfolioAccessGranted", "true");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


function showAccessGate() {
  accessGate.classList.remove("access-gate-hidden");
  protectedPortfolio.classList.remove("portfolio-unlocked");
}


const accessAlreadyGranted =
  sessionStorage.getItem("portfolioAccessGranted") === "true";

if (accessAlreadyGranted) {
  showPortfolio();
} else {
  showAccessGate();
}


accessForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const enteredPassword = passwordInput.value.trim();

  if (enteredPassword === PORTFOLIO_PASSWORD) {
    accessError.textContent = "";
    passwordInput.value = "";
    showPortfolio();
  } else {
    accessError.textContent =
      "The password entered was not recognized. Please try again.";

    passwordInput.select();
    passwordInput.focus();
  }
});
