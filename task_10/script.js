// Modal Opening
let openModalButton = document.getElementById("openModalBtn");
let myModal = document.getElementById("myModal");
openModalButton.addEventListener("click", function () { myModal.style.display = "block" });

// Modal Closing
let closeModal = document.querySelector(".close");
closeModal.addEventListener("click", function () { myModal.style.display = "none" });
window.addEventListener("click", function (event) {
    if (event.target == myModal) { myModal.style.display = "none" }
});

// Dynamic Title
let dynamicTitle = prompt("Enter a new title");
let modalTitle = document.getElementById("modalTitle");
modalTitle.innerHTML = dynamicTitle