// importing from react
import { useState } from "react";

export default function EditProd() {
    const [formData, setFormData] = useState({
        p_id: 0,
        new_name: "",
        c_id: 0,
        p_qty: 0,
        p_price: 0,
        p_stock_qty: 0,
    });

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    const [msg, setMsg] = useState("");
    const [color, setColor] = useState("");

    function handleSubmit(event) {
        // pass the states into db
    }

    return (
        <>
            <div class="admin-forms">
                <div class="form">
                    <h1 class="title">Edit Item Details</h1>
                    <h1 class="subtitle">** If you do not wish to edit any detail, leave the field empty **</h1>

                    <form action="{{ url_for('editItem') }}" method="post">
                        <div class="input-box">
                            <div class="input msg" id={color}>
                                {msg}
                            </div>
                        </div>

                        <div class="input-box">
                            <label
                                for="p_id">
                                Item Name to be edited:
                            </label>

                            <select
                                class="input"
                                name="p_id"
                                id="p_id"
                                value={formData.p_id}
                                onChange={handleChange}
                                required>
                                <option value="">-- None --</option>
                                {/* for loop for product names */}
                                <option value="prod_id">prod name</option>
                            </select>
                        </div>

                        <div class="input-box">
                            <label
                                for="new_name">
                                New Name for the item selected above:
                            </label>

                            <input
                                class="input"
                                type="text"
                                name="new_name"
                                id="new_name"
                                value={formData.new_name}
                                onChange={handleChange}
                                placeholder="Eg: Veg Aata Maggi"
                                autocomplete="off"
                                required
                            />
                        </div>

                        <div class="input-box">
                            <label
                                for="c_id">
                                Update Category:
                            </label>

                            <select
                                class="input"
                                name="c_id"
                                id="c_id"
                                value={formData.c_id}
                                onChange={handleChange}
                                required>
                                <option value="">-- None --</option>
                                {/* for loop for category names */}
                                <option value="cat-id">cat name</option>
                            </select>
                        </div>

                        <div class="input-box">
                            <label
                                for="p_qty">
                                Update Item's Pack Size:
                            </label>

                            <input
                                class="input"
                                type="text"
                                name="p_qty"
                                id="p_qty"
                                value={formData.p_qty}
                                onChange={handleChange}
                                placeholder="Eg: 200g/ 500ml/ ..."
                                autocomplete="off"
                                required
                            />
                        </div>

                        <div class="input-box">
                            <label
                                for="p_price">
                                Update Price: (In ₹)
                            </label>

                            <input
                                class="input"
                                type="text"
                                name="p_price"
                                id="p_price"
                                value={formData.p_price}
                                onChange={handleChange}
                                placeholder="Eg: 299"
                                autocomplete="off"
                                required
                            />
                        </div>

                        <div class="input-box">
                            <label
                                for="p_stock_qty">
                                Manually Update Quantity: (No. of products in the inventory)
                            </label>

                            <input
                                class="input"
                                type="number"
                                name="p_stock_qty"
                                id="p_stock_qty"
                                value={formData.p_stock_qty}
                                onChange={handleChange}
                                placeholder="Eg: 50"
                                autocomplete="off"
                            />
                        </div>

                        <div class="input-box">
                            <button
                                class="form-btn"
                                type="submit"
                                onSubmit={handleSubmit}>
                                Edit Item
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
