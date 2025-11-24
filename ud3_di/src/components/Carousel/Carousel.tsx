import { useState } from "react";
import Image from "../Image/Image";
export default function Carousel() {
    const [imageIndex, setimageIndex] = useState(0);

    const IMAGES = [
        {
            src: "https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/15231691/453801468.0.0.1421786380.jpg?quality=90&strip=all&crop=16.73,0,66.54,100",
            alt: "wow",
        },
        {
            src: "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/612763581/900",
            alt: "wow",
        },
        {
            src: "https://explore-live.s3.eu-west-1.amazonaws.com/medialibraries/explore/blog-images/2018%2012%20december/shutterstock_1080525158-2.jpg?ext=.jpg&width=620&format=webp&quality=80&v=202103231018",
            alt: "wow",
        },
    ];

    function handleNext() {
        if (imageIndex == IMAGES.length - 1) {
            setimageIndex(0);
            return;
        }
        setimageIndex(imageIndex => imageIndex + 1);
    }
    function handlePrev() {
        if (imageIndex == 0) {
            setimageIndex(IMAGES.length - 1);
            return;
        }
        setimageIndex(imageIndex => imageIndex - 1);
    }

    return (
        <>
            <div onClick={handleNext}>
                <Image {...IMAGES[imageIndex]} />
            </div>

            <button onClick={handleNext}>NEXT</button>
            <p> {imageIndex} </p>
            <button onClick={handlePrev}>PREV</button>
        </>
    );
}
