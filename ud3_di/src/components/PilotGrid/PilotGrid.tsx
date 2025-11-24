import PilotCard from "../PilotCard/PilotCard";

export default function PilotGrid() {

 const PILOTS = {
        num: 5,
        src: "https://resources.motogp.pulselive.com/photo-resources/2025/02/10/4166e780-86ca-49d8-a42b-4627d26b1f48/I8FgpnEk.png?height=400&width=600",
        alt: "Johann",
        name: "Johann Zarco",
        country:"France",
        countryPhto:"https://static-files.motogp.pulselive.com/assets/flags/fr.svg",
        team: "CAASTROL Honda LCR"
    };

    return (
        
        <>
        <div className="grid xl:grid-cols-4 md:grid-cols-3 p-4 gap-3">

            <PilotCard {...PILOTS}/>
            <PilotCard {...PILOTS}/>
            <PilotCard {...PILOTS}/>
            <PilotCard {...PILOTS}/>
            <PilotCard {...PILOTS}/>
        </div>
        </>
    )
}