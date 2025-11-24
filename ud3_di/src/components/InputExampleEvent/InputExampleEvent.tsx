export default function InputExampleEvents() {

    function handleChange(e) {
        console.log(e.target.value)
    }

    return <input onChange={handleChange} type="text" placeholder="Introduce tu nombre"/>
}