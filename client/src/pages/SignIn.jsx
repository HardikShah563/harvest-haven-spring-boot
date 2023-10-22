// importing from react
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// importing stylesheet
import "../style/form.css";

export default function SignIn() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        passcode: ""
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
        event.preventDefault();
        if (formData.email === "" || formData.passcode === "") {
            setMsg("Fill the required details");
            setColor("red");
        }
        // inside else if, check custom email validations
        else {
            setMsg("Sign In successful");
            setColor("green");

        }
        // pass the states into db
    }

    return (
        <>
            <div class="home">
                <div class="form-page flex">
                    <div class="form-left flex">
                        <img
                            class="home-main"
                            src={
                                process.env.PUBLIC_URL +
                                "/images/store-banner.png"
                            }
                            alt="home main img"
                        />
                        <h1 class="title txt-ctr">We are glad to have you back!</h1>
                    </div>

                    <div class="form-right flex">
                        <div class="form">
                            <h1 class="title">Welcome Back</h1>
                            <h1 class="subtitle">** Enter your details to purchase delicious goods **</h1>

                            <form action="{{ url_for('signin') }}" method="post">
                                <div class="input-box">
                                    <div class="input msg" id={color}>
                                        {msg}
                                    </div>
                                </div>

                                <div class="input-box">
                                    <label
                                        for="email">
                                        Email Address:
                                    </label>

                                    <input
                                        class="input"
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="abc@gmail.com"
                                        autocomplete="off"
                                        required
                                    />
                                </div>

                                <div class="input-box">
                                    <label
                                        for="passcode">
                                        Password:
                                    </label>

                                    <input
                                        class="input"
                                        type="password"
                                        name="passcode"
                                        id="passcode"
                                        value={formData.passcode}
                                        onChange={handleChange}
                                        placeholder="Pass****"
                                        autocomplete="off"
                                        required
                                    />
                                </div>

                                <div class="input-box">
                                    <button
                                        class="form-btn"
                                        type="submit">
                                        Sign In
                                    </button>
                                </div>
                            </form>

                            <div class="below-form flex">
                                <span class="flex gap-5">Don't have an account? <div onClick={() => {navigate("/signup")}}>Sign Up</div></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
