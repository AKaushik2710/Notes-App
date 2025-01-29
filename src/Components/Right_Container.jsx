import {Div, Input, Text, Span} from './Functionality';

export default function Right_Container({functionality}){
    const [isChanging, handleChanging, noteList, dispatch, handleEmptiness,inputRef, textRef] = functionality;
    return (
        <>
        <Div id="r_cont" cn="r_cont">
            {console.log("Rendering")}
            {(isChanging.r_empty) ? (<><Div id="inp_mod" cn="inp_mod">
                <Input cn="inp" myRef={inputRef} ></Input>
                <Span id="saver" clickHandler={() => handleEmptiness(true, [inputRef.current.value, textRef.current.value])} >&#10003;</Span>
            </Div>
            <Div id="text_mod" cn="text_mod">
                <Text cn="text" myRef={textRef} />
            </Div>{console.log("sdft")} </>) : (console.log("not"))}
        </Div>
        </>
    )
}