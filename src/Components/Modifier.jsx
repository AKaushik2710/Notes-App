
function Input(props){
    const {cn} = props;
    return <input className={cn} maxLength={20}></input>
}

function Text(props){
    const {cn} = props;
    return <textarea className={cn} maxLength={1500}></textarea>
}

export {Input, Text}