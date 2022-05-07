import React from "react";
import { useRoutes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { routes } from "./routes";

export default function Index(): JSX.Element {
    let page = useRoutes(routes);

    return (
        <React.Fragment>
            <NavBar />
            {page}
        </React.Fragment>
    );
}
