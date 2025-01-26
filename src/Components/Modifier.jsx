
function Input(props){
    const {cn, children} = props;
    return <input className={cn} maxLength={20}>{children}</input>
}

function Text(props){
    const {cn, children} = props;
    return <textarea className={cn} maxLength={1500}>{children}</textarea>
}

export {Input, Text}