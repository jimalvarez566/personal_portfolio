import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "Loading...";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                clearInterval(interval);
                console.log('Text animation complete');
                onComplete();
            }
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex items-center justify-center">
            <div className="flex flex-col items-center">
                <div className="mb-8 text-5xl md:text-6xl font-mono font-bold">
                    {text} <span className="animate-blink ml-1"> | </span>
                </div>
                <div className="w-[300px] h-[3px] bg-gray-800 rounded relative overflow-hidden">
                    <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
                </div>
            </div>
        </div>
    );
};