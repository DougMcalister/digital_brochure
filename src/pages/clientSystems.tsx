import { Link } from "react-router"
import "./styles/clientSystems.css"

export default function ClientSystemPage () {
    return (
        <main className="client-system">
            <Link to="/" className="back-link">
                Back
            </Link>

            <section className="hero">

            </section>

            <section className="content-grid">
                <article className="info-card">

                </article>
            </section>
        </main>
    );
}