import {Div, Input, Text, Span} from './Functionality';

export default function Right_Container({functionality}){
    /*
    isChanging => HOVER SPECIFYING OBJECT
    handleEmptiness => DISPLAY CHANGING FUNCTION OF RIGHT DIV CHILDREN
    inputRef => REF FOR INPUT FIELD
    textRef => REF FOR TEXTAREA
    */
    const {isChanging,choices, handleEmptiness,inputRef, textRef, handleFolderDisplay} = functionality;
    return (
        <>
        <Div id="r_cont" cn="r_cont">
            {(choices.files || choices.folders) ? ((isChanging.r_empty) ? (<><Div id="inp_mod" cn="inp_mod">
                <Input cn="inp" myRef={inputRef} ></Input>
                <Span id="saver" clickHandler={() => handleEmptiness(true, [inputRef.current.value, textRef.current.value])} >&#10003;</Span>
            </Div> 
            <Div id="text_mod" cn="text_mod">
                <Text cn="text" myRef={textRef} />
            </Div></>) : <p style={{textAlign : "center", color : "rgba(255, 252, 252, 0.3)", marginTop : "30%"}}>{"Your Notes Will Appear Here"}</p>) : ((isChanging.r_empty) ? (<>
            <Div id="inp_fol" cn="inp_mod">
            <Input cn="inp" myRef={inputRef} ></Input>
            <Span id="saver" clickHandler={() => handleFolderDisplay(true)} >&#10003;</Span>
            </Div>
            <Div id="text_fol" cn="text_mod">
            </Div>
            </>) : null)}
        </Div>
        </>
    )
}