// importing from react
import { useNavigate } from "react-router-dom";
// importing stylesheet
import "../style/shop.css";
// importing components
import Product from "../components/Product";

export default function Cart() {
    const navigate = useNavigate();

    const products = [{
        name: "SACK OF ONION",
        qty: "1kg",
        price: 54.99,
        type: "loose",
        url: "onions"
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
        name: "EGGS",
        qty: "6 pieces",
        price: 59.99,
        type: "packaged",
        url: "eggs6"
    }, {
        name: "PASTA",
        qty: "100g",
        price: 24.99,
        type: "packaged",
        url: "pasta"
    }, {
        name: "CEREALS",
        qty: "250g",
        price: 63.49,
        type: "packaged",
        url: "cereals"
    }];

    const typeOfCategories = 0;
    const categoryNames = ["loose", "dairy", "packaged"];

    return (
        <>
            <h1 className="category-title txt-ctr">Cart</h1>
            <div className="store">
                {products.map(prod => (
                    <Product
                        prodName={prod.name}
                        prodQty={prod.qty}
                        prodPrice={prod.price}
                        prodType={prod.type}
                        prodURL={prod.url}
                    />
                ))}
            </div>
            <div onClick={() => {navigate("/checkout")}} class="black-btn">PLACE ORDER</div>
        </>
    );
};
