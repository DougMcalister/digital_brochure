import { Link } from "react-router"
import "./styles/solution.css"

export default function SolutionPage () {
    return (
        <main className="solution">
            <Link to="/" className="back-link">
                Back
            </Link>

            <section className="hero">
                <h1>The Solution: The Palmtree Project</h1>
            </section>

            <section className="content-grid">
                <article className="info-card">
                    Our proposed solution is an application that, at it's core, functions as an environmental<br/>
                    reporting software. This is paired with a procurement focused local law that enforces suppliers<br/>
                    meet the City of Melvilles net zero goals.
                    <br/>
                    <h2>Client Service</h2>

                    <br/>
                    <h2>Supplier Service</h2>

                    <br/>
                    <h2>Local Procurement Law</h2>

                    <br/>
                </article>
            </section>
        </main>
    );
}