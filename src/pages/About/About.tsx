
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
            <div className="felx">
                <img src="src\assets\istockphoto-1147544807-612x612.jpg" alt="Storefront" className="object-contain" />
            </div>
        </section>
    );
}

export default About;