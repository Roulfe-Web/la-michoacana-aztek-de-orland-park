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
      image: "src/assets/menu/ice-cream.avif",
    },
    {
      name: "Banana Split",
      description: "A delicious banana split with three scoops and toppings.",
      image: "src/assets/menu/banana-split.avif",
    },
    {
      name: "Waffle Single",
      description: "Waffle bowl with 1 scoop of ice cream.",
      image: "src/assets/menu/waffle-single.avif",
    },
    {
      name: "Waffle Double",
      description: "Waffle bowl with 2 scoops of ice cream.",
      image: "src/assets/menu/waffle-double.avif",
    },
    {
      name: "Tres Marias",
      description: "Waffle bowl with 3 scoops of ice cream.",
      image: "src/assets/menu/tres-marias.avif",
    },
  ],
  paletas: [
    {
      name: "Water-Based Paletas",
      description: "Refreshing fruit popsicles made with bright, bold flavors.",
      image: "src/assets/menu/paletas.avif",
    },
    {
      name: "Dairy-Based Paletas",
      description: "Rich and creamy paletas with classic Mexican flavors.",
      image: "src/assets/menu/cream-paletas.avif",
    },
    {
      name: "Whole Pecan Popsicle",
      description: "Creamy paleta with whole pecans for a delightful crunch.",
      image: "src/assets/menu/pecan-paleta.avif",
    },
    {
      name: "Ferrero Rocher Popsicle",
      description: "Indulgent paleta infused with Ferrero Rocher.",
      image: "src/assets/menu/ferrero-paleta.avif",
    },
    {
      name: "Dry Fruit Popsicle",
      description: "Paleta with a mix of dried fruits.",
      image: "src/assets/menu/dry-fruit-paleta.avif",
    },
    {
      name: "Strawberry Popsicle",
      description: "Classic strawberry paleta with a sweet and tangy flavor.",
      image: "src/assets/menu/strawberry-paleta.avif",
    },
    {
      name: "Escamocha Popsicle",
      description: "Paleta inspired by the flavors of escamocha, with a mix of fresh fruits and sweet cream.",
      image: "src/assets/menu/escamocha-paleta.avif",
    },
    {
      name: "Esquimal",
      description: "Classic Mexican paleta with a creamy, chocolate-covered exterior and a sweet, creamy interior. Also has an option with pecans.",
      image: "src/assets/menu/esquimal-paleta.avif",
    },
  ],
  frozen: [
    {
      name: "Gansito",
      description: "Classic Gansito snack cake, with a creamy, fruity interior and a chocolate coating.",
      image: "src/assets/menu/gansito.avif",
    },
    {
      name: "Chocobanana",
      description: "Frozen banana dipped in chocolate and covered with toppings.",
      image: "src/assets/menu/chocobanana.avif",
    },
    {
      name: "Chocobanana with Pecans",
      description: "Frozen banana dipped in chocolate and covered with pecans.",
      image: "src/assets/menu/chocobanana-pecan.avif",
    },
    {
      name: "Frozen Strawberry Box",
      description: "Box of frozen strawberries, perfect for smoothies or snacking.",
      image: "src/assets/menu/frozen-strawberries.avif",
    }
  ],
  mangonadas: [
    {
      name: "Mangonada",
      description: "Refreshing mango beverage with chamoy, lime, and tajin.",
      image: "src/assets/menu/mangonada.avif",
    },
    {
      name: "Mangonada Popsicle",
      description: "Paleta inspired by the flavors of a mangonada, with mango, chamoy, and tajín.",
      image: "src/assets/menu/mangonada-paleta.avif",
    },
  ],
  fruitTreats: [
    {
      name: "Fresas con Crema",
      description: "Fresh strawberries with sweet cream.",
      image: "src/assets/menu/fresas.avif",
    },
    {
      name: "Biónico",
      description: "Fresh fruit salad topped with cream, granola, and sweet toppings.",
      image: "src/assets/menu/bionico.avif",
    },
    {
      name: "Fruit Cocktail",
      description: "Fresh mix of fruits seasoned with chamoy, lime, salt, and tajin.",
      image: "src/assets/menu/fruit-cocktail.avif",
    },
    {
      name: "Yogurt with Fruit",
      description: "Creamy yogurt topped with fresh fruit and granola.",
      image: "src/assets/menu/yogurt-fruit.avif",
    },
    {
      name: "Gazpacho",
      description: "Refreshing blend of fruits seasoned with chamoy, lime, salt, orange juice, and tajin.",
      image: "src/assets/menu/gazpacho.avif",
    }
  ],
  corn: [
    {
      name: "Elote",
      description: "Corn with creamy sauce and sprinkled with cheese and chili powder. Option for a small or large serving.",
      image: "src/assets/menu/elote.avif",
    },
    {
      name: "Elote en Palo",
      description: "Corn on the cob with creamy sauce and sprinkled with cheese and chili powder, served on a stick for easy eating.",
      image: "src/assets/menu/elote-palo.avif",
    },
    {
      name: "Flamin' Hot Elote",
      description: "Corn with creamy sauce, sprinkled with cheese and Flamin' Hot Cheetos powder. Option for a small or large serving.",
      image: "src/assets/menu/flamin-hot-elote.avif",
    },
    {
      name: "Flamin' Hot Elote en Palo",
      description: "Corn on the cob with creamy sauce, sprinkled with cheese and Flamin' Hot Cheetos powder, served on a stick for easy eating.",
      image: "src/assets/menu/flamin-hot-elote-palo.avif",
    },
  ],
  snacks: [
    {
      name: "Chicharrones",
      description: "Fried pork skins, optional topped with cabbage, cream, and salsa.",
      image: "src/assets/menu/chicharrones.avif",
    },
    {
      name: "Chicharron Preparado",
      description: "Fried pork skins prepared with cabbage, cream, salsa, and cheese.",
      image: "src/assets/menu/chicharron-preparado.avif",
    },
    {
      name: "Chips",
      description: "Variety of chips choices. Option to add cheese.",
      image: "src/assets/menu/chips.avif",
    },
    {
      name: "Dorilocos",
      description: "Doritos chips prepared with cucumber, jicama, chamoy, lime, and tajin. Option to add cheese.",
      image: "src/assets/menu/dorilocos.avif",
    },
    {
      name: "Potato Chips",
      description: "Variety of potato chips. Option to add Cueritos.",
      image: "src/assets/menu/potato-chips.avif",
    },
    {
      name: "Cueritos",
      description: "Snack of pickled pork skins, served with a variety of toppings.",
      image: "src/assets/menu/cueritos.avif",
    },
    {
      name: "Nachos",
      description: "Corn chips with American cheese and jalapenos.",
      image: "src/assets/menu/nachos.avif",
    },
    {
      name: "Dorinachos",
      description: "Choice of chips served with a side of melted american cheese and jalapeños.",
      image: "src/assets/menu/dorinachos.avif",
    },
    {
      name: "Sabritas",
      description: "Variety of Sabritas chips. Option to add cheese.",
      image: "src/assets/menu/sabritas.avif",
    },
    {
      name: "Sabritas Preparadas",
      description: "Variety of Sabritas chips prepared with cucumber, jicama, chamoy, lime, and tajin.",
      image: "src/assets/menu/sabritas-preparadas.avif",
    }
  ],
  drinks: [
    {
      name: "Agua Fresca",
      description: "Refreshing fruit-infused water and fruits. Available in large or medium with optional ice.",
      image: "src/assets/menu/agua-fresca.avif",
    },
    {
      name: "Milkshake",
      description: "Classic milkshake blended with your choice of ice cream.",
      image: "src/assets/menu/milkshake.avif",
    },
    {
      name: "Smoothie",
      description: "A blend of fresh fruits and yogurt.",
      image: "src/assets/menu/smoothie.avif",
    },
    {
      name: "Orange Juice",
      description: "Choice between 20oz and 32oz.",
      image: "src/assets/menu/orange-juice.avif",
    },
    {
      name: "Monster Preparado",
      description: "Monster energy drink with chamoy, lime, and tajin.",
      image: "src/assets/menu/monster-preparado.avif",
    },
    {
      name: "Monster",
      description: "",
      image: "src/assets/menu/monster.avif",
    },
    {
      name: "Red Bull",
      description: "",
      image: "src/assets/menu/red-bull.avif",
    },
    {
      name: "Gatorade",
      description: "",
      image: "src/assets/menu/gatorade.avif",
    },
    {
      name: "Soda Bottle",
      description: "",
      image: "src/assets/menu/soda-bottle.avif",
    },
    {
      name: "Soda Can",
      description: "",
      image: "src/assets/menu/soda-can.avif",
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
                  className="h-24 w-24 shrink-0 rounded-md object-cover"
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