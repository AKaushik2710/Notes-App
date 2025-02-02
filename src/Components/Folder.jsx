import {Div, Para} from './Functionality'
export default function Chooser({functionality}){
    // handleChoices => Swapping Between Notes & Folders
    const {handleChoices} = functionality;
    return <>
    <Div id="chooser" clickHandler={(e)=> e.stopPropagation()}>
        <Para clickHandler={()=>handleChoices(true, true)}>{"Notes"}</Para>
        <Para clickHandler={()=>handleChoices(true, false)}>{"Folders"}</Para>
    </Div>
    </>
}