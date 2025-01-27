
export default function Span(props){
    const {id, children} = props;
    return <span id={id} onClick={clickHandler} onMouseEnter={handleHover}>{children}</span>
}