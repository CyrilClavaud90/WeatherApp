import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { changeValue } from "../../actions";

function Form() {
    const dispatch = useDispatch();

    const value = useSelector((state) => state.formValue);

    const handleChange = (event) => {
        console.log(event.currentTarget.value);
        dispatch(changeValue(event.currentTarget.value));
    };

    return (
        <form>
            <label>Add location</label>
            <input
                type="text"
                onChange={handleChange}
                value={value}
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default Form;