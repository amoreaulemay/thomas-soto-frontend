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
                    <a
                        href="https://www.instagram.com/thomas.soto_/"
                        target="_blank"
                        className="Link--wrapper"
                    >
                        IG
                    </a>
                </section>
            </nav>
        </header>
    );
}
