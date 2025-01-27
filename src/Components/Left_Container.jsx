import {Div, Para, Span, Functionality} from './Functionality';

export default function Left_Container(){
    return (
        <>
        <Div id="l_cont" cn="l_cont">
            <Para id="presenter">
                {"Notes"}
                <Span id="note_maker">&#9998;</Span>
            </Para>
            <Div id="displayer" cn="displayer"></Div>
        </Div>
        </>
    )
}