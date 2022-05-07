import TilesGrid from "../components/TilesGrid/TilesGrid";
import VideoCard from "../components/VideoCard/VideoCard";
import "./styles/Common.css";
import "./styles/Home.css";

import { stills } from "../data/stills";
import VerticalCard from "../components/VerticalCard/VerticalCard";
import { videos } from "../data/videos";
import { gradualOpacity } from "../scripts/gradualOpacity";

function* cardGenerator() {
    let i = 0;
    let max = videos.length;

    while (i < max) {
        let card = <VideoCard backgroundSrc={`url(${videos[i]})`} />;
        i++;
        yield card;
    }
}

function* verticalGenerator() {
    let max = stills.length;
    let start = 0;

    while (start < max) {
        let card = <VerticalCard key={start} data={stills[start]} />;
        start++;

        yield card;
    }
}

export default function Home(): JSX.Element {
    gradualOpacity();

    const videoCards = [...cardGenerator()];

    const fullStills = [...verticalGenerator()];
    const halfPoint = Math.ceil(fullStills.length / 2);

    const leftStills = fullStills.slice(0, halfPoint);
    const rightStills = fullStills.slice(-halfPoint);

    return (
        <main className="View Home--wrapper">
            <TilesGrid
                tiles={{
                    middle: videoCards,
                    left: leftStills,
                    right: rightStills,
                }}
            />
        </main>
    );
}
