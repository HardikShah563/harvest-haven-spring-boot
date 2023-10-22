// importing from react
import { useState } from "react";

export default function DelProd() {
    const [formData, setFormData] = useState({
        p_id: 0,
    });

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    const [msg, setMsg] = useState("");
    const [color, setColor] = useState("green");
    
    function handleSubmit() {
        // send data to db
    }
    
    return (
        <>
            <div class="admin-forms">
                <div class="form">
                    <h1 class="title">Delete Item</h1>
                    <h1 class="subtitle">** Note: The action cannot be revoked, think before deleting **</h1>

                    <form action="?" method="post">
                        <div class="input-box">
                            <div class="input msg" id={color}>
                                {msg}
                            </div>
                        </div>

                        <div class="input-box">
                            <label
                                for="p_id">
                                Select Item to be deleted
                            </label>

                            <select
                                class="input"
                                name="p_id"
                                id="p_id"
                                value={formData.p_id}
                                onChange={handleChange}
                                required>
                                <option value="">-- None --</option>
                                {/* run a for loop for all the items in the particular category */}
                                <option value="item-name">Item Name</option>
                            </select>
                        </div>

                        <div class="input-box">
                            <button
                                class="form-btn"
                                type="submit"
                                onSubmit={handleSubmit}>
                                Delete Item
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
