import React from "react";
import "./TilesGrid.css";

interface TilesGridProps {
    tiles?: {
        left?: JSX.Element[];
        middle: JSX.Element[];
        right?: JSX.Element[];
    };
}

export default function TilesGrid(props: TilesGridProps) {
    const center = props.tiles?.middle.map((element, index) => {
        return <React.Fragment key={index}>{element}</React.Fragment>;
    });

    return (
        <div className="TilesGrid--wrapper">
            <section className="TilesGrid--left">{props.tiles?.left}</section>
            <section className="TilesGrid--center">{center}</section>
            <section className="TilesGrid--right">{props.tiles?.right}</section>
        </div>
    );
}
