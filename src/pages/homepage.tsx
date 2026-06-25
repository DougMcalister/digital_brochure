import { Link } from "react-router"
import "./styles/homePage.css"

export default function HomePage () {
    return (
        <main className="home-page">
            <Link to="/client-system" className="brochure-card">
                <div className="brochure-card-image">
                    {/* Picture area: add the Client Systems image here above the text. */}
                </div>
                <div className="brochure-card-content">
                    <h1>Scope 3 Emissions</h1>
                    <p>What exactly are scope 3 emissions and why are they so hard to track</p>
                </div>
            </Link>

            <Link to="/supplier-system" className="brochure-card">
                <div className="brochure-card-image">
                    {/* Picture area: add the Supplier Systems image here above the text. */}
                </div>
                <div className="brochure-card-content">
                    <h1>Supplier Systems</h1>
                    <p>Walk through how the Palm tree project allows suppliers and contractors to report their emission production directly to clients.</p>
                </div>
            </Link>

            <Link to="/backend" className="brochure-card">
                <div className="brochure-card-image">
                    {/* Picture area: add the Backend Logic image here above the text. */}
                </div>
                <div className="brochure-card-content">
                    <h1>Backend Logic</h1>
                    <p>Look under the hood at how the Palm tree project calculates emissions accurately.</p>
                </div>
            </Link>
        </main>
    );
}
