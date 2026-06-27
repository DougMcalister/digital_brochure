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
                    Since the Palmtree Portal isn't supplier specific it has<br/>
                    many applications outside of tracking scope three emissions<br/>
                    for the City of Melville. Possible routes are:<br/>
                    <b>Wider Government Inclusion</b><br/>
                    <ul>
                        <li>
                            Bring on more local governments facing the same issue<br/>
                            that wish to move closer to their net zero goals.
                        </li>
                        <li>
                            Scale the platform for use by larger organisations<br/>
                            from companies and businesses to larger government<br/>
                            branches<br/>
                        </li>
                        <li>
                            Implement more rigorously validated and standardised<br/>
                            LCA and activity based emissions calculations.<br/>
                        </li>
                        <li>
                            Implement integrations with Technology1 API to streamline <br/>
                            reporting process.<br/>
                        </li>
                        <li>
                            Create a dedicated and specialised reporting platform<br/>
                            for emissions data.<br/>
                        </li>
                        <li>
                            Extend the platform to capture data for upcoming compliance<br/>
                            reporting like modern slavery.<br/>
                        </li>
                    </ul>
                    The platform has the possibility for great expansion and wide reaching<br/>
                    effect both within and exterior to the realm of sustainability.<br/>
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
