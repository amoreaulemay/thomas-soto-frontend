/**
 * The props data structure for `TilesGrid`.
 * 
 * @param src The source URI for the image.
 * @param alt A short fallback description for the image.
 * @param description A full description for the image. If none is provided defaults to the alt description.
 */
export interface ImageModelProps {
    src: string;
    alt: string;
    description?: string;
}

/**
 * Data model for a vertical image in the `TilesGrid`.
 */
export default class ImageModel {
    /** @internal */
    private _src: string;

    /** @internal */
    private _alt: string;

    /** @internal */
    private _description: string;

    /**
     * Data model for a vertical image in the `TilesGrid`.
     * 
     * @param props See `ImageModelProps`
     */
    constructor(props: ImageModelProps) {
        this._src = props.src;
        this._alt = props.alt;
        this._description = props.description ?? props.alt;
    }

    /**
     * @returns The image source uri.
     */
    public get src(): string { return this._src; }

    /**
     * @returns The image alt description.
     */
    public get alt(): string { return this._alt; }

    /**
     * @returns The image full description.
     */
    public get description(): string { return this._description; }
}