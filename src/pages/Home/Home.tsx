import OrderOnlineButton from "../../components/forms/ui/OrderOnlineButton";
import ItemCard from "../../components/ItemCard";
import { Link } from "react-router-dom";

import mangonada from "../../assets/mangonada_transparent.webp";
import storyImage from "../../assets/istockphoto-1147544807-612x612.jpg";
import iceCream from "../../assets/menu/ice-cream.avif";
import paletas from "../../assets/menu/paletas.avif";
import elote from "../../assets/menu/elote.avif";
import aguaFresca from "../../assets/menu/agua-fresca.avif";
import chicharronPreparado from "../../assets/menu/chicharron-preparado.avif";
import mangonada2 from "../../assets/menu/mangonada.avif";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="overflow-hidden bg-bg px-6 py-12 md:flex md:min-h-[760px] md:px-24 md:py-0 lg:min-h-[850px]">
        <div className="z-10 flex flex-col items-start justify-center md:w-1/2">
          <h1 className="hero-title text-7xl leading-none sm:text-8xl md:text-9xl lg:text-[10rem]">
            <span className="rosa">Sweet.</span>{" "}
            <span className="aranjado">Spicy.</span>
            <br />
            <span className="azul">Fresh.</span>
          </h1>

          <p className="mb-6 text-4xl leading-none sm:text-5xl md:text-6xl lg:text-7xl">
            Mexican Treats
            <br />
            Made Daily
          </p>

          <Link to="/menu">
            <OrderOnlineButton
              text="View Our Menu"
              color="amarillo"
              size="2xl"
            />
          </Link>
        </div>

        <div className="relative mt-10 h-[430px] w-full overflow-visible md:mt-0 md:h-auto md:w-1/2">
          <img
            src={mangonada}
            alt="Mangonada"
            className="
              absolute left-1/2 top-0
              w-[420px] max-w-none -translate-x-1/2
              sm:w-[500px]
              md:top-16 md:w-[620px]
              lg:w-[700px]
            "
          />
        </div>
      </section>

      {/* Category Carousel */}
      <section className="w-full overflow-hidden">
        <div className="flex w-max animate-[carrousel_20s_linear_infinite]">
          <div className="flex shrink-0 gap-1 pr-1">
            <ItemCard
              color="azul"
              text="Ice Cream"
              description="Delicious ice cream made with natural ingredients."
              image={iceCream}
            />
            <ItemCard
              color="rosa"
              text="Paletas"
              description="Colorful popsicles perfect for a hot day."
              image={paletas}
            />
            <ItemCard
              color="amarillo"
              text="Mangonadas"
              description="Refreshing mango smoothie blend."
              image={mangonada2}
            />
            <ItemCard
              color="azul"
              text="Elote"
              description="Corn with a kick of flavor."
              image={elote}
            />
            <ItemCard
              color="rosa"
              text="Bebidas"
              description="A variety of refreshing drinks to quench your thirst."
              image={aguaFresca}
            />
            <ItemCard
              color="aranjado"
              text="Snacks"
              description="Delicious snacks to satisfy your cravings."
              image={chicharronPreparado}
            />
          </div>

          <div className="flex shrink-0 gap-1 pr-1" aria-hidden="true">
            <ItemCard
              color="azul"
              text="Ice Cream"
              description="Delicious ice cream made with natural ingredients."
              image={iceCream}
            />
            <ItemCard
              color="rosa"
              text="Paletas"
              description="Colorful popsicles perfect for a hot day."
              image={paletas}
            />
            <ItemCard
              color="amarillo"
              text="Mangonadas"
              description="Refreshing mango smoothie blend."
              image={mangonada2}
            />
            <ItemCard
              color="azul"
              text="Elote"
              description="Corn with a kick of flavor."
              image={elote}
            />
            <ItemCard
              color="rosa"
              text="Bebidas"
              description="A variety of refreshing drinks to quench your thirst."
              image={aguaFresca}
            />
            <ItemCard
              color="aranjado"
              text="Snacks"
              description="Delicious snacks to satisfy your cravings."
              image={chicharronPreparado}
            />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="flex flex-col items-center justify-between gap-10 bg-bg px-6 py-16 md:flex-row md:px-24 md:py-20 lg:gap-14">
        <div className="max-w-2xl">
          <h2 className="mb-6 text-4xl font-semibold leading-none tracking-wider sm:text-5xl md:text-6xl">
            A Taste of
            <br />
            Mexico In Every Bite!
          </h2>

          <p className="mb-6 text-lg font-light leading-relaxed text-balance sm:text-xl md:text-2xl">
            We bring the bold flavors, colors, and traditions of Mexico to our
            community. From our vibrant paletas to our refreshing mangonadas,
            every item is crafted with care and passion.
          </p>

          <Link to="/about">
            <OrderOnlineButton text="Our Story" color="rosa" size="2xl" />
          </Link>
        </div>

        <div className="w-full overflow-hidden rounded-2xl shadow-md md:w-1/2">
          <img
            src={storyImage}
            alt="Our Story"
            className="h-[280px] w-full object-cover sm:h-[360px] md:h-[460px]"
          />
        </div>
      </section>
    </>
  );
}

export default Home;