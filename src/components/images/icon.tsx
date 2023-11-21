import React from "react";
import iconSprite from './iconSprite.svg'


type IconPropsType = {
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;

};
export const Icon: React.FC<IconPropsType> = (props: IconPropsType) => {
    return (
        <svg
            height={props.height || "20px"}
            width={props.width || "20px"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox={props.viewBox || "0 0 20 20"}
            fill="none"
        >
            <use xlinkHref={`${iconSprite}#${props.iconId} `}/>
        </svg>
    );
};