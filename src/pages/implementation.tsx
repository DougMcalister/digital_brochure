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
                    The solution implementation follows from the challenges main goal,<br/>
                    to accurately calculate scope three emissions without creating more<br/>
                    administrative overhead.<br/>
                    <b>Supplier implementation</b><br/>
                    From when suppliers first onboard to the app they will be providing<br/>
                    information for the emissions calculation model. Through uploading their<br/>
                    equipment and materials list they will build their own inventory data<br/>
                    base which can be used to calculate the emissions generated. The emission<br/>
                    data is pulled from a centralised standards table that cannot be overwritten<br/>
                    unless the supplier provides an authorised emissions report.<br/><br/>
                    <pre>
                        <code>
                            def calculate_transport_emissions(id: str, dest: int, state: str):
                                connector = DBConnect()
                                ef = connector.get("emission_factor", inventory, id)
                                
                        </code>
                    </pre>
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
