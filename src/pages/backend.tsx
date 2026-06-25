import { Link } from "react-router"
import "./styles/backend.css"

export default function BackendPage () {
    return (
        <main className="backend-system">
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