interface PilotTextProps {
    text: string
}

export default function PilotText({text}: PilotTextProps) {
    return (
        <p className="text-gray-500"> {text} </p>
    )
}