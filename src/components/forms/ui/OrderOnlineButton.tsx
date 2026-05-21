type ButtonColor = "amarillo" | "azul" | "rosa" | "aranjado";
type ButtonSize = "sm" | "md" | "lg" | "xl" | "2xl";

type OrderOnlineButtonProps = {
  text: string;
  color?: ButtonColor;
  size?: ButtonSize;
};

const colorClasses: Record<ButtonColor, string> = {
  amarillo: "bg-amarillo text-black hover:bg-amarillo/90",
  azul: "bg-azul text-white hover:bg-azul/90",
  rosa: "bg-rosa text-white hover:bg-rosa/90",
  aranjado: "bg-aranjado text-white hover:bg-aranjado/90",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
};

function OrderOnlineButton({
  text,
  color = "amarillo",
  size = "md",
}: OrderOnlineButtonProps) {
  return (
    <button
      className={`${colorClasses[color]} ${sizeClasses[size]} px-12 py-2.5 rounded-xl cursor-pointer transition text-center tracking-wider`}
    >
      {text}
    </button>
  );
}

export default OrderOnlineButton;