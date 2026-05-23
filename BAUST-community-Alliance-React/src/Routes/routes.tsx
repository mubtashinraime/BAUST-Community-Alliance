import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout";
import AboutUs from "../Components/AboutUs";
import HomePage from "../Components/HomePage";
import BlogPage from "../Components/BlogPage";
import CreateContent from "../Components/CreateContent";

export default function routes() {
    const router = createBrowserRouter([
        {
            path: "/", element: <Layout />,
            children: [
                { path: "", element: <HomePage /> },
                { path: "admin/createContent", element: <CreateContent/>},
                { path: "about", element: <AboutUs /> },
                { path: "category/blog", element: <BlogPage />}
            ]
        }
    ]);
    return router;
}

