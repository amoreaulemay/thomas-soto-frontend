import "./Link.css";

export default function Link(props: { children: string }): JSX.Element {
    return (
        <span className="Link--wrapper" role="link">
            {props.children}
        </span>
    );
}
