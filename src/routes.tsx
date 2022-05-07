import { RouteObject } from "react-router-dom";
import Contact from "./views/Contact";
import Fiction from "./views/Fiction";
import Home from "./views/Home";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/fiction",
        element: <Fiction />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
];
