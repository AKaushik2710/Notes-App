// Parent Divs, Child Divs, All are stored here

export default function Div(props){
    /*
    id => ID FOR ELEMENT
    cn => CLASSNAME FOR ELEMENT
    children => CHILD ELEMENT OR INFORMATION
    */
    const {id, cn, children, handleChanging} = props;
    return <div id={id} className={cn} onMouseEnter={()=>handleChanging(true)} onMouseLeave={()=> handleChanging(false)}>{children}</div>
}