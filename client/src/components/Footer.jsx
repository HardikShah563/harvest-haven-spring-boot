// importing stylesheet
import "../style/footer.css";

export default function Footer() {
    return (
        <>
            <footer className="footer" id="footer">
                <div className="footer-sections">
                    <div className="foot-section">
                        <img
                            className="footer-logo"
                            src={
                                process.env.PUBLIC_URL +
                                "/images/store-name.png"
                            }
                            alt="footer-logo"
                        />
                        <h1 className="txt-ctr">MERCH <br /> STORE</h1>
                    </div>

                    <div
                        className="foot-section">
                        <li className="heading">
                            Blogs
                        </li>

                        <a href="#">Choosing Right</a>
                        <a href="#">Quality Matters</a>
                    </div>

                    <div className="foot-section">
                        <li className="heading">
                            Store
                        </li>

                        <a href="/">View Shop</a>
                    </div>

                    <div className="foot-section">
                        <li className="heading">
                            Social
                        </li>

                        <a href="/">Instagram</a>
                        <a href="/">Youtube</a>
                        <a href="/">Facebook</a>
                        <a href="/">Twitter</a>
                    </div>
                </div>
                <hr />
                <div className="below-footer-as">
                    <div className="txt-ctr">
                        @{new Date().getFullYear()}&nbsp;Merch Store | All Rights Reserved
                    </div>
                </div>
            </footer>
        </>
    );
};
