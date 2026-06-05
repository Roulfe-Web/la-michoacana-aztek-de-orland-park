import storefront from "/src/assets/storefront.webp";

function About() {

    return (
        <section className="py-14 px-16 justify-between items-center flex flex-col md:flex-row gap-14">
            <div className="flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
                <h2 className="text-6xl mb-6 font-semibold tracking-wider">
                    Our Story
                </h2>
                <p className="text-2xl text-normal">
                     At La Michoacana Aztek, we’re proud to bring the colors, flavors, and traditions of Mexico to the Orland Park community. From creamy ice cream and handmade-style paletas to refreshing mangonadas, elotes, aguas frescas, and snacks, every treat is made to be enjoyed with family and friends.
                </p>
            </div>
            <div className="flex">
                <img src={storefront} alt="Storefront" className="object-contain rounded-2xl" />
            </div>
        </section>
    );
}

export default About;