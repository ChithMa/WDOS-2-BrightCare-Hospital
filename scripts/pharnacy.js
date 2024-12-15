console.log("test2..");



async function getData() {
    const resp = await fetch("JSON/medicine.json");
    const data = await resp.json();
    // console.log(resp);
    // console.log(data);
    return data;
};
/*
let Analgesics = document.getElementById("Analgesics");
let Antibiotics = document.getElementById("Antibiotics");
let Antidepressants = document.getElementById("Antidepressants");
let Antihistamines = document.getElementById("Antihistamines");
let Antihypertensives = document.getElementById("Antihypertensives");



let jsProductsGrid = document.querySelector(".js-products-grid");

async function printStuff() {
    let productDetails = await getData();
    let catogry = [];
    //when user clicks a catogry it shows that catogry's medicine
    document.body.addEventListener("click", (event) => {
        if (event.target.tagName ==="BUTTON" && event.target.id === "Analgesics"){
            console.log("you clicked Analgesics")
            catogry = productDetails.Analgesics
            // console.log(catogry)
        }else if (event.target.tagName === "BUTTON" && event.target.id === "Antibiotics"){
            console.log("you clicked Antibiotics");
            catogry = productDetails.Antibiotics
            console.log(catogry)  
        } else if (event.target.tagName ==="BUTTON" && event.target.id ==="Antidepressants"){
            console.log("you clicked Antidepressants")
            catogry = productDetails.Antidepressants
            console.log(catogry)  
        }else if (event.target.tagName === "BUTTON" && event.target.id === "Antihistamines"){
            console.log("you clicked Antihistamines");
            catogry = productDetails.Antihistamines
            console.log(catogry)  
        }else if (event.target.tagName === "BUTTON" && event.target.id ==="Antihypertensives"){
            console.log("you clicked Antihypertensives")
            catogry = productDetails.Antihypertensives
            console.log(catogry)  
            
        }
        renderProducts(catogry);
        
    } );
    
    
    // this is for default boxes 
    renderProducts(productDetails.Analgesics);
}

function renderProducts(catogry){
    let productsHTML = ``;
    for (let i = 0; i< catogry.length; i++){
        // console.log(catogry[i].name);
        jsProductsGrid.innerHTML = 
        productsHTML = productsHTML +
        `<div class="product-container">
            <div class="product-image-container">
                <img src="${catogry[i].image}" alt="Paracetamol" width = "250px" height= "300px">
            </div>
            
            <div class="product-name">
                <p>${catogry[i].name}</p>
            </div>
    
            <div class="product-price">
                <p class="Price">RS.${catogry[i].priceCents}.00</p>
            </div>
    
            <div class="product-info">
                <p class="medicineExplaination">${catogry[i].info}</p>
            </div>
    
            <button class="addToCartBtn">
                Add to cart
            </button>
        </div>`;
    }
    
    attachEventListeners();
}


// printStuff();


// add medicine to the cart table


// Add event listeners to each ".addToCartBtn" button
function attachEventListeners(){
    
    let addToCartBtns =  document.querySelectorAll(".addToCartBtn");
    // console.log (addToCartBtns)
    for (i = 0; i < addToCartBtns.length; i++){
        addToCartBtns[i].addEventListener("click",addMedicineToCart);
    }
}






// add medicine to cart table
let cartProducts ='';
let total = 0;
function addMedicineToCart(event){
    console.log("Medicine added to the cart");
    const productContainer  = event.target.closest(".product-container"); //this will select the product-container class of the selected button
    // console.log(productContainer)
    const productName = productContainer.querySelector(".product-name p").textContent;//this store the  content of product-name p
    const productPrice = productContainer.querySelector(".product-price p").textContent;

    let cartTable = document.querySelector(".cart-table tbody");
    console.log(productPrice);


    
    cartTable.innerHTML=
        cartProducts += `
        <tr>
            <td>${productName}</td>
            <td>${productPrice}</td>
            <td class="cartQuentity"></td>
            <td>total</td>
        </tr>`
    

}
// attachEventListeners();
// console.log("hello world");


printStuff();
*/



printStuff();

let jsProductsGrid = document.querySelector(".js-products-grid");


