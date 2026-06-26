import { Link } from "react-router"
import Header from "../components/header"
import "./styles/solution.css"

export default function SolutionPage () {
    return (
        <main className="solution">
            <Header />

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
                    meet the City of Melvilles net zero goals.<br/>
                    <h2>Client Service</h2>
                    The client portal allows for the City of Melville to view emissions reports uploaded by suppliers<br/>
                    and collects cumulative data to present the total scope three emissions produced.<br/>
                    This data is displayed in the following way:<br/>
                    <ul>
                        <li>
                            Supplier List: Logging into the platform the City of Melville can view all of their<br/>
                            suppliers as a list including a description (business name, industry,<br/>
                            contact information, etc.) and a summary of their contribution to the city's emissions<br/>
                        </li>
                        <li>
                            Supplier Ranking: Because finding the cleanest supplier can be intensive especially<br/>
                            across hundreds of entries, The Palmtree Portal will feature a ranking system based on<br/>
                            the suppliers average emissions in kilograms of CO<sub>2</sub> per dollar spent on<br/>
                            their jobs (kg/$). The suppliers with the lowest score will be ranked highest and displayed<br/>
                            more favourably.
                        </li>
                        <li>
                            Client Summary: The core piece of the City of Melville's client portal is the summary<br/>
                            dashboard. This collates reported supplier data over a financial year. From here they<br/>
                            can view previous years, export emissions reports, and compare year on year performance.
                        </li>
                    </ul>
                    <br/>
                    <h2>Supplier Service</h2>
                    The supplier portal is the driver behind The Palmtree Portals data collection and processing<br/>
                    engine. This takes the administrative overhead of calculating emissions off of the supplier<br/>
                    and allows them to complete their reporting using information that they already have on hand.<br/>
                    The information is provided through:
                    <ul>
                        <li>
                            Onboarding: Suppliers follow an intuitive onboarding process where they can fill in<br/>
                            their standard business information, emission reduction techniques, and inventory.<br/>
                        </li>
                        <li>
                            Activity Logging: Suppliers log their activity on a job-by-job basis so that only<br/>
                            the data specific to the City of Melville is logged for their jobs. This occurs through<br/>
                            entering information such as transportation, equipment usage, waste generated, and <br/>
                            utility usage. 
                        </li>
                        <li>
                            Emissions Invoicing: Once emission producing activity is logged the supplier can produce<br/>
                            an emissions invoice which can be passed directly into technology one to streamline the<br/>
                            reporting process.
                        </li>
                        <li>
                            Inventory Management: Suppliers can see an overview of their machinery and equipment with<br/>
                            an emission breakdown of the item including the activity based emissions output, emission<br/>
                            reduction technology, and total emissions produced.
                        </li>
                    </ul>
                    <br/>
                    <h2>Data Privacy</h2>
                    Considering the Palmtree Portals functionality the question remains "What is stopping my clients<br/>
                    or suppliers from seeing my job postings or equipment"?<br/>
                    The answer is separation.<br/>
                    By separating the supplier database and the client databse none of either parties information is<br/>
                    accessible unless they choose for it to be.<br/>
                    The separation also allows for the emissions calculations to have an extra layer of integrity where<br/>
                    all calculations are done on the backend using emissions factor tables, this then only passes<br/>
                    numerical data back to the client and only the relevant work orders to the supplier.<br/>
                    <br/>
                    <h2>Local Procurement Law</h2>
                    This proposed local law outlines the criteria that suppliers to the City of Melville must adhere to<br/>
                    in order to do business with them. This proposal constitutes the two pronged approach to solving the<br/>
                    City of Melvilles climate action problem through:<br/>
                    <ul>
                        <li>
                            Enforcing the adoption of The Palmtree Portal for all suppliers
                        </li>
                        <li>
                            Mandating that reporting must be accurate and truthful
                        </li>
                        <li>
                            Stipulating that suppliers meet reporting deadlines
                        </li>
                    </ul>
                    The proposal also defines the tiered penalty system to be implemented incase a supplier breaches<br/>
                    the procurement law.<br/>
                    <ul>
                        <li>
                            Serving a notice of breach and allowing the supplier to remedy the cause
                        </li>
                        <li>
                            Contesting the breach or acceptance of breach
                        </li>
                        <li>
                            Application of infringements or fines if the breach is not remedied
                        </li>
                    </ul>
                    The proposed local law is intended to attach real concequences to suppliers not taking<br/>
                    their sustainability responsibility seriously.<br/>
                    <br/>
                </article>
            </section>
            <nav className="page-nav" aria-label="Page navigation">
                <Link to="/scope-three" className="page-nav-link page-nav-link-left">
                    Scope 3
                </Link>
                <Link to="/implementation" className="page-nav-link page-nav-link-right">
                    Implementation
                </Link>
            </nav>
        </main>
    );
}
