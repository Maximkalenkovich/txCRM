import { Icon } from "./icon";
import React from "react";

export const Logo: React.FC = () => {
    return (
        <div>
            <Icon iconId={"logo1"}/>
            <Icon iconId={'logo2'} />

            <p></p>
        </div>
    );
};