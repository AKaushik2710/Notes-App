// Whole App'sFunctionality would be stored here
import Div from "./Div";
import Para from "./Para";
import Span from "./Span";
import { Input, Text } from "./Modifier";
import { useReducer, useState } from "react";

function reducer(state, action){
    switch (action.type){
        case "maker" :
            console.log(action.handle)
            action.handle()
            return [];
        case "delete" :
            return [];
        case "change" : 
            return [];
        default : {
            throw new Error("Something is Wrong!!!");
        }
    }
}

function useFunctionality(){
    const [isChanging, setIsChanging] = useState({hover : false, r_empty : false});
    const [noteList, dispatch] = useReducer(reducer, []);

    function handleChanging(enter=false, maker=false){
        if(!maker && !maker){
            enter ? setIsChanging({...isChanging, hover : true}) : setIsChanging({...isChanging, hover : false});
        }
        else{
            enter ? setIsChanging({...isChanging, hover : true}) : setIsChanging({...isChanging, hover : false});
            dispatch({type : "maker", handle : handleEmptiness});
        }
    }

    function handleEmptiness(save=false){
        !save ? setIsChanging({...isChanging, r_empty : true}) : setIsChanging({...isChanging, r_empty : false});
    }
    return {isChanging, handleChanging, noteList, dispatch, handleEmptiness}
}

export {Div, Para, Span, Input, Text, useFunctionality};