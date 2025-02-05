// Parent Divs, Child Divs, All are stored here

export default function Div(props){
    /*
    id => ID FOR ELEMENT
    cn => CLASSNAME FOR ELEMENT
    children => CHILD ELEMENT OR INFORMATION
    clickHandler => CLICK FUNCTIONALITY
    */
    const {id, cn, children, handleOnChanging, handleOffChanging, clickHandler} = props;
    return <div id={id} className={cn} onClick={clickHandler} onMouseEnter={handleOnChanging} onMouseLeave={handleOffChanging}>{children}</div>
}