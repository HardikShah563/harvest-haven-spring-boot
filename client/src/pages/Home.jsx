// importing stylesheet
import "../style/home.css";
// importing components
import ContactUs from "../components/ContactUs";

export default function Home() {
    return (
        <>
            <h1 class="title txt-ctr">Welcome to Merch Store</h1>
            <img
                class="home-main"
                src={
                    process.env.PUBLIC_URL +
                    "/images/home-main.png"
                }
                alt="shop logo"
            ></img>
            
            <ContactUs />
        </>
    );
};
