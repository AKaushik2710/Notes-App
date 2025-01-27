// Whole App'sFunctionality would be stored here
import Div from "./Div";
import Para from "./Para";
import Span from "./Span";
import { Input, Text } from "./Modifier";
import { useReducer, useState } from "react";

function reducer(state, action){
    switch (action.type){
        case "delete" :
            return [];
        case "change" : 
            return [];
        default : {
            throw new Error("Something is Wrong!!!");
        }
    }
}

function Functionality(){
    const [isHovered, setIsHovered] = useState(false);
    const [noteList, dispatch] = useReducer(reducer, []);
    return {isHovered, setIsHovered, noteList, dispatch}

}

export {Div, Para, Span, Input, Text, Functionality}