async function printStuff(){

    let productDetails = await getData();

    // console.log(productDetails.medicine);
    let productsHTML = ``;
    let categoryNameJS ="";
    let categorypath = [];
    const categoryjson = Object.keys(productDetails.medicine);
    const numberOfCategories = categoryjson.length;

    console.log("Number of categories:", numberOfCategories);
    
    for (let j = 0; j < numberOfCategories; j++) {
        if (j === 0){
            categorypath = productDetails.medicine.Analgesics;
            categoryNameJS = "Analgesics";
        }else if (j == 1){
            categorypath = productDetails.medicine.Antibiotics;
            categoryNameJS = "Antibiotics";
        }else if (j == 2){
            categorypath = productDetails.medicine.Antidepressants;
            categoryNameJS = "Antidepressants";
        }else if (j == 3){
            categorypath = productDetails.medicine.Antihistamines;
            categoryNameJS = "Antihistamines";
        }else{
            categorypath = productDetails.medicine.Antihypertensives;
            categoryNameJS = "Antihypertensives";
        };
        
        // Add the topic heading and start the category container
        jsProductsGrid.innerHTML += `
        <div class="categoryName">
            <h1>${categoryNameJS}</h1>
        </div>
        <div class="categories" id="category-${j}">
        </div>
        `;
    
        let categoryHTML = ''; // Temporary container for products in this category
    
        // Loop through the Analgesics array and create product HTML
        for (let i = 0; i < categorypath.length; i++) {
            // console.log(categorypath[i].name);
    
            categoryHTML += `
            <div class="product-container">
                <div class="product-image-container">
                    <img src="${categorypath[i].image}" alt="Paracetamol" width="250px" height="300px">
                </div>
                
                <div class="product-name">
                    <p>${categorypath[i].name}</p>
                </div>
        
                <div class="product-price">
                    <p class="Price">RS.${categorypath[i].priceCents}.00</p>
                </div>
        
                <div class="product-info">
                    <p class="medicineExplaination">${categorypath[i].info}</p>
                </div>

                <div class="quantity-selector">
                    <label for="quantity-${i}">Quantity:</label>
                    <input type="number" id="quantity-${i}" class="quantity-input" value="1" min="1" aria-label="Enter quantity">
                </div>
        
                <button class="addToCartBtn">
                    Add to cart
                </button>
            </div>`;
        }
    
        // Add the products to the current category container
        document.getElementById(`category-${j}`).innerHTML = categoryHTML;
    }



    //add medicine to the cart table
    let addToCartBtn = document.querySelectorAll(".addToCartBtn");
    // console.log(addToCartBtn);
    for (i = 0; i < addToCartBtn.length; i++){
        addToCartBtn[i].addEventListener("click", addMedicineToCart);
    }
    
}

// Add medicine to cart table
let cartProducts = {}; // Use an object to track cart items
let total = 0;

function addMedicineToCart(event) {
    const productContainer = event.target.closest(".product-container"); // Select the product-container class of the clicked button
    const productName = productContainer.querySelector(".product-name p").textContent; // Get product name
    const productPriceText = productContainer.querySelector(".product-price p").textContent;
    const quantityInput = productContainer.querySelector(".quantity-input");
    
    
    // Extract the numeric price 
    const productPrice = parseInt(productPriceText.replace("RS.", "").replace(".00", ""));
    const quantity = parseInt(quantityInput.value) || 1;
    
    let cartTable = document.querySelector(".cart-table tbody");

    // Check if product already exists in cart
    if (cartProducts[productName]) {
        // If it exists, increase the quantity and update the total price for the item
        cartProducts[productName].quantity += quantity;
        cartProducts[productName].totalPrice += productPrice * quantity;
    } else {
        // If it doesn't exist, add the product to the cart
        cartProducts[productName] = {
            price: productPrice,
            quantity: quantity,
            totalPrice: productPrice*quantity
        };
    }
    console.log(cartProducts);


    // Save the cart to localStorage
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

    // Re-render the cart table
    cartTable.innerHTML = ""; // Clear the current table rows
    for (const [name, details] of Object.entries(cartProducts)) {
        cartTable.innerHTML += `
        <tr>
            <td>${name}</td>
            <td>RS.${details.price}.00</td>
            <td class="cartQuantity">${details.quantity}</td>
            <td>RS.${details.totalPrice}.00</td>
        </tr>`;
    };
    updateCartTotal(); // Update the total
};


// Add products to favorites
let addToFavouriteBtn = document.querySelector(".addToFavouriteBtn button");
addToFavouriteBtn.addEventListener("click", addCartToFavorites);

function addCartToFavorites() {
    if (Object.keys(cartProducts).length === 0) {
        alert("Cart is empty. Add products before adding to favorites.");
        return;
    }

    localStorage.setItem("favoriteProducts", JSON.stringify(cartProducts));
    alert("Products added to favorites!");
}

// Apply favorites to cart
let applyFavoriteBtn = document.querySelector(".applyFavoriteBtn button");
applyFavoriteBtn.addEventListener("click", applyFavoritesToCart);

