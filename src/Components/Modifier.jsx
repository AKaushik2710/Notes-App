
function Input(props){
    /*
    cn => CLASSNAME FOR INPUT FIELD
    myRef => INPUT REF
    */
    const {cn, myRef, type="text", value} = props;
    return <input className={cn} ref={myRef} value={value} type={type} onChange={(e)=> myRef.current.value= e.target.value} maxLength={20}></input>
}

function Text(props){
    /*
    cn => CLASSNAME FOR INPUT FIELD
    myRef => INPUT REF
    */
    const {cn, myRef} = props;
    return <textarea className={cn} onChange={(e)=> myRef.current.value= e.target.value} ref={myRef} maxLength={1500}></textarea>
}

export {Input, Text}