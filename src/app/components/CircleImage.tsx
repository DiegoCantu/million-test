import Image from 'next/image'
import React from "react";

interface CircleImageProps {
    image: string;
}

const CircleImage: React.FC<CircleImageProps> = ({ image }) => {
    return (
        <Image className="circle-image" src={image} alt={"Imagen"} width={112} height={112} loading="lazy" quality="100"
            placeholder="blur" blurDataURL={image} />
    );
};

export default CircleImage;