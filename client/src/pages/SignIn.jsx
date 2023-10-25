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

    async function handleSubmit(event) {
        event.preventDefault();
        // if (formData.email.length < 5 || formData.passcode == "") {
        //     setMsg("Enter proper credentials");
        //     setColor("red");
        // }
        // let response = await fetch('http://localhost:8080/users/signin');
        try {
            let response = await fetch('http://localhost:8080/users/signin', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    passcode: formData.passcode
                })
            })
            console.log(response);
        }
        catch(err) {
            console.log(err);
        }
        // console.log(response);
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

                            <form onSubmit={handleSubmit}>
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
                                        class="form-btn">
                                        Sign In
                                    </button>
                                </div>
                            </form>

                            <div class="below-form flex">
                                <span class="flex gap-5">Don't have an account? <div onClick={() => { navigate("/signup") }}>Sign Up</div></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
