
type FontPropsType = {
    family?: string;
    weight?: number;
    lineheight?: number;
    fmin?: number;
    fmax?: number;


}

export const font = ({family, weight, lineheight, fmax,fmin}: FontPropsType) => `
font-family: ${family || ""};
font-weight: ${weight || 400};
line-height: ${lineheight || 1.2};
font-size: calc( (100vw - 320px)/(1140 - 320) * (${fmax} - ${fmin}) + ${fmin}px);
`