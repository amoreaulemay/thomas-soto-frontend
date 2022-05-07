import ImageModel from "../../models/ImageModel";
import "./VerticalCard.css";

export default function VerticalCard(props: { data: ImageModel }) {
    return (
        <img
            className="VerticalCard--wrapper"
            alt={props.data.alt}
            src={props.data.src}
        />
    );
}
