import { Link } from "react-router"
import Header from "../components/header"
import "./styles/implementation.css"

export default function ImplementationPage () {
    return (
        <main className="implementation">
            <Header />

            <Link to="/" className="back-link">
                Back
            </Link>

            <section className="hero">
                <h1>Solution Implementation</h1>
            </section>

            <section className="content-grid">
                <article className="info-card">

                </article>
            </section>
            <nav className="page-nav" aria-label="Page navigation">
                <Link to="/solution" className="page-nav-link page-nav-link-left">
                    Solution
                </Link>
                <Link to="/application" className="page-nav-link page-nav-link-right">
                    Applications
                </Link>
            </nav>
        </main>
    );
}
