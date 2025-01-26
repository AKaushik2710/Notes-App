import {Div, Input, Text, Span} from './Functionality';

export default function Right_Container(){
    return (
        <>
        <Div id="r_cont">
            <Div id="inp_mod">
                <Input cn="inp"></Input>
                <Span id="saver" >&#10003;</Span>
            </Div>
            <Div id="text_mod">
                <Text cn="text" />
            </Div>
        </Div>
        </>
    )
}