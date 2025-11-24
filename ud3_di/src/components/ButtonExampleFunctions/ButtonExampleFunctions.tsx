export default function ButtonExampleFunctions() {
    function handleClick() {
        alert("click")
    }

    return (
        <>
            <button onClick={handleClick}> Botón </button>
        </>
    );
}
