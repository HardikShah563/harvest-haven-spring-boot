products = [{
    name: "SACK OF ONION",
    qty: "1kg",
    price: 54.99,
    type: "loose",
    url: "onions"
}, {
    name: "FRESH CARROTS",
    qty: "500g",
    price: 34.49,
    type: "loose",
    url: "carrots"
}, {
    name: "SACK OF POTATOS",
    qty: "1kg",
    price: 59.99,
    type: "loose",
    url: "potatos"
}, {
    name: "LADY FINGER",
    qty: "500g",
    price: 54.99,
    type: "loose",
    url: "ladyfinger"
}, {
    name: "TOMATOS",
    qty: "250g",
    price: 129.99,
    type: "loose",
    url: "tomatos"
}, {
    name: "CORN",
    qty: "1 full",
    price: 18.49,
    type: "loose",
    url: "corn"
}, {
    name: "BANANAS",
    qty: "1/2 Dozen",
    price: 54.99,
    type: "loose",
    url: "bananas"
}, {
    name: "JUICY LEMONS",
    qty: "4 pieces",
    price: 11.99,
    type: "loose",
    url: "lemon"
}, {
    name: "BUTTER",
    qty: "500g",
    price: 54.99,
    type: "dairy",
    url: "butter"
}, {
    name: "SLICED BREAD",
    qty: "16 slices",
    price: 54.99,
    type: "packaged",
    url: "bread"
}, {
    name: "BUN",
    qty: "6 pieces",
    price: 24.99,
    type: "packaged",
    url: "bun"
}, {
    name: "MILK",
    qty: "500ml",
    price: 54.49,
    type: "dairy",
    url: "milk"
}, {
    name: "FROZEN GREEN PEAS",
    qty: "500g",
    price: 129.99,
    type: "packaged",
    url: "peas"
}, {
    name: "EGGS",
    qty: "6 pieces",
    price: 59.99,
    type: "packaged",
    url: "eggs6"
}, {
    name: "EGGS",
    qty: "8 pieces",
    price: 79.99,
    type: "packaged",
    url: "eggs8"
}, {
    name: "PASTA",
    qty: "100g",
    price: 24.99,
    type: "packaged",
    url: "pasta"
}, {
    name: "CHEESE SPREAD",
    qty: "250g",
    price: 144.99,
    type: "dairy",
    url: "cheese"
}, {
    name: "CHOCOLATE BAR",
    qty: "100g",
    price: 24.99,
    type: "packaged",
    url: "chocolate"
}, {
    name: "CEREALS",
    qty: "250g",
    price: 63.49,
    type: "packaged",
    url: "cereals"
}];

let emptyDiv = document.getElementById("loose-store");

function looseItems() {
    for (let i = products.length - 1; i >= 0; i--) {
        if (products[i].type === "loose") {
            let newProductItem = `
                <div class="store-item">
                    <div class="flex">
                        <div class="store-item-img">
                            <img src="./assets/${products[i].url}.png" alt="store-item">
                        </div>
                        
                        <div class="store-item-text">
                            <p class="store-item-title">
                            ${products[i].name} (${products[i].qty})
                            </p>
                            <p class="store-item-price">
                                ₹${products[i].price}
                            </p>
                        </div>
                    </div>
            
                    <div class="quantity">
                        <div class="minus">
                            <i class="fa-solid fa-minus"></i>
                        </div>
                        <div class="qty">01</div>
                        <div class="plus">
                            <i class="fa-solid fa-plus"></i>
                        </div>
                    </div>
                </div>
            `;
            emptyDiv.insertAdjacentHTML("afterbegin", newProductItem);
        }
    }
}

looseItems();

let emptyDiv2 = document.getElementById("packaged-store");

function packagedItems() {
    for (let i = products.length - 1; i >= 0; i--) {
        if (products[i].type === "packaged") {
            let newProductItem = `
                <div class="store-item">
                    <div class="flex">
                        <div class="store-item-img">
                            <img src="./assets/${products[i].url}.png" alt="store-item">
                        </div>
                        
                        <div class="store-item-text">
                            <p class="store-item-title">
                            ${products[i].name} (${products[i].qty})
                            </p>
                            <p class="store-item-price">
                                ₹${products[i].price}
                            </p>
                        </div>
                    </div>
            
                    <div class="quantity">
                        <div class="minus">
                            <i class="fa-solid fa-minus"></i>
                        </div>
                        <div class="qty">01</div>
                        <div class="plus">
                            <i class="fa-solid fa-plus"></i>
                        </div>
                    </div>
                </div>
            `;
            emptyDiv2.insertAdjacentHTML("afterbegin", newProductItem);
        }
    }
}

packagedItems();