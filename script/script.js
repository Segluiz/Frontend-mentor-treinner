const links = document.querySelector(".links");
const barradelinks = document.querySelector(".linhas");

barradelinks.addEventListener("click",()=>{
    links.classList.toggle("active")
})