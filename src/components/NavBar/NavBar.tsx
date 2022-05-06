import "./NavBar.css";

import Link from "../Link/Link";

export default function NavBar(): JSX.Element {
    return (
        <header className="NavBar--wrapper">
            <nav>
                <section className="NavBar--left"></section>
                <section className="NavBar--center">
                    <Link>Work</Link>
                    <Link>Fiction</Link>
                    <Link>Contact</Link>
                </section>
                <section className="NavBar--right">
                    <Link>IG</Link>
                </section>
            </nav>
        </header>
    );
}
