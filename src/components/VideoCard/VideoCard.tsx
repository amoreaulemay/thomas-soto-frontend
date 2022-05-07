import "./VideoCard.css";

interface VideoCardProps {
    backgroundSrc?: string;
}

export default function VideoCard(props: VideoCardProps) {
    return (
        <div style={{ position: "relative" }}>
            <div
                className="VideoCard--wrapper"
                style={{ backgroundImage: props.backgroundSrc ?? "none" }}
            ></div>
        </div>
    );
}
