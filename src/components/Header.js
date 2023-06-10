import reactLogo from "../images/logo.svg"

function Header(){
    return(
        <header>
            <nav className="nav">
                <img src={reactLogo} width="100px"/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
export default Header