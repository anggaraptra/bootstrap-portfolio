// menambahkan fungsi untuk menampilkan tulisan ketika diklik
function value() {
  const status = document.getElementById("status");
  status.innerHTML = " | Content Created";
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

// Fungsi mengacak warna navbar
const acak1 = document.querySelector(".acakWarna1");
const acak2 = document.querySelector(".acakWarna2");
const acakTombol1 = document.querySelector(".button1");
const acakTombol2 = document.querySelector(".button2");
const tombol1 = document.querySelector(".button1");

tombol1.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  acak1.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  acak2.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

tombol1.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  acakTombol1.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  acakTombol2.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

// Fungsi mengembalikan warna navbar ke semula
const tombol2 = document.querySelector(".button2");
tombol2.addEventListener("click", function () {
  acak1.style.backgroundColor = "#3b3b3b";
  acak2.style.backgroundColor = "#3b3b3b";
  acakTombol1.style.backgroundColor = "#6c757d";
  acakTombol2.style.backgroundColor = "#6c757d";
});
