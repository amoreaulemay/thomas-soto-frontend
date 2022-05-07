import ImageModel from "../models/ImageModel";

import bts1 from "../assets/images/stills/bts-1.webp";
import bts2 from "../assets/images/stills/bts-2.webp";
import bts3 from "../assets/images/stills/bts-3.webp";
import bts4 from "../assets/images/stills/bts-4.webp";

export const stills: ImageModel[] = [
    new ImageModel({ src: bts1, alt: 'Sample Alt' }),
    new ImageModel({ src: bts2, alt: 'Sample Alt' }),
    new ImageModel({ src: bts3, alt: 'Sample Alt' }),
    new ImageModel({ src: bts4, alt: 'Sample Alt' }),
];