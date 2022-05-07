import { Link } from "react-router-dom";
import "./Link.css";

export default function NavLink(props: {
    children: string;
    to: string;
}): JSX.Element {
    return (
        <Link to={props.to} className="Link--wrapper" role="link">
            {props.children}
        </Link>
    );
}
