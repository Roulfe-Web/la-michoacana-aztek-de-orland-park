import OrderOnlineButton from "../../components/forms/ui/OrderOnlineButton";
import ItemCard from "../../components/ItemCard";

function Home() {
    return (
        <div>
            <div className="flex flex-col md:flex-row h-full justify-around">
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
                    <OrderOnlineButton text="View Our Menu" color="amarillo" size="2xl"/>
                </div>
                <div className="w-full md:w-1/2 h-full">
                    <img src="src\assets\istockphoto-1147544807-612x612.jpg" alt="Mexican Treats" className="w-full h-full object-cover" />
                </div>
            </div>
            <div className="flex flex-col md:flex-row h-full gap-1">
                <ItemCard color="azul" text="Ice Cream" description="Delicious ice cream made with natural ingredients." />
                <ItemCard color="rosa" text="Paletas" description="Colorful popsicles perfect for a hot day." />
                <ItemCard color="amarillo" text="Mangonadas" description="Refreshing mango smoothie blend." />
                <ItemCard color="verde" text="Elote" description="Grilled corn with a kick of flavor." />
                <ItemCard color="rosa" text="Bebidas" description="A variety of refreshing drinks to quench your thirst." />
                <ItemCard color="aranjado" text="Snacks" description="Delicious snacks to satisfy your cravings." />
            </div>
            <div className="py-14 justify-center items-start flex flex-col md:flex-row gap-14">
                <div>
                    <h2 className="text-6xl mb-6 font-semibold tracking-wider">
                        A Taste of 
                        <br />
                        Mexico In Every Bite!
                    </h2>
                    <p className="text-2xl font-light">
                        We bring the bold flavors, colors, and traditions of Mexico to our community. 
                        From our vibrant paletas to our refreshing mangonadas, every item is crafted with care and passion.
                    </p>
                    <OrderOnlineButton text="Our Story" color="rosa" size="2xl"/>
                </div>
                <div>
                    <img src="src\assets\istockphoto-1147544807-612x612.jpg" alt="Our Story" className="w-full h-full object-cover" />
                </div>
            </div>
            <div className="py-14 items-center justify-around text-center flex flex-col md:flex-row gap-14 bg-azul">
                <div className="text-white">
                    <h2 className="text-6xl mb-6 font-semibold tracking-wider">
                        Visit Our Shop!
                    </h2>
                    <p className="text-2xl font-light cursor-pointer hover:underline hover:text-rosa transition duration-300">
                        9169 151st St, Orland Park, IL 60462
                    </p>
                </div>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2982.864097490515!2d-87.84290779999999!3d41.6154504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e3fe741ddce5b%3A0x2c7eedae99f9eb78!2sLa%20Michoacana%20Aztek%20-%20Orland%20Park!5e0!3m2!1sen!2sus!4v1779348449129!5m2!1sen!2sus" 
                            width="600" 
                            height="300" 
                            className="border-0 rounded-2xl" 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">

                    </iframe>
                </div>
            </div>
        </div>
    );
}

export default Home;