// importing from react
import { useState, useEffect } from "react";
// importing stylesheets
import "../style/checkout.css";
import "../style/shop.css";
import "../style/form.css";
import Product from "../components/Product";

export default function Checkout() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/cart/all')
            .then(response => response.json())
            .then(data => {
                setCart(data);
            });
    }, []);

    let subTotal = 0;
    cart.map((prod) => {
        subTotal += prod.quantity * prod.prodPrice;
    });
    let tax = 0.09 * subTotal;

    const [msg, setMsg] = useState("");
    const [color, setColor] = useState("");

    const [formData, setFormData] = useState({
        o_id:"",
        name: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zip: 0,
        card_name: "",
        card_no: "",
        card_exp: "",
        cvv: "",
    });

    const [sendData, setSendData] = useState({
        o_id: 0,
        u_id: 1,
        addr: "",
        order_total: 0,
        purchase: "",
        total_order_qty: ""
    });

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    fetch('http://localhost:8080/orders/all')
        .then(response => response.json())
        .then(data => {
            data.map((prod) => {
                if (prod.o_id > sendData.o_id) {
                    setSendData(prevData => ({
                        ...prevData, o_id: (prod.o_id + 1)
                    }))
                }
            })
        });

    async function handleSubmit(event) {
        event.preventDefault();
        console.log(sendData);
        setSendData(prevData => ({
            ...prevData, addr: (formData.address + ", " + formData.city + ", " + formData.state + ", " + formData.zip)
        }))

        cart.map((prod) => {
            setSendData(prevData => ({
                ...prevData, 
                purchase: (sendData.purchase.concat(prod.prodName + " : " + prod.quantity + ", ")),
                total_order_qty: sendData.total_order_qty + prod.quantity
            }))
        })

        // pass the states into db
        const response = await fetch('http://localhost:8080/orders/place', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(sendData)
        });
        console.log(response);
        setMsg(response ? "Order Placed" : "Order Failed To Place");
        if (msg == "Order Placed")
            setColor("green");
        else
            setColor("red");
    }

    return (
        <>
            <div className="checkout flex">
                <div className="checkout-form">
                    <div className="form">
                        <h1 className="title">Checkout With Your Purchase</h1>
                        <h1 className="subtitle">** Enter authentic details to complete the purchase **</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="input-box">
                                <div className="input msg" id={color}>
                                    {msg}
                                </div>
                            </div>

                            <h1 className="title">Billing Details:</h1>

                            <div className="input-box">
                                <label
                                    htmlFor="fullname">
                                    <i className="fa fa-user"></i> Full Name:
                                </label>

                                <input
                                    className="input"
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Eg: Hardik Shah"
                                    autoComplete="off"
                                    required
                                />
                            </div>

                            <div className="input-box">
                                <label
                                    htmlFor="email">
                                    <i className="fa fa-envelope"></i> Email:
                                </label>

                                <input
                                    className="input"
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Eg: abc@gmail.com"
                                    autoComplete="off"
                                    required
                                />
                            </div>

                            <div className="input-box">
                                <label
                                    htmlFor="name">
                                    <i className="fa fa-address-card-o"></i> Address:
                                </label>

                                <input
                                    className="input"
                                    type="text"
                                    name="address"
                                    id="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="Eg: 101/C, Bldg Name"
                                    autoComplete="off"
                                    required
                                />
                            </div>

                            <div className="input-box">
                                <label
                                    htmlFor="city">
                                    <i className="fa fa-institution"></i> City:
                                </label>

                                <input
                                    className="input"
                                    type="text"
                                    name="city"
                                    id="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    placeholder="Eg: Mumbai"
                                    autoComplete="off"
                                    required
                                />
                            </div>

                            <div className="input-box">
                                <label
                                    htmlFor="state">
                                    <i className="fa-solid fa-mountain-city"></i> State:
                                </label>

                                <input
                                    className="input"
                                    type="text"
                                    name="state"
                                    id="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    placeholder="Eg: Maharasthra"
                                    autoComplete="off"
                                    required
                                />
                            </div>

                            <div className="input-box">
                                <label
                                    htmlFor="zip">
                                    <i className="fa-solid fa-location-crosshairs"></i> Zip:
                                </label>

                                <input
                                    className="input"
                                    type="number"
                                    name="zip"
                                    id="zip"
                                    value={formData.zip}
                                    onChange={handleChange}
                                    placeholder="Eg: 400010"
                                    autoComplete="off"
                                    required
                                />
                            </div>

                            <h1 className="title">Payment Details:</h1>
                            <h1 className="subtitle">Accepted Cards</h1>
                            <h1 className="flex gap-5 title">
                                <i className="fa fa-cc-visa" id="navy-card"></i>
                                <i className="fa fa-cc-amex" id="blue-card"></i>
                                <i className="fa fa-cc-mastercard" id="red-card"></i>
                                <i className="fa fa-cc-discover" id="orange-card"></i>
                            </h1>

                            <div className="input-box">
                                <label
                                    htmlFor="city">
                                    <i className="fa-solid fa-signature"></i> Name on the card:
                                </label>

                                <input
                                    className="input"
                                    type="text"
                                    name="card_name"
                                    id="card_name"
                                    value={formData.card_name}
                                    onChange={handleChange}
                                    placeholder="Eg: Hardik T Shah"
                                    autoComplete="off"
                                    required
                                />
                            </div>

                            <div className="input-box">
                                <label
                                    htmlFor="card-no">
                                    <i className="fa-solid fa-list-ol"></i> Card Number:
                                </label>

                                <input
                                    className="input"
                                    type="text"
                                    name="card_no"
                                    id="card_no"
                                    value={formData.card_no}
                                    onChange={handleChange}
                                    placeholder="Eg: 1234-5678-1011-1213"
                                    autoComplete="off"
                                    required
                                />
                            </div>

                            <div className="input-box">
                                <label
                                    htmlFor="card-exp">
                                    <i className="fa-solid fa-calendar-days"></i> Expiry Date:
                                </label>

                                <input
                                    className="input"
                                    type="month"
                                    name="card_exp"
                                    id="card_exp"
                                    value={formData.card_exp}
                                    onChange={handleChange}
                                    autoComplete="off"
                                    required
                                />
                            </div>

                            <div className="input-box">
                                <label
                                    htmlFor="card-cvv">
                                    <i className="fa-solid fa-key"></i> CVV:
                                </label>

                                <input
                                    className="input"
                                    type="password"
                                    name="cvv"
                                    id="cvv"
                                    value={formData.cvv}
                                    onChange={handleChange}
                                    autoComplete="off"
                                    placeholder="Eg: ***"
                                    required
                                />
                            </div>

                            <div className="input-box">
                                <button
                                    className="form-btn"
                                    type="submit">
                                    Complete Purchase
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="checkout-store">
                    <h1 className="title">Cart Items</h1>

                    <div className="store" id="cart-items">
                        {cart.map(prod => (
                            <>
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
                                    page={"checkout"}
                                />
                            </>
                        ))}
                    </div>
                    <br />
                    <hr />
                    <div className="checkout-total flex">
                        <h1 className="subtitle">Subtotal&emsp;&nbsp;: </h1>
                        <h1 className="subtitle">₹{subTotal}</h1>
                    </div>
                    <div className="checkout-total flex">
                        <h1 className="subtitle">CGST (9%)&nbsp;&nbsp;&nbsp;: </h1>
                        <h1 className="subtitle">₹{tax}</h1>
                    </div>
                    <div className="checkout-total flex">
                        <h1 className="subtitle">SGST (9%)&nbsp;&nbsp;&nbsp;: </h1>
                        <h1 className="subtitle">₹{tax}</h1>
                    </div>
                    <hr />
                    <div className="checkout-total flex">
                        <h1 className="title">Grand Total: </h1>
                        <h1 className="title">₹{subTotal + (2 * tax)}</h1>
                    </div>
                </div>
            </div>
        </>
    );
};
