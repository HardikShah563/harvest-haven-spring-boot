// importing from react
import { useState } from "react";

export default function EditCat() {
    const [formData, setFormData] = useState({
        old_name: "",
        new_name: ""
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
                    <h1 class="title">Edit Category Name</h1>
                    <h1 class="subtitle">** Category of all the items in the particular category will change **</h1>

                    <form action="?" method="post">
                        <div class="input-box">
                            <div class="input msg" id={color}>
                                {msg}
                            </div>
                        </div>

                        <div class="input-box">
                            <label
                                for="old_name">
                                Select Category Name to be changed
                            </label>

                            <select
                                class="input"
                                name="old_name"
                                id="old_name"
                                value={formData.old_name}
                                onChange={handleChange}
                                required>
                                <option value="">-- None --</option>
                                {/* run for loop for category names */}
                                <option value="cat-name">Cat Name</option>
                            </select>
                        </div>

                        <div class="input-box">
                            <label
                                for="new_name">
                                New Name:
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
                            <button
                                class="form-btn"
                                type="submit"
                                onSubmit={handleSubmit}>
                                Edit Category
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
