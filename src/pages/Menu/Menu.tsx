import MenuButton from "./MenuButton";
import MenuContent from "./MenuContent";

function Menu() {

    return (
        <div className="flex flex-col items-center px-6 py-14 md:px-24">
            <h2 className="text-3xl mb-6 font-semibold tracking-wider text-center">
                La Michoacana Aztek Menu
            </h2>
            <MenuContent />
        </div>
    );
}

export default Menu;