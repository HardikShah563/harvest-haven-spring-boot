// importing from react
import { useNavigate } from "react-router-dom";
// importing stylesheet
import "../style/shop.css";
// importing components
import Product from "../components/Product";

export default function Shop() {
    const navigate = useNavigate();

    const products = [{
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

    const categoryNames = ["loose", "dairy", "packaged"];

    return (
        <>
            {categoryNames.map(cat => (
                <>
                    <h1 className="category-title txt-ctr">{cat} Products</h1>
                    <div className="store">
                        {products.map(prod => (
                            prod.type == cat &&
                                <Product
                                    prodName={prod.name}
                                    prodQty={prod.qty}
                                    prodPrice={prod.price}
                                    prodType={prod.type}
                                    prodURL={prod.url}
                                />
                        ))}
                    </div>
                </>
            ))}

            <div onClick={() => {navigate("/cart")}} class="black-btn">GO TO CART</div>
        </>
    );
};
