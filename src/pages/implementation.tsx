import { Link } from "react-router"
import "./styles/implementation.css"

export default function ImplementationPage () {
    return (
        <main className="implementation">
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
        </main>
    );
}