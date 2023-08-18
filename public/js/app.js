const submenu = document.getElementById("submenu");
const menuItems = document.querySelectorAll(".desktop_nav ul li");
const openformAuth = document.getElementById("open_formAuth")
const model = document.querySelector('.over_lay')
const closeformAuth = document.querySelector(".form_close i")
const inputFocus = document.querySelector(".search_box input")
const searchRecommen = document.querySelector(".search_box-recommen")

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

//Search Recommend
inputFocus.addEventListener('input', (e)=>{
    const searchValue = inputFocus.value.toLowerCase()
    if(searchValue){
        searchRecommen.classList.remove("hidd")
    }
})
searchRecommen.addEventListener("click", (event) => {
    searchRecommen.classList.remove('hidd')
});

document.addEventListener('click', (e) => {
    if (!searchRecommen.contains(e.target)) {
        searchRecommen.classList.add("hidd")
    }
});

//Test Search
const products = [
    { name: "Laptop", category: "electronics", image: "baolo-1.jpg", price: "$1000" },
    { name: "T-shirt", category: "clothing", image: "baolo-1.jpg", price: "$20" },
    // ...
];


function displayResults(filteredProducts, categories) {
    searchRecommen.innerHTML = '';
    if (filteredProducts.length === 0) {
        searchRecommen.innerHTML = 'No results found.';
        return;
    }

    const recommenList = document.createElement('ul');
    recommenList.classList.add('recommen_list');

    categories.forEach(category => {
        const recommenItem = document.createElement('li');
        recommenItem.classList.add('recommen_item');

        const categoryLink = document.createElement('a');
        categoryLink.textContent = category;
        recommenItem.appendChild(categoryLink);

        const productSmallBoxList = document.createElement('ul');
        productSmallBoxList.classList.add('product_smallbox-list');

        const productsInCategory = filteredProducts.filter(product => product.category === category);
        productsInCategory.forEach(product => {
            const productSmallBox = document.createElement('li');
            productSmallBox.innerHTML = `
                <div class="product_smallbox">
                    <img src="${product.image}" alt="${product.name}">
                    <span>${product.name}</span>
                    <span>${product.price}</span>
                </div>
            `;
            productSmallBoxList.appendChild(productSmallBox);
        });

        recommenItem.appendChild(productSmallBoxList);
        recommenList.appendChild(recommenItem);
    });

    searchRecommen.appendChild(recommenList);
}

function filterProducts() {
    const searchTerm = inputFocus.value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));

    const categories = [...new Set(filteredProducts.map(product => product.category))];
    displayResults(filteredProducts, categories);
}

inputFocus.addEventListener('input', filterProducts);

// Initial display
filterProducts();



