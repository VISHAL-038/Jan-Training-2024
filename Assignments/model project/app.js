document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");
    const modalBtn = document.querySelector(".modal-btn");
    const modal = document.querySelector(".modal-overlay");
    const closeBtn = document.querySelector(".close-btn");
   
    console.log("modalBtn: ", modalBtn);
    console.log("modal: ", modal);
    console.log("closeBtn: ", closeBtn);
   
    modalBtn.addEventListener("click", function () {
       modal.classList.add("open-modal");
    });
   
    closeBtn.addEventListener("click", function () {
       modal.classList.remove("open-modal");
    });
   });