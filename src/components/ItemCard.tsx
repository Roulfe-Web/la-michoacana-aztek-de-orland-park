type ItemColor = "amarillo" | "azul" | "rosa" | "aranjado" | "lime";

type ItemCardProps = {
    text: string;
    description: string;
    color?: ItemColor;
};

function ItemCard({ text, description, color }: ItemCardProps) {
    return (
            <div className={`bg-${color || 'rosa'} w-sm`}>
                <img src="src\assets\istockphoto-1147544807-612x612.jpg" alt="Item Image" />
                <div className="p-4 text-center text-white">
                    <h3 className="text-3xl font-semibold tracking-widest">{text}</h3>
                    <p className="text-lg">{description}</p>
                </div>
            </div>
    );
}

export default ItemCard;