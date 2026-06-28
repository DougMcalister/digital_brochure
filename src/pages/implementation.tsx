import { Link } from "react-router"
import Header from "../components/header"
import "./styles/implementation.css"
import SupplierImplementation from "../assets/diagrams/Supplier_implementation.png"

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
                    <h2>Supplier implementation</h2><br/>
                    <figure className="supplier-implementation">
                        <img 
                            src={SupplierImplementation} 
                            alt="Supplier data flow diagram" 
                        />
                    </figure>
                    From when suppliers first onboard to the app they will be providing <br/> 
                    information for the emissions calculation model. Through uploading their <br/> 
                    equipment and materials list they will build their own inventory data <br/> 
                    base which can be used to calculate the emissions generated. The emission <br/> 
                    data is pulled from a centralised standards table that cannot be overwritten <br/> 
                    unless the supplier provides an authorised emissions report to ensure accuracy.<br/><br/>
                    Suppliers are responsible for uploading and maintaining their own inventory <br/> 
                    lists, but once they have their inventory, materials, and goods entered <br/> 
                    the invoicing and reporting process is streamlined allowing suppliers to select <br/> 
                    and auto fill data when generating invoices.<br/> 
                    <b>Supplier Analytics</b>
                    Suppliers have access to a reporting dashboard where all of their logged <br/> 
                    emissions data over the financial year is diaplayed.<br/> 
                    This allows them to view specific performance metrics and gauge how well <br/> 
                    they are contributing to the cities net zero goal. This also functions as <br/> 
                    a useful tool for the supplier who will need to track similar metrics in <br/> 
                    the future.<br/><br/>
                    <h2>Client Implementation</h2>
                    The client side portal interfaces with Technology1 as a reporting and data <br/> 
                    processing application. The City of Melville can transition from an overall <br/> 
                    view of their suppliers into a dashboard showing scope three emissions and <br/> 
                    the break down of what are the biggest contributors to emission output.<br/> 
                    The integration with Technology1 means that while the cliet-supplier data is <br/> 
                    stored within the Palmtree Portal with its own analytics tools, the same data <br/> 
                    is also extracted from invoices for use with any existing Technology1 automations.<br/> 
                    <b>Data Driven</b>
                    The City of Melville can be reassured that the data they are rceeiving is <br/> 
                    accurate thanks to the standardised emissions factors database and table used <br/> 
                    in conjunction with LCA tooling.<br/> 
                    When goods or services are logged, dependant on the type, they are looked up <br/> 
                    against the tables and using emission conversion functions for vehicles and <br/> 
                    machinery or against LCA data and converted using calculation tooling.<br/> 
                    Possible LCA integrations include PlanetPrice, OpenCLA, and integrations <br/> 
                    with government or UN databases such as the Australian Governments Green <br/> 
                    Vehicle Guide<br/>
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
