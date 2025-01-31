
export default function Para(props){
    /*
    id => ID FOR ELEMENT
    children => CHILD ELEMENT OR INFORMATION
    */
    const {id, children, clickHandler} = props;
    return <p id={id} onClick={clickHandler}>{children}</p>
}