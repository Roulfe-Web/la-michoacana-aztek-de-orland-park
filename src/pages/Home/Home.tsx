import OrderOnlineButton from "../../components/forms/ui/OrderOnlineButton";
import ItemCard from "../../components/ItemCard";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <section className="flex h-[850px] flex-col justify-between overflow-hidden bg-bg px-6 md:flex-row md:px-24">
                <div className="flex flex-col items-start justify-center h-full pt-14 bg-bg">
                    <h1 className="hero-title text-9xl">
                        <span className="rosa">Sweet.</span>{" "}
                        <span className="aranjado">Spicy.</span>
                        <br />
                        <span className="azul">Fresh.</span>
                    </h1>
                    <p className="text-7xl mb-6">
                        Mexican Treats
                        <br />
                        Made Daily
                    </p>
                    <Link to="/menu">
                        <OrderOnlineButton text="View Our Menu" color="amarillo" size="2xl" />
                    </Link>
                </div>
                <div className="relative h-full w-full overflow-hidden md:w-1/2">
                    {/* <img src="src\assets\istockphoto-1147544807-612x612.jpg" alt="Mexican Treats" className="w-full h-full object-cover" /> */}
                    <img src="src\assets\mangonada_transparent.webp" alt="Mexican Treats" className="absolute left-1/2 top-10 w-155 max-w-none -translate-x-1/2 -translate-y-1/16" />
                </div>
            </section>
            <div className="flex flex-col items-center md:flex-row h-full gap-1 overflow-x-auto scrollbar-none">
                <div className="flex flex-col md:flex-row h-full gap-1 animate-[carrousel_20s_linear_infinite] pr-1">
                    <ItemCard color="azul" text="Ice Cream" description="Delicious ice cream made with natural ingredients." />
                    <ItemCard color="rosa" text="Paletas" description="Colorful popsicles perfect for a hot day." />
                    <ItemCard color="amarillo" text="Mangonadas" description="Refreshing mango smoothie blend." />
                    <ItemCard color="azul" text="Elote" description="Corn with a kick of flavor." />
                    <ItemCard color="rosa" text="Bebidas" description="A variety of refreshing drinks to quench your thirst." />
                    <ItemCard color="aranjado" text="Snacks" description="Delicious snacks to satisfy your cravings." />
                </div>
                <div className="flex flex-col md:flex-row h-full gap-1 animate-[carrousel_20s_linear_infinite] pr-1" aria-hidden="true">
                    <ItemCard color="azul" text="Ice Cream" description="Delicious ice cream made with natural ingredients." />
                    <ItemCard color="rosa" text="Paletas" description="Colorful popsicles perfect for a hot day." />
                    <ItemCard color="amarillo" text="Mangonadas" description="Refreshing mango smoothie blend." />
                    <ItemCard color="azul" text="Elote" description="Corn with a kick of flavor." />
                    <ItemCard color="rosa" text="Bebidas" description="A variety of refreshing drinks to quench your thirst." />
                    <ItemCard color="aranjado" text="Snacks" description="Delicious snacks to satisfy your cravings." />
                </div>
            </div>
            <section className="py-14 px-24 justify-between items-center flex flex-col md:flex-row gap-14">
                <div>
                    <h2 className="text-6xl mb-6 font-semibold tracking-wider">
                        A Taste of 
                        <br />
                        Mexico In Every Bite!
                    </h2>
                    <p className="text-2xl font-light text-balance mb-6">
                        We bring the bold flavors, colors, and traditions of Mexico to our community. 
                        From our vibrant paletas to our refreshing mangonadas, every item is crafted with care and passion.
                    </p>
                    <Link to="/about">
                        <OrderOnlineButton text="Our Story" color="rosa" size="2xl"/>
                    </Link>
                </div>
                <div>
                    <img src="src\assets\istockphoto-1147544807-612x612.jpg" alt="Our Story" className="w-full h-full object-cover" />
                </div>
            </section>
        </>
    );
}

export default Home;