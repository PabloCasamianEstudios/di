interface PilotNumberProps {
    num: number;
}

export default function PilotNumber({ num }: PilotNumberProps) {
    return <h1 className="text-2xl w-10 bg-white text-black font-black rounded-2xl text-center">{num}</h1>;
}
