
export default function Span(props){
    /*
    id => ID OF ELEMENT
    children => ELEMENT OR INFO BEING HELD BY THEM
    handleChanging => HOVER FUNCTIONALITY
    clickHandler => CLICK FUNTIONALITY
    */
    const {id, children, cn, handleChanging, clickHandler} = props;
    return <span id={id} className={cn} onClick={clickHandler} onMouseEnter={()=>handleChanging(true)} onMouseLeave={()=> handleChanging(false)}>{children}</span>
}
