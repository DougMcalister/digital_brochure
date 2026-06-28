import { Link } from "react-router"
import Header from "../components/header"
import "./styles/homePage.css"

export default function HomePage () {
    return (
        <main className="home-page">
            <Header />

            <section className="content-grid">
                <article className="info-card">
                    <b>The Problem</b><br/>
                    After declaring a climate emergency in June 2021 the City of<br/>
                    Melville began working towards their climate initiative of net<br/>
                    zero for the organisation by 2030 and net zero across the city<br/>
                    and community by 2050.<br/>
                    
                </article>
            </section>

            <section className="home-frame" aria-label="Brochure pages">
                <Link to="/scope-three" className="brochure-card">
                    <div className="brochure-card-image">
                        {/* Picture area: add the Client Systems image here above the text. */}
                    </div>
                    <div className="brochure-card-content">
                        <h1>Scope 3 Emissions</h1>
                        <p>What exactly are scope 3 emissions and why are they so hard to track</p>
                    </div>
                </Link>

                <Link to="/solution" className="brochure-card">
                    <div className="brochure-card-image">
                        {/* Picture area: add the Supplier Systems image here above the text. */}
                    </div>
                    <div className="brochure-card-content">
                        <h1>Our Solution</h1>
                        <p>What is our solution and how does it help</p>
                    </div>
                </Link>

                <Link to="/implementation" className="brochure-card">
                    <div className="brochure-card-image">
                        {/* Picture area: add the Backend Logic image here above the text. */}
                    </div>
                    <div className="brochure-card-content">
                        <h1>Implementation</h1>
                        <p>How will we implement our solution</p>
                    </div>
                </Link>

                <Link to="/application" className="brochure-card">
                    <div className="brochure-card-image">
                        {/* Picture area: add the Backend Logic image here above the text. */}
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
