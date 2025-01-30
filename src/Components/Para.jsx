
export default function Para(props){
    /*
    id => ID FOR ELEMENT
    children => CHILD ELEMENT OR INFORMATION
    */
    const {id, children} = props;
    return <p id={id}>{children}</p>
}