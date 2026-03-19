import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout";
import AboutUs from "../Components/AboutUs";
import HomePage from "../Components/HomePage";

export default function routes() {
    const router = createBrowserRouter([
        {
            path: "/", element: <Layout />,
            children: [
                { path: "", element: <HomePage /> },
                { path: "about", element: <AboutUs /> },
            ]
        }
    ]);
    return router;
}

