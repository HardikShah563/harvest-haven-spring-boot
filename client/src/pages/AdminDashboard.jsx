// importing from react
import { useNavigate } from "react-router-dom";
// importing stylesheets
import "../style/shop.css";
// importing icons
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

export default function AdminDashboard() {
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
            <div className="admin-page">
                <h1 className="title txt-ctr">Welcome Store Manager</h1>

                <div className="store">
                    {categoryNames.map(cat => (
                        <>
                            <div class="store-item category">
                                <h1 className="store-item-title txt-ctr">{cat} PRODUCTS</h1>
                                <div class="edit-category flex gap-5">
                                    <div class="item add item-btn gap-5 w-100" id="edit" onClick={() => {navigate("/edit-cat")}}>
                                        <BiEditAlt size={25} />
                                        Edit
                                    </div>
                                    <div class="item add item-btn gap-5 w-100" id="delete" onClick={() => {navigate("/del-cat")}}>
                                        <AiOutlineDelete size={25} />
                                        Delete
                                    </div>
                                </div>
                                {products.map(prod => (
                                    prod.type == cat &&
                                    (
                                        <>
                                            <div class="item">
                                                <div class="item-name">
                                                    {prod.name}
                                                </div>
                                                <div class="item-amt">
                                                    ₹{prod.price}
                                                </div>
                                                <div class="flex">
                                                    <div className="item-btn item-btn-2" id="edit" onClick={() => {navigate("/edit-prod")}}>
                                                        <BiEditAlt size={25} />
                                                    </div>
                                                    <div class="item-btn item-btn-2" id="delete" onClick={() => {navigate("/del-prod")}}>
                                                        <AiOutlineDelete size={25} />
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                ))}
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    );
};
