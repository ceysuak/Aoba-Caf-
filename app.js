const modal = document.getElementById("modal");
const openBtn = document.getElementById("btn");
const closeBtn = document.getElementById("closeModal");


openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});


modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

