import "./NavBar.css";

import Link from "../Link/Link";

export default function NavBar(): JSX.Element {
    return (
        <header className="NavBar--wrapper">
            <nav>
                <section className="NavBar--left"></section>
                <section className="NavBar--center">
                    <Link to="/">Work</Link>
                    <Link to="/fiction">Fiction</Link>
                    <Link to="/contact">Contact</Link>
                </section>
                <section className="NavBar--right">
                    <Link to="/">IG</Link>
                </section>
            </nav>
        </header>
    );
}
