interface ButtonProps {
    text: string
}

function Button({ text } : ButtonProps) {

    return <button className="bg-blue-500 text-stone-50 rounded-full p-2">{text}</button>
}

export default Button;