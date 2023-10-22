// importing react
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// importing stylesheet
import "../style/navbar.css";
// importing icons
import { BiWrench, BiStore } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbLogin2 ,TbLogout } from "react-icons/tb";

export default function Navbar(props) {
    // creating variable responsible for web navigation
    const navigate = useNavigate();
    // creating useStates for managing session
    const [admin, setAdmin] = React.useState(true);
    const [login, setLogin] = useState(false);
    const [loginInfo, setLoginInfo] = useState({
        username: "username",
        userLogo: "userLoogo",
    });

    function signOut() {
        // call to signout function
    }

    return (
        <>
            <nav>
                <div className="logo">
                    <label><div href="./index.html">Merch Store</div></label>
                </div>
                <div className="nav-actions">
                    {admin && (
                        <button className="nav-btn" onClick={() => { navigate("/admin-dashboard") }}>
                            <div>
                                <BiWrench size={25} />
                                <p className="nav-action-label">Admin</p>
                            </div>
                        </button>
                    )}

                    <button className="nav-btn" onClick={() => { navigate("/shop") }}>
                        <div>
                            <BiStore size={25} />
                            <p className="nav-action-label">Shop</p>
                        </div>
                    </button>

                    <button className="nav-btn" onClick={() => { navigate("/cart") }}>
                        <div>
                            <AiOutlineShoppingCart size={25} />
                            <p className="nav-action-label">Cart</p>
                        </div>
                    </button>

                    <button className="nav-btn" onClick={() => { navigate("/signin") }}>
                        <div>
                            <TbLogin2 size={25} />
                            <p className="nav-action-label">Sign In</p>
                        </div>
                    </button>

                    <button className="nav-btn" onClick={signOut}>
                        <div>
                            <TbLogout size={25} />
                            <p className="nav-action-label">Sign Out</p>
                        </div>
                    </button>
                </div>
            </nav>
        </>
    );
};
