import papel_picado_top_border from "../assets/papel_picado_top_border.webp";
import OrderOnlineButton from "./forms/ui/OrderOnlineButton";

function Header() {

    return (
        <header className="border-b-red-100 border-b-2">
            <div className="flex flex-row items-center overflow-hidden">
                <img src={papel_picado_top_border} alt="border" className="w-lg" />
                <img src={papel_picado_top_border} alt="border" className="w-lg" />
                <img src={papel_picado_top_border} alt="border" className="w-lg" />
                <img src={papel_picado_top_border} alt="border" className="w-lg" />
            </div>
            <div className="flex flex-row items-center justify-around px-4 py-8 text-xl tracking-wider">
                <div>
                    Logo
                </div>
                <nav>
                    <ul className="flex flex-row gap-14">
                        <li>Home</li>
                        <li>Menu</li>
                        <li>About</li>
                        <li>Gallery</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <OrderOnlineButton text="Order Online" color="azul" size="lg"/>
            </div>
        </header>
    );
}

export default Header;