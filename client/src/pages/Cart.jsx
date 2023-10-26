// importing from react
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// importing stylesheet
import "../style/shop.css";
// importing components
import Product from "../components/Product";

export default function Cart() {
    const navigate = useNavigate();

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/cart/all')
            .then(response => response.json())
            .then(data => {
                setCart(data);
            });
    }, []);

    return (
        <>
            <h1 className="category-title txt-ctr">Cart</h1>
            <div className="store">
                {cart.map(prod => (
                    <Product
                        prodId={prod.prodId}
                        prodName={prod.prodName}
                        prodQty={prod.prodQty}
                        prodPrice={prod.prodPrice}
                        prodType={prod.prodType}
                        prodURL={prod.prodURL}
                        prodStock={prod.prodStock}
                        prodStockAv={prod.prodStockAv}
                        prodQuantity={prod.quantity}
                        page={"cart"}
                    />
                ))}
            </div>
            <div onClick={() => { navigate("/checkout") }} class="black-btn">PLACE ORDER</div>
        </>
    );
};
