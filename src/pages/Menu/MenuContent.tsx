import { useState } from "react";

type CategoryId =
  | "iceCream"
  | "paletas"
  | "mangonadas"
  | "fruitTreats"
  | "snacks"
  | "drinks"
  | "corn"
  | "frozen";

type MenuItem = {
  name: string;
  description: string;
  image?: string;
};

const categories: { id: CategoryId; label: string }[] = [
  { id: "iceCream", label: "Ice Cream" },
  { id: "paletas", label: "Paletas" },
  { id: "frozen", label: "Frozen Treats" },
  { id: "mangonadas", label: "Mangonadas" },
  { id: "fruitTreats", label: "Fruit Treats" },
  { id: "corn", label: "Corn" },
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
      description: "Waffle bowl with 1 scoop of ice cream.",
      image: "/assets/menu/waffle-single.webp",
    },
    {
      name: "Waffle Double",
      description: "Waffle bowl with 2 scoops of ice cream.",
      image: "/assets/menu/waffle-double.webp",
    },
    {
      name: "Tres Marias",
      description: "Waffle bowl with 3 scoops of ice cream.",
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
      name: "Dairy-Based Paletas",
      description: "Rich and creamy paletas with classic Mexican flavors.",
      image: "/assets/menu/cream-paletas.webp",
    },
    {
      name: "Whole Pecan Popsicle",
      description: "Creamy paleta with whole pecans for a delightful crunch.",
      image: "/assets/menu/pecan-paleta.webp",
    },
    {
      name: "Ferrero Rocher Popsicle",
      description: "Indulgent paleta infused with Ferrero Rocher.",
      image: "/assets/menu/ferrero-paleta.webp",
    },
    {
      name: "Dry Fruit Popsicle",
      description: "Paleta with a mix of dried fruits.",
      image: "/assets/menu/dry-fruit-paleta.webp",
    },
    {
      name: "Strawberry Popsicle",
      description: "Classic strawberry paleta with a sweet and tangy flavor.",
      image: "/assets/menu/strawberry-paleta.webp",
    },
    {
      name: "Escamocha Popsicle",
      description: "Paleta inspired by the flavors of escamocha, with a mix of fresh fruits and sweet cream.",
      image: "/assets/menu/escamocha-paleta.webp",
    },
    {
      name: "Esquimal",
      description: "Classic Mexican paleta with a creamy, chocolate-covered exterior and a sweet, creamy interior. Also has an option with pecans.",
      image: "/assets/menu/esquimal-paleta.webp",
    },
  ],
  frozen: [
    {
      name: "Gansito",
      description: "Classic Gansito snack cake, with a creamy, fruity interior and a chocolate coating.",
      image: "/assets/menu/gansito.webp",
    },
    {
      name: "Chocobanana",
      description: "Frozen banana dipped in chocolate and covered with toppings.",
      image: "/assets/menu/chocobanana.webp",
    },
    {
      name: "Chocobanana with Pecans",
      description: "Frozen banana dipped in chocolate and covered with pecans.",
      image: "/assets/menu/chocobanana-pecan.webp",
    },
    {
      name: "Frozen Strawberry Box",
      description: "Box of frozen strawberries, perfect for smoothies or snacking.",
      image: "/assets/menu/frozen-strawberries.webp",
    }
  ],
  mangonadas: [
    {
      name: "Mangonada",
      description: "Refreshing mango beverage with chamoy, lime, and tajin.",
      image: "/assets/menu/mangonada.webp",
    },
    {
      name: "Mangonada Popsicle",
      description: "Paleta inspired by the flavors of a mangonada, with mango, chamoy, and tajín.",
      image: "/assets/menu/mangonada-paleta.webp",
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
      description: "Fresh fruit salad topped with cream, granola, and sweet toppings.",
      image: "/assets/menu/bionico.webp",
    },
    {
      name: "Fruit Cocktail",
      description: "Fresh mix of fruits seasoned with chamoy, lime, salt, and tajin.",
      image: "/assets/menu/fruit-cocktail.webp",
    },
    {
      name: "Yogurt with Fruit",
      description: "Creamy yogurt topped with fresh fruit and granola.",
      image: "/assets/menu/yogurt-fruit.webp",
    },
    {
      name: "Gazpacho",
      description: "Refreshing blend of fruits seasoned with chamoy, lime, salt, orange juice, and tajin.",
      image: "/assets/menu/gazpacho.webp",
    }
  ],
  corn: [
    {
      name: "Elote",
      description: "Corn with creamy sauce and sprinkled with cheese and chili powder. Option for a small or large serving.",
      image: "/assets/menu/elote.webp",
    },
    {
      name: "Elote en Palo",
      description: "Corn on the cob with creamy sauce and sprinkled with cheese and chili powder, served on a stick for easy eating.",
      image: "/assets/menu/elote-palo.webp",
    },
    {
      name: "Flamin' Hot Elote",
      description: "Corn with creamy sauce, sprinkled with cheese and Flamin' Hot Cheetos powder. Option for a small or large serving.",
      image: "/assets/menu/flamin-hot-elote.webp",
    },
    {
      name: "Flamin' Hot Elote en Palo",
      description: "Corn on the cob with creamy sauce, sprinkled with cheese and Flamin' Hot Cheetos powder, served on a stick for easy eating.",
      image: "/assets/menu/flamin-hot-elote-palo.webp",
    },
  ],
  snacks: [
    {
      name: "Chicharrones",
      description: "Fried pork skins, optional topped with cabbage, cream, and salsa.",
      image: "/assets/menu/chicharrones.webp",
    },
    {
      name: "Chicharron Preparado",
      description: "Fried pork skins prepared with cabbage, cream, salsa, and cheese.",
      image: "/assets/menu/chicharron-preparado.webp",
    },
    {
      name: "Chips",
      description: "Variety of chips choices. Option to add cheese.",
      image: "/assets/menu/chips.webp",
    },
    {
      name: "Dorilocos",
      description: "Doritos chips prepared with cucumber, jicama, chamoy, lime, and tajin. Option to add cheese.",
      image: "/assets/menu/dorilocos.webp",
    },
    {
      name: "Potato Chips",
      description: "Variety of potato chips. Option to add Cueritos.",
      image: "/assets/menu/potato-chips.webp",
    },
    {
      name: "Cueritos",
      description: "Snack of pickled pork skins, served with a variety of toppings.",
      image: "/assets/menu/cueritos.webp",
    },
    {
      name: "Nachos",
      description: "Corn chips with American cheese and jalapenos.",
      image: "/assets/menu/nachos.webp",
    },
    {
      name: "Dorinachos",
      description: "Choice of chips served with a side of melted american cheese and jalapeños.",
      image: "/assets/menu/dorinachos.webp",
    },
    {
      name: "Sabritas",
      description: "Variety of Sabritas chips. Option to add cheese.",
      image: "/assets/menu/sabritas.webp",
    },
    {
      name: "Sabritas Preparadas",
      description: "Variety of Sabritas chips prepared with cucumber, jicama, chamoy, lime, and tajin.",
      image: "/assets/menu/sabritas-preparadas.webp",
    }
  ],
  drinks: [
    {
      name: "Agua Fresca",
      description: "Refreshing fruit-infused water and fruits. Available in large or medium with optional ice.",
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
    {
      name: "Soda Bottle",
      description: "",
      image: "/assets/menu/soda-bottle.webp",
    },
    {
      name: "Soda Can",
      description: "",
      image: "/assets/menu/soda-can.webp",
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
            <li key={category.id} className="text-xl">
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

                <p className="mt-2 max-w-xl text-md tracking-wide leading-relaxed text-black/70">
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