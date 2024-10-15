import { useState } from "react";


export const AddCategory = ({ onNewCategory }) => {


    const [InputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const trimmedValue = InputValue.trim()
        if (  trimmedValue.length <= 1) return;

        onNewCategory( trimmedValue )
        console.log( trimmedValue );
        
    }
    return (

        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Search Gif"
                value={InputValue}
                onChange={onInputChange}
            >
            </input>
        </form>
    )

}
