// importing from react
import { useState } from "react";
// importing stylesheets
import "../style/form.css";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        typeOfMsg: "",
        msg: "",
    });

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    function handleSubmit(event) {
        console.log("Form submit ho raha hai!");
        console.log(formData);
    }

    return (
        <>
            
            <div class="contact-us">
                <h1 class="title txt-ctr">Contact Us</h1>
                <h1 class="subtitle txt-ctr">Have a suggestion. Leave a message for us</h1>

                <div class="form">
                    <form method="post">
                        <div class="input-box">
                            <div class="input msg" id="green">
                                Message sent!
                            </div>
                        </div>

                        <div class="input-box">
                            <label
                                for="title">
                                Your Name:
                            </label>

                            <input
                                class="input"
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                autoComplete="off"
                                placeholder="Full Name"
                                required
                            />
                        </div>

                        <div class="input-box">
                            <label
                                for="email">
                                Your Email Address:
                            </label>

                            <input
                                class="input"
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                autoComplete="off"
                                placeholder="Email Address"
                                required
                            />
                        </div>

                        <div class="input-box">
                            <label
                                for="message">
                                Your Message:
                            </label>

                            <textarea
                                class="input textarea"
                                name="msg"
                                id="msg"
                                value={formData.msg}
                                onChange={handleChange}
                                autoComplete="off"
                                placeholder="Leave a message"
                            ></textarea>
                        </div>


                        <div class="input-box">
                            <button
                                class="form-btn"
                                type="submit"
                                onClick={handleSubmit}
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
