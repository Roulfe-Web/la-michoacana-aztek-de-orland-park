import { useState } from "react";

type CategoryId =
  | "iceCream"
  | "paletas"
  | "mangonadas"
  | "fruitTreats"
  | "snacks"
  | "drinks";

type MenuItem = {
  name: string;
  description: string;
  image?: string;
};

const categories: { id: CategoryId; label: string }[] = [
  { id: "iceCream", label: "Ice Cream" },
  { id: "paletas", label: "Paletas" },
  { id: "mangonadas", label: "Mangonadas" },
  { id: "fruitTreats", label: "Fruit Treats" },
  { id: "snacks", label: "Snacks" },
  { id: "drinks", label: "Drinks" },
];

const menuItems: Record<CategoryId, MenuItem[]> = {
  iceCream: [
    {
      name: "Ice Cream Cup",
      description: "Creamy scoops served in a cup with your favorite flavors.",
      image: "/assets/menu/ice-cream.webp",
    },
    {
      name: "Banana Split",
      description: "A delicious banana split with three scoops and toppings.",
      image: "/assets/menu/banana-split.webp",
    },
    {
      name: "Waffle Single",
      description: "Waffle bowl with 1 scoop of ice cream",
      image: "/assets/menu/waffle-single.webp",
    },
    {
      name: "Waffle Double",
      description: "Waffle bowl with 2 scoops of ice cream",
      image: "/assets/menu/waffle-double.webp",
    },
    {
      name: "Tres Marias",
      description: "Waffle bowl with 3 scoops of ice cream",
      image: "/assets/menu/tres-marias.webp",
    },
  ],
  paletas: [
    {
      name: "Water-Based Paletas",
      description: "Refreshing fruit popsicles made with bright, bold flavors.",
      image: "/assets/menu/paletas.webp",
    },
    {
      name: "Cream-Based Paletas",
      description: "Rich and creamy paletas with classic Mexican flavors.",
      image: "/assets/menu/cream-paletas.webp",
    },
  ],
  mangonadas: [
    {
      name: "Mangonada",
      description: "Mango, chamoy, tajín, and sweet-spicy flavor in every bite.",
      image: "/assets/menu/mangonada.webp",
    },
  ],
  fruitTreats: [
    {
      name: "Fresas con Crema",
      description: "Fresh strawberries with sweet cream.",
      image: "/assets/menu/fresas.webp",
    },
    {
      name: "Biónico",
      description: "Fresh fruit topped with cream, granola, and sweet toppings.",
      image: "/assets/menu/bionico.webp",
    },
    {
      name: "Fruit Cocktail",
      description: "Fresh mix of cucumber, mango, pineapple, watermelon, seasoned with chamoy, lime, salt, and tajin.",
      image: "/assets/menu/fruit-cocktail.webp",
    },
  ],
  snacks: [
    {
      name: "Esquite",
      description: "Corn in a cup with creamy, savory, and spicy toppings.",
      image: "/assets/menu/esquite.webp",
    },
    {
      name: "Frituras Preparadas",
      description: "Crunchy chips prepared with sauces, toppings, and flavor.",
      image: "/assets/menu/frituras.webp",
    },
    {
      name: "Nachos",
      description: "Corn chips with American cheese and jalapenos",
      image: "/assets/menu/nachos.webp",
    },
    {
      name: "Papas Fritas",
      description: "Thinly sliced potatoes, fried until golden. Option to add toppings.",
      image: "/assets/menu/papas_fritas.webp",
    },
    {
      name: "Cueritos",
      description: "Snack of pickled pork skins, served with choice of Chamoy, lime, or Valentina sauce toppings.",
      image: "/assets/menu/cueritos.webp",
    },
    {
      name: "Dorinachos",
      description: "Choice of chips served with a side of melted american cheese and jalapeños",
      image: "/assets/menu/dorinachos.webp",
    },
    {
      name: "Chicharrones",
      description: "Fried pork skins, optional topped with cabbage, cream, and salsa",
      image: "/assets/menu/chicharrones.webp",
    },
    {
      name: "Cheetos con Queso",
      description: "Cheetos covered in melted american cheese, served with jalapeños",
      image: "/assets/menu/cheetos.webp",
    }
  ],
  drinks: [
    {
      name: "Agua Fresca",
      description: "Refreshing fruit-infused water.",
      image: "/assets/menu/agua-fresca.webp",
    },
    {
      name: "Milkshake",
      description: "Classic milkshake blended with your choice of ice cream.",
      image: "/assets/menu/milkshake.webp",
    },
    {
      name: "Smoothie",
      description: "A blend of fresh fruits and yogurt.",
      image: "/assets/menu/smoothie.webp",
    },
    {
      name: "Orange Juice",
      description: "Choice between 20oz and 32oz.",
      image: "/assets/menu/orange-juice.webp",
    },
    {
      name: "Monster Preparado",
      description: "Monster energy drink with chamoy, lime, and tajin.",
      image: "/assets/menu/monster-preparado.webp",
    },
    {
      name: "Monster",
      description: "",
      image: "/assets/menu/monster.webp",
    },
    {
      name: "Red Bull",
      description: "",
      image: "/assets/menu/red-bull.webp",
    },
    {
      name: "Gatorade",
      description: "",
      image: "/assets/menu/gatorade.webp",
    },
  ],
};

function Menu() {
  const [activeCategory, setActiveCategory] =
    useState<CategoryId>("iceCream");

  return (
    <section className="bg-bg px-6 py-14 md:px-24">
      <div className="mx-auto max-w-6xl text-center">

        <ul className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <li key={category.id}>
              <button
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full px-5 py-2 ${
                  activeCategory === category.id
                    ? "border-1 border-amarillo text-amarillo cursor-pointer"
                    : "text-black hover:text-amarillo transition duration-200 cursor-pointer"
                }`}
              >
                {category.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-x-16 gap-y-8 text-left md:grid-cols-2">
          {menuItems[activeCategory].map((item) => (
            <article key={item.name} className="flex gap-5">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 w-24 shrink-0 rounded-sm object-cover"
                />
              )}

              <div className="w-full">
                <div className="flex items-center gap-4">
                  <h3 className="shrink-0 text-xl font-black tracking-wider">
                    {item.name}
                  </h3>
                  <div className="h-px flex-1 bg-black/15" />
                </div>

                <p className="mt-2 max-w-xl text-sm leading-relaxed text-black/70">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;