// menambahkan fungsi untuk menampilkan tulisan ketika diklik
function value() {
  const status = document.getElementById("status");
  status.innerHTML = " | Content Created | Programmer";
}

// fungsi untuk mengirimkan data ke google sheet
const scriptURL = "https://script.google.com/macros/s/AKfycbxCBuyn_RAlmO8PyjfsI72eURllaXvKLRYsFB9G3INdbvREu1idpRjCFLvaUILBLWPO/exec";
const form = document.forms["contact-form-myportfolio"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const alert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // ketika tombol submit diklik
  // tampilkan tombol loading, hilangkan tombol kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // tampilkan tombol kirim, hilangkan tombol loading
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      // my alert
      alert.classList.toggle("d-none");
      // reset formnya
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
