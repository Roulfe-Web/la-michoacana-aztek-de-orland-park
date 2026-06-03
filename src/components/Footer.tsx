import { Link } from "react-router-dom";

function Footer() {

    return(
        <>
            <footer className="py-14 items-center justify-around text-center flex flex-col md:flex-row gap-14 bg-azul">
                    <div className="text-white">
                        <h2 className="text-6xl mb-6 font-semibold tracking-wider">
                            Visit Our Shop!
                        </h2>
                        <p className="text-2xl font-light cursor-pointer hover:underline hover:text-rosa transition duration-300">
                            9169 151st St, Orland Park, IL 60462
                        </p>
                        <p>
                            Phone: (708) 949-8955
                        </p>
                        <p className="text-xl">
                            Hours:
                        </p>
                        <p className="text-xl">
                            Mon-Sun: 8am - 10pm
                        </p>
                    </div>
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2982.864097490515!2d-87.84290779999999!3d41.6154504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e3fe741ddce5b%3A0x2c7eedae99f9eb78!2sLa%20Michoacana%20Aztek%20-%20Orland%20Park!5e0!3m2!1sen!2sus!4v1779348449129!5m2!1sen!2sus" 
                                width="600" 
                                height="300" 
                                className="border-0 rounded-2xl md:w-[600px] w-full" 
                                allowFullScreen 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    
            </footer>
            <div className="flex flex-col md:flex-row justify-center items-center gap-14 bg-azul text-gray-300 position-relative">
                 <p>Made by {" "}
                    <Link to="https://roulfe.com/" className="hover:text-rosa position-absolute" target="_blank" rel="noopener noreferrer">
                         Roulfe
                    </Link>
                </p>
            </div>
        </>
    );
}

export default Footer