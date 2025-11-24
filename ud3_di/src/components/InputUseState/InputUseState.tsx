import { useState } from "react"

export default function InputUseState() {

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);

    function handleChangeName(e : React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
    }
    function handleChangeAge(e : React.ChangeEvent<HTMLInputElement>) {
        if (isNaN(e.target.valueAsNumber))  {
            setAge(0) 
            return;
        }
        setAge(e.target.valueAsNumber);
    }

    return (
        <>
            <input type="text" placeholder="Insert your name" onChange={handleChangeName}/>
            <input type="number" placeholder="Insert your age" onChange={handleChangeAge}/>
            <p> Tu nombre es: {name } y tu edad es {age}</p>
        </>
    )
}