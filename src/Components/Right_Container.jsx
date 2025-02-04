import {Div, Input, Text, Span, Para} from './Functionality';

export default function Right_Container({functionality}){
    /*
    isChanging => HOVER SPECIFYING OBJECT
    handleEmptiness => DISPLAY CHANGING FUNCTION OF RIGHT DIV CHILDREN
    inputRef => REF FOR INPUT FIELD
    textRef => REF FOR TEXTAREA
    */
    const {isChanging,choices,noteList,folders=[], handleEmptiness,inputRef, textRef, handleFolderDisplay, handleChoices} = functionality;
    return (
        <>
        <Div id="r_cont" cn="r_cont">
            {(choices.files) ? ((isChanging.r_empty) ? (<><Div id="inp_mod" cn="inp_mod"> {/* Right Container Display For Notes */}
                <Input cn="inp" myRef={inputRef} ></Input>
                <Span id="saver" clickHandler={() => handleEmptiness(true, [inputRef.current.value, textRef.current.value])} >&#10003;</Span>
            </Div> 
            <Div id="text_mod" cn="text_mod">
                <Text cn="text" myRef={textRef} />
            </Div></>) : <p style={{textAlign : "center", color : "rgba(255, 252, 252, 0.3)", marginTop : "30%"}}>{"Your Notes Will Appear Here"}</p>) : ((isChanging.r_empty) ? (<>
            <Div id="inp_fol" cn="inp_mod"> {/* Right Container Display For Folders */}
            <Input cn="inp" myRef={inputRef} ></Input>
            <Span id="saver" clickHandler={() => handleFolderDisplay(true)} >&#10003;</Span>
            </Div>
            <Div id="text_fol" cn="text_mod">{/* Folderated Notes Display */}
                {!choices.folder_files ?(<>{/*folders.map(folder =>{
                    folder.files.map(file =>{
                        return <Para id={folder.id} cn="note" key={folder.id}>{file}<Span cn="dustbin" clickHandler={(e)=>{e.stopPropagation();handleFolderDeletion(folder.id);}}>&#128465;</Span></ Para>
                    })
                }) */}
                <Para id="add" clickHandler={()=> handleChoices(true, choices.files, true)}>&#43;</Para></>) : (
                    <Div>
                        <Para>
                            <Span>
                                &#8592;
                            </Span>
                            <Span id="file_saver">
                                &#10003;
                            </Span>
                        </Para>
                        {noteList.map(note=>{
                        return <><Para cn="note">{note.para}</Para></>
                        })}
                    </Div>
                ) }
            </Div>
            </>) : null)}
        </Div>
        </>
    )
}