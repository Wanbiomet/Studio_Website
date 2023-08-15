const submenu = document.getElementById("submenu");
const menuItems = document.querySelectorAll(".desktop_nav ul li");
const openformAuth = document.getElementById("open_formAuth")
const model = document.querySelector('.over_lay')
const closeformAuth = document.querySelector(".form_close i")
const inputFocus = document.querySelector(".search_box input")
const serachRecommen = document.querySelector(".search_box-recommen")
console.log(inputFocus)
menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", (event) => {
        event.preventDefault();
        submenu.classList.toggle('active')
    });
});

// Model - Form Auth
function toggleModel(e){
    model.classList.toggle('hidd')
}
openformAuth.addEventListener("click", toggleModel)
closeformAuth.addEventListener("click", toggleModel)
model.addEventListener('click', (e) => {
    if(e.target === e.currentTarget){
        toggleModel()
    }
})

//Search Recommmen
inputFocus.addEventListener('focus', (e) =>{
    serachRecommen.classList.toggle('hidd')
})
