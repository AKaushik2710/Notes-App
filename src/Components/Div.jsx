// Parent Divs, Child Divs, All are stored here

export default function Div(props){
    /*
    id => ID FOR ELEMENT
    cn => CLASSNAME FOR ELEMENT
    children => CHILD ELEMENT OR INFORMATION
    clickHandler => CLICK FUNCTIONALITY
    */
    const {id, cn, children, handleChanging, clickHandler} = props;
    return <div id={id} className={cn} onClick={clickHandler} onMouseEnter={()=>handleChanging(true)} onMouseLeave={()=> handleChanging(false)}>{children}</div>
}