import "./Select.css";

import Option from "../Option/Option";

export default function Select() {
    const cities: string[] = ["Zaragoza", "Huesca", "Teruel"];

    return (
        <>
            <select name="city" id="city">
                {cities.map((city, index) => (
                    <Option key={index} option={city} />
                ))}
            </select>
        </>
    );
}
