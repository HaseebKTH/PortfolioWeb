import { useState, useEffect } from "react";

export function TypingEffect2() {
    const text = "Contact Me!";
    const [displayedText, setDisplayedText] = useState("");
    const [i, setI] = useState(0);

    useEffect(() => {
        const typingEffect = setInterval(() => {
            if (i < text.length) {
                setDisplayedText((prevState) => prevState + text.charAt(i));
                setI((prevI) => prevI + 1);
            } else {
                clearInterval(typingEffect);
                setTimeout(() => {
                    setDisplayedText("");
                    setI(0);
                }, 2000); // Wait for 2 seconds before clearing the text
            }
        }, 200);

        return () => {
            clearInterval(typingEffect);
        };
    }, [i]);

    return (
        <h1 className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]">
            {displayedText || "Contact Me!"}
        </h1>
    );
}
