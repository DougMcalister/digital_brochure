import { Link } from "react-router"
import Header from "../components/header"
import "./styles/homePage.css"
import ScopeThreePNG from "../assets/icons/scope-three-card.png"
import SolutionPNG from "../assets/icons/solution-card.png"
import ImplementationPNG from "../assets/icons/implementation-card.png"
import ApplicationPNG from "../assets/icons/applications-card.png"

export default function HomePage () {
    return (
        <main className="home-page">
            <Header />

            <section className="content-grid">
                <article className="info-card">
                    <b>The Problem</b><br/>
                    After declaring a climate emergency in June 2021 the City of< br/>
                    Melville began working towards their climate initiative of net <br/>
                    zero for the organisation by 2030 and net zero across the city <br/>
                    and community by 2050.<br/>
                    Our solution the <b>Palmtree Portal</b> will ensure accuracy and <br/>
                    integrity for scope three emissions reporting by logging activity <br/>
                    data directly from suppliers, while also removing the burden of <br/>
                    administrative overhead through our privelaged calculation model.<br/><br/>

                </article>
            </section>

            <section className="home-frame" aria-label="Brochure pages">
                <Link to="/scope-three" className="brochure-card">
                    <div className="brochure-card-image">
                        <img src={ScopeThreePNG} alt="Scope Three Emissions"/>
                    </div>
                    <div className="brochure-card-content">
                        <h1>Scope 3 Emissions</h1>
                        <p>What exactly are scope 3 emissions and why are they so hard to track?</p>
                    </div>
                </Link>

                <Link to="/solution" className="brochure-card">
                    <div className="brochure-card-image">
                        <img src={SolutionPNG} alt="Solution"/>
                    </div>
                    <div className="brochure-card-content">
                        <h1>Our Solution</h1>
                        <p>What is our solution and how does it help</p>
                    </div>
                </Link>

                <Link to="/implementation" className="brochure-card">
                    <div className="brochure-card-image">
                        <img src={ImplementationPNG} alt="Solution Implementation"/>
                    </div>
                    <div className="brochure-card-content">
                        <h1>Implementation</h1>
                        <p>How will we implement our solution</p>
                    </div>
                </Link>

                <Link to="/application" className="brochure-card">
                    <div className="brochure-card-image">
                        <img src={ApplicationPNG} alt="Further Applications"/>
                    </div>
                    <div className="brochure-card-content">
                        <h1>Application</h1>
                        <p>What future applications are possible</p>
                    </div>
                </Link>
            </section>
        </main>
    );
}
