import { Props } from "./plus";

function Arrow(props: Props) {
    return (
        <svg aria-hidden="true" height={props.height} color={props.color} focusable="false" data-prefix="fas" data-icon="long-arrow-alt-right" className="svg-inline--fa fa-long-arrow-alt-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path></svg>
    )
}

export default Arrow;