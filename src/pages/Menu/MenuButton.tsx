import "./MenuButton.css";
import { useState } from "react";

type MenuCategoryProps = {
    category: string;
};

function MenuButton({ category }: MenuCategoryProps) {

    return (
        <li className="hover:hover-rosa text-lg">{category}</li>
    );
}

export default MenuButton;