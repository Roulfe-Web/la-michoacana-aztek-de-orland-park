import storefront from "/src/assets/storefront.webp";

function About() {

    return (
        <section className="py-14 px-24 justify-between items-center flex flex-col md:flex-row gap-14">
            <div>
                <h2 className="text-6xl mb-6 font-semibold tracking-wider">
                    Our Story
                </h2>
                <p className="text-2xl text-normal">
                    Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum
                </p>
            </div>
            <div className="flex">
                <img src={storefront} alt="Storefront" className="object-contain rounded-2xl" />
            </div>
        </section>
    );
}

export default About;