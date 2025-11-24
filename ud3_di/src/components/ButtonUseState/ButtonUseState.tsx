import { useState } from "react";

export default function ButtonUseState() {

    const [counter, setCounter] = useState(0);

    function handleClickAdd() {
        setCounter(counter + 1);
    }
    function handleClickSubstract() {
        if(counter <= 0) return
        setCounter(counter - 1);
    }

    return (
        <>
            <button onClick={handleClickAdd}>click para +</button>
            <button onClick={handleClickSubstract}>click para -</button>
            <p>Has hecho  {counter} clicks</p>
        </>

    );

}