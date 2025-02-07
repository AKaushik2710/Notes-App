import {Div, Input, Text, Span, Para} from './Functionality';

export default function Right_Container({functionality}){
    /*
    isChanging => HOVER SPECIFYING OBJECT
    handleEmptiness => DISPLAY CHANGING FUNCTION OF RIGHT DIV CHILDREN
    inputRef => REF FOR INPUT FIELD
    textRef => REF FOR TEXTAREA
    */
    const {isChanging,choices,noteList,folders=[],folder_files, handleEmptiness,inputRef, textRef, handleFolderDisplay, handleChoices,handleFileAddition} = functionality;
    // let f_files= [...noteList];
    // f_files.map(f => f.checked = false);
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
                {!choices.folder_files ?<>{choices.change.val ? (folders.map(folder =>{
                    folder.files.map(file =>{
                        return <Para id={folder.id} cn="note" key={folder.id}>{file}<Span cn="dustbin" clickHandler={(e)=>{e.stopPropagation();handleFolderDeletion(folder.id);}}>&#128465;</Span></ Para>
                    })
                })):(folder_files.map(file => {
                    if(file.checked){
                        return <Para id={file.id} key={file.id}>{file.para}</Para>
                    }
                }))}<Para id="add" clickHandler={()=> handleFileAddition({type : "display", val : true})}>&#43;</Para></> : (
                    <Div>
                        <Para cn="note">
                            <Span clickHandler={()=>{handleFileAddition({type : "back", val : true})}}>
                                &#8592;
                            </Span>
                            <Span id="file_saver" clickHandler={()=>handleFileAddition({type : "save", val :false})}> {/* file adder */}
                                &#10003;
                            </Span>
                        </Para>
                        {folder_files.map(note=>{
                        return <>
                        <label htmlFor={`note-${note.id}`} className='note' style={{display: 'block', position : 'relative'}} >{note.para}<input type="checkbox" checked={note.checked} id={`note-${note.id}`} onChange={(e)=> handleFileAddition({type : "add", val : {id : note.id, check : e.target.checked}})} style={{position : 'absolute', right: 0, backgroundColor : "inherit"}}/></label>
                      </>
                        })}
                    </Div>
                ) }
            </Div>
            </>) : null)}
        </Div>
        </>
    )
}