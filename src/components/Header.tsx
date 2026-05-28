import { Link } from "react-router-dom";
import OrderOnlineButton from "./forms/ui/OrderOnlineButton";
import TopBorder from "./forms/ui/TopBorder";

function Header() {

    return (
        <header>
            <TopBorder />
            <div className="flex flex-row items-center justify-between px-24 py-8 text-xl tracking-wider">
                <div className="flex flex-row items-center">
                    <Link to="/">
                        <img src="src\assets\logo.webp" alt="Logo" className="w-20 h-20 object-cover rounded-full" />
                    </Link>
                    <span className="ml-2 text-2xl">La Michoacana Aztek<br /> <span className="text-azul">de Orland Park</span></span>
                </div>
                <nav>
                    <ul className="flex flex-row gap-14">
                        <Link to="/"><li className="hover:hover-rosa">Home</li></Link>
                        <Link to="/menu"><li className="hover:hover-rosa">Menu</li></Link>
                        <Link to="/about"><li className="hover:hover-rosa">About</li></Link>
                        <Link to="/gallery"><li className="hover:hover-rosa">Gallery</li></Link>
                        <Link to="/contact"><li className="hover:hover-rosa">Contact</li></Link>
                    </ul>
                </nav>
                <Link to="https://www.doordash.com/store/la-michoacana-azteca-orland-park-1431425/31846562/?srsltid=AfmBOorn-dw4u6kJBkn1Ei9SgLEFQFVJxdK__0syucelxuyAhxPHwPiU" target="_blank" rel="noopener noreferrer">
                    <OrderOnlineButton text="Order Online" color="azul" size="lg"/>
                </Link>
            </div>
        </header>
    );
}

export default Header;