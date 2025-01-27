// Parent Divs, Child Divs, All are stored here

export default function Div(props){
    const {id, cn, children} = props;
    return <div id={id} className={cn}>{children}</div>
}