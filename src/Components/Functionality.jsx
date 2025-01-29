// Whole App'sFunctionality would be stored here
import Div from "./Div";
import Para from "./Para";
import Span from "./Span";
import { Input, Text } from "./Modifier";
import { useReducer, useState, useRef } from "react";

function reducer(noteList, action){
    switch (action.type){
        case "maker" :
            console.log([...noteList, action.values]);
            return [...noteList, action.values];
        case "delete" :
            return [];
        case "change" : 
            return console.log([...noteList,action.values, "change"]);
        default : {
            throw new Error("Something is Wrong!!!");
        }
    }
}

function useFunctionality(){
    const initialArr = [];
    const [isChanging, setIsChanging] = useState({hover : false, r_empty : false, add : false});
    const [noteList, dispatch] = useReducer(reducer, initialArr);
    const inputRef = useRef('');
    const textRef = useRef('');

    function handleChanging(enter=false, maker=false){
        if(!maker){
            enter ? setIsChanging({...isChanging, hover : true}) : setIsChanging({...isChanging, hover : false});
        }
        else{
            setIsChanging({...isChanging, hover : false});
            handleEmptiness();
        }
    }

    function idGenerator(){
        const arr = [...noteList];
        function isEmpty(){
            let result = '';
            for(let r=0; r<=arr.length; r++){
                result = arr[r+1] - arr[r] === 1 ? arr[r] : NaN
            }
            return result;
        }
        let prev = isEmpty();
        const na = arr.length ===0 ? 1 : arr[arr.length-1].id+1
        return Object.is(prev,NaN) ? na : prev+=1
    }

    function handleEmptiness(save=false, values){
        if(!save){
            setIsChanging({...isChanging, r_empty : true, add : true});
        }
        else{
            setIsChanging({...isChanging, r_empty : false, add : false});
            if(isChanging.add){
                console.log(noteList);
                const id_num = idGenerator();
                dispatch({type : "maker", values : {id : id_num, input : inputRef.current.value, text: textRef.current.value}})
            }else{
                dispatch({type : "change", values : values})
            }
        }
    }
    return {isChanging, handleChanging, noteList, dispatch, handleEmptiness, inputRef, textRef}
}

export {Div, Para, Span, Input, Text, useFunctionality};