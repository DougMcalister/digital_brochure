import logo from "../assets/icons/Logo.png";

export default function Header() {
    return (
        <header className="site-header">
            <div className="site-header-brand">
                <img src={logo} alt="" className="site-header-logo" />
                <h1>The Palmtree Portal</h1>
            </div>
        </header>
    );
}
