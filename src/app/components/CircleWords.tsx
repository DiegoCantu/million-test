import React from "react";

interface CircleWordsProps {
    userName: string;
}

const CircleWords: React.FC<CircleWordsProps> = ({ userName }) => {
    return (
        <div
            className="circle-words">
            {String(userName)}
        </div>
    );
};

export default CircleWords;