function applyFavoritesToCart() {
    const favoriteProducts = JSON.parse(localStorage.getItem("favoriteProducts")) || {};
    if (Object.keys(favoriteProducts).length === 0) {
        alert("No favorite products to apply!");
        return;
    }

    cartProducts = { ...favoriteProducts };
    // total = 0;

    let cartTable = document.querySelector(".cart-table tbody");
    cartTable.innerHTML = "";
    for (const [name, details] of Object.entries(cartProducts)) {
        // total += details.totalPrice;
        cartTable.innerHTML += `
        <tr>
            <td>${name}</td>
            <td>RS.${details.price}.00</td>
            <td>${details.quantity}</td>
            <td>RS.${details.totalPrice}.00</td>
        </tr>`;
    }

    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    updateCartTotal(); // Update the total
    alert("Favorite products applied to the cart.");
}

// Handle purchase
let purchaseButton = document.querySelector(".Purchase-button button");
purchaseButton.addEventListener("click", handlePurchase);

function handlePurchase(event) {
    event.preventDefault(); // Prevent default action (useful if it's a link or inside a form)

    // Retrieve cart from localStorage
    let cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || {};

    // Check if the cart is empty
    if (Object.keys(cartProducts).length === 0) {
        alert("Cart is empty. Please add items before proceeding to purchase.");
        return;
    }

    // If cart has items, navigate to the checkout page
    alert("Thank you");
    window.location.href = "PHARMACY-FORM.HTML";
}

// Load favorites on page load
window.addEventListener("load", printFavorites);

function printFavorites() {
    const favoriteProducts = JSON.parse(localStorage.getItem("favoriteProducts")) || {};
    let cartTable = document.querySelector(".cart-table tbody");
    cartTable.innerHTML = "";

    for (const [name, details] of Object.entries(favoriteProducts)) {
        cartTable.innerHTML += `
        <tr>
            <td>${name}</td>
            <td>RS.${details.price}.00</td>
            <td>${details.quantity}</td>
            <td>RS.${details.totalPrice}.00</td>
        </tr>`;
    }
};

// Clear Cart Functionality
let clearCartBtn = document.querySelector(".clearCartBtn button");
clearCartBtn.addEventListener("click", clearCart);

function clearCart() {
    cartProducts = {}; // Reset the cartProducts object
    localStorage.removeItem("cartProducts"); // Remove from localStorage

    let cartTable = document.querySelector(".cart-table tbody");
    cartTable.innerHTML = ""; // Clear the cart table
    updateCartTotal(); // Reset the total
    alert("Cart has been cleared.");
}

function updateCartTotal() {
    total = Object.values(cartProducts).reduce((acc, item) => acc + item.totalPrice, 0); // Calculate total
    document.getElementById("cart-total").textContent = `RS.${total}.00`; // Update total in the table footer
}





/*
// add medicine to cart table
let cartProducts ='';
let total = 0;
function addMedicineToCart(event){
    // console.log("Medicine added to the cart");
    const productContainer  = event.target.closest(".product-container"); //this will select the product-container class of the selected button
    console.log(productContainer);
    // if (productContainer == )
    
    
    const productName = productContainer.querySelector(".product-name p").textContent;//this store the  content of product-name p
    const productPrice = productContainer.querySelector(".product-price p").textContent;

    let cartTable = document.querySelector(".cart-table tbody");
    console.log(productPrice);


    
    cartTable.innerHTML=
        cartProducts += `
        <tr>
            <td>${productName}</td>
            <td>${productPrice}</td>
            <td class="cartQuentity"></td>
            <td>total</td>
        </tr>`
    

}*/
// attachEventListeners();
// console.log("hello world");


// printStuff();













/*
let productsHTML = ``;
products.forEach((product) => {
    productsHTML = productsHTML +
    `<div class="product-container">
        <div class="product-image-container">
            <img src="${product.image}" alt="Paracetamol" width="250px">
        </div>
        
        <div class="product-name">
            <p>${product.name}</p>
        </div>

        <div class="product-price">
            <p class="Price">RS.${product.priceCents}.00</p>
        </div>

        <div class="product-info">
            <p class="medicineExplaination">${product.info}</p>
        </div>

        <button class="addToCartBtn">
            Add to cart
        </button>
    </div>`
});
*/




// the below code is for pharmacy form page


let confirmBtn = document.getElementById("confirmBtn");

confirmBtn.addEventListener("click",confirmTheCart);

function confirmTheCart(){
    alert("you confirmed the medicine");
}

