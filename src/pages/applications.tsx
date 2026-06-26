import { Link } from "react-router"
import Header from "../components/header"
import "./styles/applications.css"

export default function ApplicationsPage () {
    return (
        <main className="application">
            <Header />

            <Link to="/" className="back-link">
                Back
            </Link>

            <section className="hero">
                <h1>Future Applications</h1>
            </section>

            <section className="content-grid">
                <article className="info-card">

                </article>
            </section>
            <nav className="page-nav" aria-label="Page navigation">
                <Link to="/implementation" className="page-nav-link page-nav-link-left">
                    Implementation
                </Link>
                <Link to="/" className="page-nav-link page-nav-link-right">
                    Home
                </Link>
            </nav>
        </main>
    );
}
