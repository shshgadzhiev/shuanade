const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

document.querySelectorAll(".cert-card img").forEach(img => {

    img.addEventListener("click", () => {
        modal.classList.add("active");
        modalImg.src = img.src;
    });

});

modal.addEventListener("click", () => {
    modal.classList.remove("active");
});