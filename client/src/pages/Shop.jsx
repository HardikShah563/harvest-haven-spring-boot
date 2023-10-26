// importing from react
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// importing stylesheet
import "../style/shop.css";
// importing components
import Product from "../components/Product";

export default function Shop() {
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/products/all')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            });
    }, []);

    const categoryIds = [1, 2, 3, 4];
    const categoryNames = ["Loose", "Packaged", "Dairy", "Pulses"];

    return (
        <>
            {categoryIds.map(cat => (
                <div key={cat}>
                    <h1 className="category-title txt-ctr">{categoryNames[cat - 1]} Products</h1>
                    <div className="store">
                        {products.map(prod => (
                            prod.c_id == cat &&
                            <div key={prod._id}>
                                <Product
                                    prodId={prod.p_id}
                                    prodName={prod.p_name}
                                    prodQty={prod.p_qty}
                                    prodPrice={prod.p_price}
                                    prodType={prod.c_id}
                                    prodURL={prod.p_img}
                                    prodStock={prod.p_stock_qty}
                                    prodStockAv={prod.stock_available}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            <div onClick={() => { navigate("/cart") }} className="black-btn">GO TO CART</div>
        </>
    );
};
