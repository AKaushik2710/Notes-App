// Parent Divs, Child Divs, All are stored here

export default function Div(props){
    const {id, children} = props;
    return <div id={id}>{children}</div>
}