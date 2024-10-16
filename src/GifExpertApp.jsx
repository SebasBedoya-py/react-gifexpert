import { useState } from "react";
import { AddCategory, GifGrid} from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Cbum'])

    const onAddCategory = (value) => {
        if (categories.includes(value)) return;
        setCategories([value, ...categories]);
    }

    return (
        <>
            {/* Titutlo */}
            <h1>GifExpertApp</h1>

            {/* Input */}

            <AddCategory onNewCategory={onAddCategory} />

            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category}
                    />)
                )
            }

            {/* Listado Gif */}
            {/* Gif Item */}
        </>
    )
}