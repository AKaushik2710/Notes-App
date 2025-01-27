
export default function Span(props){
    const {id, children, handleChanging, clickHandler} = props;
    return <span id={id} onClick={clickHandler} onMouseEnter={()=>handleChanging(true)} onMouseLeave={()=> handleChanging(false)}>{children}</span>
}