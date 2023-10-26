// importing from react
import { useEffect, useState } from "react";
// importing icons
import { BiPlus, BiMinus } from "react-icons/bi";

export default function Product(props) {
    const [qty, setQty] = useState(0);

    useEffect(() => {
        props.page === "cart" && setQty(props.prodQuantity);
        props.page === "checkout" && setQty(props.prodQuantity);
    }, [])

    async function reduceQty() {
        if (qty > 0) {
            const response = await fetch('http://localhost:8080/cart/remove', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...props, quantity: 1 })
            })
            console.log({ ...props, quantity: 1 });
            if (response)
                setQty(prevQty => --prevQty);
        }
    }

    async function increaseQty() {
        const response = await fetch('http://localhost:8080/cart/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...props, quantity: 1 })
        })
        console.log({ ...props, quantity: 1 });
        if (response)
            setQty(prevQty => ++prevQty);
    }

    return (
        <>
            <div class="store-item">
                <div class="flex">
                    <div class="store-item-img">
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                `/images/store_img/${props.prodURL}.png`
                            }
                            alt="store-item"
                        />
                    </div>

                    <div class="store-item-text">
                        <p class="store-item-title">
                            {props.prodName} ({props.prodQty})
                        </p>
                        <p class="store-item-price">
                            ₹{props.prodPrice}
                        </p>
                    </div>
                </div>

                <div class="quantity">
                    {props.page != "checkout" && (
                        <div class="minus" onClick={reduceQty}>
                            <BiMinus size={20} />
                        </div>
                    )}

                    <div class="qty">{qty}</div>

                    {props.page != "checkout" && (
                        <div class="plus" onClick={increaseQty}>
                            <BiPlus size={20} />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
