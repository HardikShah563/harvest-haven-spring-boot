// importing from react
import { RouterProvider } from "react-router-dom";
// importing data
import router from "./config/router";
// importing stylesheet
import "./style/globals.css";

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
