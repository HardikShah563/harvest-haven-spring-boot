// importing from react
import { useState } from "react";

export default function DelCat() {
    const [formData, setFormData] = useState({
        c_id: "",
    });

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    const [msg, setMsg] = useState("Category Deleted!");
    const [color, setColor] = useState("green");

    function handleSubmit(event) {
        event.preventDefault();
        // pass the states into db
    }
    
    return (
        <>
            <div class="admin-forms">
                <div class="form">
                    <h1 class="title">Delete Category</h1>
                    <h1 class="subtitle">** Note: All Products inside the category will be deleted **</h1>

                    <form action="?" method="post">
                        <div class="input-box">
                            <div class="input msg" id={color}>
                                {msg}
                            </div>
                        </div>

                        <div class="input-box">
                            <label
                                for="c_id">
                                Select Category to be deleted
                            </label>

                            <select
                                class="input"
                                name="c_id"
                                id="c_id"
                                value={formData.c_id}
                                onChange={handleChange}
                                required>
                                <option value="">-- None --</option>
                                <option value="cat-name">cat name</option>
                            </select>
                        </div>

                        <div class="input-box">
                            <button
                                class="form-btn"
                                type="submit"
                                onSubmit={handleSubmit}>
                                Delete Category
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
