import { Div, Para, Span } from './Functionality';

export default function Left_Container({functionality}){
    /*
    isChanging => HOVER SPECIFYING OBJECT
    handleChanging => HOVER MANIPULATION FUNCTION
    noteList => LIST OF NOTES BEING ADDED
    */
    const {isChanging, handleChanging, noteList, handleDeletion, handleEmptiness } = functionality;
    return (
        <>
        <Div id="l_cont" cn="l_cont"> {/* Left Container */}
            <Div id="presenter"> {/* Creation DIV */}
                <Para id="hamburger">&#9776;</Para>
                <Para>{"Notes"}</Para>{/* Note Annoter */}
                <Span id="note_maker" handleChanging={handleChanging} >&#9998;</Span> {/* Note Making Pen */}
                {isChanging.hover ? (<Div id="note_creator" cn="note_creator" handleChanging={handleChanging}>
                    <Span id="file_maker" clickHandler={()=>handleChanging(false, true)} handleChanging={handleChanging}>{"New File"}</Span>
                    <hr></hr>
                    <Span id="folder_maker" clickHandler={()=>handleChanging(false)} handleChanging={handleChanging}>{"New Folder"}</Span>
                </Div>) : null} {/* Displaying File Creator & Folder Creator Option */}
            </Div>
            <Div id="displayer" cn="displayer"> {/* Notes Displaying Div */}
                {noteList.map(note=>{
                    return <><Para cn="note" clickHandler={()=>handleEmptiness(true,note)} id={"p"+note.id}>{note.para}<Span cn="dustbin" clickHandler={(e)=>{e.stopPropagation();handleDeletion(note.id);}}>&#128465;</Span></Para></>
                })}
            </Div>
        </Div>
        </>
    )
}