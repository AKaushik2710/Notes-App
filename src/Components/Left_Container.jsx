import {Div, Para, Span, useFunctionality} from './Functionality';

export default function Left_Container({functionality}){
    const [isChanging, handleChanging, noteList, dispatch] = functionality;
    return (
        <>
        <Div id="l_cont" cn="l_cont"> {/* Left Container */}
            <Div id="presenter"> {/* Creation DIV */}
                <Para>{"Notes"}</Para>
                <Span id="note_maker" handleChanging={handleChanging} >&#9998;</Span>
                {isChanging.hover ? (<Div id="note_creator" cn="note_creator">
                    <Span id="file_maker" clickHandler={()=>handleChanging(false, true)} handleChanging={handleChanging}>{"New File"}</Span>
                    <Span id="folder_maker" clickHandler={()=>handleChanging(false)} handleChanging={handleChanging}>{"New Folder"}</Span>
                </Div>) : null}
            </Div>
            <Div id="displayer" cn="displayer"></Div>
        </Div>
        </>
    )
}