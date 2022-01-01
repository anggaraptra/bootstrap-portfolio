// Status info
function value() {
  const status = document.getElementById("status");
  status.innerHTML = " | Content Created | Programmer";
}

// Function send massage to google sheet
const scriptURL = "https://script.google.com/macros/s/AKfycbxCBuyn_RAlmO8PyjfsI72eURllaXvKLRYsFB9G3INdbvREu1idpRjCFLvaUILBLWPO/exec";
const form = document.forms["contact-form-myportfolio"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const alert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // if submit button is clicked
  // show loading button and hide send button
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // show send button and hide loading button
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      // my alert
      alert.classList.toggle("d-none");
      // reset form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

// Navbar active
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });
  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});
