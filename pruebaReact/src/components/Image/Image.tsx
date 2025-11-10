interface ImageData {
    src: string,
    alt: string,
    width: string,
    height: string
}

import './Image.css';

export default function Image() {

    const image:ImageData = {
        src: "https://images.ctfassets.net/denf86kkcx7r/4IPlg4Qazd4sFRuCUHIJ1T/f6c71da7eec727babcd554d843a528b8/gatocomuneuropeo-97",
        alt: "Gato gaturro",
        width: '380px',
        height: '250px'
    }

    return (
        <>
            <img src={image.src} alt={image.alt} width={image.width} height={image.height}/>
        </>
    )
}