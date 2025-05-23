const dialog = document.getElementById("myDialog");
const openBtn = document.getElementById("showModal");
const closeBtn = document.getElementById("closeModal");

openBtn.addEventListener("click", () => dialog.showModal());
closeBtn.addEventListener("click", () => dialog.close());
