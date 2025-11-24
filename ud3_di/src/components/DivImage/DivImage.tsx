import Image from "../Image/Image";

export default function DivImage() {
    const IMAGE = {
        src: "https://plus.unsplash.com/premium_photo-1661816797370-928a8749043c?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Penguin",
    };

    return (
        <>
            <div className="flex justify-between align-middle text-center flex-wrap">
                <Image {...IMAGE} />
                <h1>Pablo Casamián</h1>

                <p> penguinn
                    pen
                </p>
            </div>
        </>
    );
}
