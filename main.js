const toggleBtn = document.querySelector(".hamburger-menu")
const navList = document.querySelector(".mobile-list")

toggleBtn.addEventListener("click", function(){
    navList.classList.toggle("open")
    toggleBtn.classList.toggle("active")

})
