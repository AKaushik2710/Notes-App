import { Div, Para, Span } from './Functionality';

export default function Left_Container({functionality}){
    /*
    isChanging => HOVER SPECIFYING OBJECT
    handleChanging => HOVER MANIPULATION FUNCTION
    noteList => LIST OF NOTES BEING ADDED
    */
    const {isChanging,choices, noteList, folders, handleChanging, handleChoices, handleDeletion, handleEmptiness, handleFolderDisplay, handleFolderDeletion} = functionality;
    return (
        <>
        <Div id="l_cont" cn="l_cont"> {/* Left Container */}
            <Div id="presenter"> {/* Creation DIV */}
                <Para id="hamburger" clickHandler={(e)=>{
                    e.stopPropagation();
                    handleChoices(true,choices.files);
                    }
                }>&#9776;</Para> {/* Opening Swapper For Folders */}
                <Para>{choices.files ? "Notes" : "Folders"} </Para>{/* Note Annoter */}
                <Span id="note_maker" clickHandler={()=> choices.files ? handleChanging(true) : handleFolderDisplay()} handleOnChanging={()=>handleChanging(true)} handleOffChanging={()=>handleChanging(false)} >&#9998;</Span> {/* Note Making Pen */}
                {choices.files ? (isChanging.hover ? (<Div id="note_creator" cn="note_creator" handleOnChanging={()=>handleChanging(true)} handleOffChanging={()=>handleChanging(false)}>
                    <Span id="file_maker" clickHandler={()=>handleChanging(false, true)}>{"New File"}</Span>
                    <hr></hr>
                    <Span id="folder_maker" clickHandler={()=>handleChanging(false)}>{"New Folder"}</Span>
                </Div>) : null) : null} {/* Displaying File Creator & Folder Creator Option */}
            </Div>
            <Div id="displayer" cn="displayer"> {/* Notes Displaying Div */}
                {choices.files ? (noteList.map(note=>{
                    return <><Para cn="note" key={"p"+note.id} clickHandler={()=>handleEmptiness(true,note)} id={"p"+note.id}>{note.para}<Span cn="dustbin" clickHandler={(e)=>{e.stopPropagation();handleDeletion(note.id);}}>&#128465;</Span></Para></> // Notes Display
                })) : (folders.map(folder => {
                    return <><Para cn="note" key={"fol" + folder.id} clickHandler={()=>handleFolderDisplay(false, true, folder)} id={folder.id}>{folder.para}<Span cn="dustbin" clickHandler={(e)=>{e.stopPropagation();handleFolderDeletion(folder.id);}}>&#128465;</Span></Para></> // Folders Display 
                }))}
            </Div>
        </Div>
        </>
    )
}