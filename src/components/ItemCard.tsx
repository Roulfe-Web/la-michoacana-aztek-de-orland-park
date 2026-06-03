import itemImage from "../assets/istockphoto-1147544807-612x612.jpg";

type ItemColor = "amarillo" | "azul" | "rosa" | "aranjado" | "lime";

type ItemCardProps = {
  text: string;
  description: string;
  color?: ItemColor;
  image?: string;
};

const colorClasses: Record<ItemColor, string> = {
  amarillo: "bg-amarillo",
  azul: "bg-azul",
  rosa: "bg-rosa",
  aranjado: "bg-aranjado",
  lime: "bg-lime",
};

function ItemCard({ text, description, color = "rosa", image }: ItemCardProps) {
  return (
    <div
      className={`${colorClasses[color]} w-[260px] shrink-0 overflow-hidden md:w-[320px]`}
    >
      <img
        src={image || itemImage}
        alt={text}
        className="h-[170px] w-full object-cover md:h-[210px]"
      />

      <div className="p-4 text-center text-white">
        <h3 className="text-2xl font-semibold tracking-widest md:text-3xl">
          {text}
        </h3>

        <p className="mt-2 text-base md:text-lg">{description}</p>
      </div>
    </div>
  );
}

export default ItemCard;