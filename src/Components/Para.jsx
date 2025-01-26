
export default function Para(props){
    const {id, children} = props;
    return <p id={id}>{children}</p>
}