import OrderOnlineButton from "../../components/forms/ui/OrderOnlineButton";
import ItemCard from "../../components/ItemCard";
import { Link } from "react-router-dom";

import mangonadaMobile from "/mangonada-mobile-500w.webp";
import mangonadaDesktop from "/mangonada-desktop-800w.webp";
import logo from "/logo-500.webp";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="overflow-hidden bg-bg px-6 py-12 md:flex md:min-h-[760px] md:px-24 md:py-0 lg:min-h-[850px]">
        <div className="z-10 flex flex-col items-center justify-center text-center md:w-1/2 md:items-start md:text-left">
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
          <picture>
            <source media="(max-width: 768px)" srcSet={mangonadaMobile} />
          

            <img
              src={mangonadaDesktop}
              alt="Mangonada"
              fetchPriority="high"
              decoding="async"
              className="
                absolute left-1/2 top-0
                w-[420px] max-w-none -translate-x-1/2
                sm:w-[500px]
                md:top-16 md:w-[620px]
                lg:w-[700px]
              "
            />
          </picture>
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
              image="/menu/ice-cream2.avif"
            />
            <ItemCard
              color="rosa"
              text="Paletas"
              description="Colorful popsicles perfect for a hot day."
              image="/menu/paletas.avif"
            />
            <ItemCard
              color="amarillo"
              text="Mangonadas"
              description="Refreshing mango smoothie blend."
              image="/menu/mangonada2.avif"
            />
            <ItemCard
              color="azul"
              text="Elote"
              description="Corn with a kick of flavor."
              image="/menu/elote.avif"
            />
            <ItemCard
              color="rosa"
              text="Bebidas"
              description="A variety of refreshing drinks to quench your thirst."
              image="/menu/agua-fresca.avif"
            />
            <ItemCard
              color="aranjado"
              text="Snacks"
              description="Delicious snacks to satisfy your cravings."
              image="/menu/chicharron-preparado.avif"
            />
          </div>

          <div className="flex shrink-0 gap-1 pr-1" aria-hidden="true">
            <ItemCard
              color="azul"
              text="Ice Cream"
              description="Delicious ice cream made with natural ingredients."
              image="/menu/ice-cream2.avif"
            />
            <ItemCard
              color="rosa"
              text="Paletas"
              description="Colorful popsicles perfect for a hot day."
              image="/menu/paletas.avif"
            />
            <ItemCard
              color="amarillo"
              text="Mangonadas"
              description="Refreshing mango smoothie blend."
              image="/menu/mangonada2.avif"
            />
            <ItemCard
              color="azul"
              text="Elote"
              description="Corn with a kick of flavor."
              image="/menu/elote.avif"
            />
            <ItemCard
              color="rosa"
              text="Bebidas"
              description="A variety of refreshing drinks to quench your thirst."
              image="/menu/agua-fresca.avif"
            />
            <ItemCard
              color="aranjado"
              text="Snacks"
              description="Delicious snacks to satisfy your cravings."
              image="/menu/chicharron-preparado.avif"
            />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="flex flex-col items-center justify-between gap-10 bg-bg px-6 py-16 md:flex-row md:px-24 md:py-20 lg:gap-14">
        <div className="flex max-w-2xl flex-col items-center text-center md:items-start md:text-left">
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

        <div className="w-full overflow-hidden rounded-2xl md:w-1/2">
          <img
            src={logo}
            alt="Our Story"
            className="h-[280px] w-full object-contain sm:h-[360px] md:h-[460px]"
          />
        </div>
      </section>
    </>
  );
}

export default Home;