interface InputProps {
    placeholder: string
    type: string
}

export default function InputBox({type, placeholder} : InputProps) {
    return <input type={type} placeholder={placeholder} />;
}