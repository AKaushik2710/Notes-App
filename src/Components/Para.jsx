
export default function Para(props){
    /*
    id => ID FOR ELEMENT
    children => CHILD ELEMENT OR INFORMATION
    */
    const {id, children, clickHandler, cn} = props;
    return <p id={id} className={cn} onClick={clickHandler}>{children}</p>
}