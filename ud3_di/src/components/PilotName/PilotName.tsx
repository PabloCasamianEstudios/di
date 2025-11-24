interface PilotNameProps {
    name: string,
}

export default function PilotName({name} : PilotNameProps) {
    return (
          <h1 className="text-white font-black text-2xl uppercase">
                        {name}
                    </h1>
    )
}