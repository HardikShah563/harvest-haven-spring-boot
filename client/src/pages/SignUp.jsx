// importing from react
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// importing stylesheet
import "../style/form.css";

export default function SignUp() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        gender: "",
        passcode: "",
        cpasscode: "",
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
        const email = formData.email;
        const passcode = formData.pass;
        /*  
            perform custom checks like 
            incorrect email, incorrect password ... 
            and pass the data into database 
        */
    }
    
    return (
        <>
            <div class="home">
                <div class="form-page flex">
                    <div class="form-left flex">
                        <img
                            class="home-main"
                            src={
                                "/images/store-name.png"
                            }
                            alt="home main img"
                        />
                        <h1 class="title txt-ctr">Welcome to Harvest Haven!</h1>
                    </div>

                    <div class="form-right flex sign-in">
                        <div class="form">
                            <h1 class="title">Create New Account</h1>
                            <h1 class="subtitle">** Enter all details to create account **</h1>

                            <form action="{{ url_for('signup') }}" method="post">
                                <div class="input-box">
                                    <div class="input msg" id={color}>
                                        {msg}
                                    </div>
                                </div>

                                <div class="input-box">
                                    <label
                                        for="name">
                                        Full Name:
                                    </label>

                                    <input
                                        class="input"
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        autocomplete="off"
                                        required
                                    />
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
                                        placeholder="johndoe@gmail.com"
                                        autocomplete="off"
                                        required
                                    />
                                </div>

                                <div class="input-box">
                                    <label
                                        for="gender">
                                        Gender:
                                    </label>

                                    <select
                                        class="input"
                                        name="gender"
                                        id="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        required>
                                        <option value="">-- None --</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>

                                <div class="input-box">
                                    <label
                                        for="passcode">
                                        Password:
                                    </label>

                                    <input
                                        class="input"
                                        type="password"
                                        name="password"
                                        id="password"
                                        value={formData.passcode}
                                        onChange={handleChange}
                                        placeholder="Pass****"
                                        autocomplete="off"
                                        required
                                    />
                                </div>

                                <div class="input-box">
                                    <label
                                        for="c-passcode">
                                        Retype Password:
                                    </label>

                                    <input
                                        class="input"
                                        type="password"
                                        name="c-password"
                                        id="c-password"
                                        value={formData.cpasscode}
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
                                        Sign Up
                                    </button>
                                </div>
                            </form>

                            <div class="below-form flex">
                                <span class="flex gap-5">Already have an account? <div onClick={() => {navigate("/signin")}}>Sign In</div></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
