import Image from "../Image/Image";
import PilotNumber from "../PilotNumber/PilotNumber";
import PilotName from "../PilotName/PilotName";
import PilotText from "../PilotText/PilotText";

interface PilotCardProps {
    num: number;
    src: string;
    alt: string;
    name: string;
    country: string;
    countryPhto: string;
    team: string;
}

export default function PilotCard({
    num,
    src,
    alt,
    name,
    country,
    countryPhto,
    team,
}: PilotCardProps) {
    return (
        <>
            <div className="bg-gray-700 rounded-md p-4">
                <Image src={src} alt={alt} />

                <div className="flex flex-col ">
                    <PilotNumber num={num} />

                    <PilotName name={name} />

                    <div className="flex justify-start gap-4">
                        <div className="flex gap-2">
                            <img
                                className="w-7 rounded-md"
                                src={countryPhto}
                                alt=""
                            />
                            <PilotText text={country} />
                        </div>

                        <PilotText text={team} />
                    </div>
                </div>
            </div>
        </>
    );
}
