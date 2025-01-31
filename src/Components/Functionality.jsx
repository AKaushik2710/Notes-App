// Whole App'sFunctionality would be stored here
import Div from "./Div";
import Para from "./Para";
import Span from "./Span";
import { Input, Text } from "./Modifier";
import { useReducer, useState, useRef, useEffect } from "react";
// import { resolve } from "path";

function reducer(noteList, action){ // REDUCER FUNCTION FOR useReducer HOOK
    switch (action.type){
        case "maker" :
            return [...noteList, action.values];
        case "delete" :
            // const newState = 
            return noteList.filter(note=> note.id !== action.taskId);
        case "change" : 
        noteList.map(note => {
            if(note.id === action.values.id){
                // action.refSetter(note.input, note.text)
                // action.inp.current.value = 
                // console.log("Hey")
            }
        })
            return noteList;
        default : {
            throw new Error("Something is Wrong!!!");
        }
    }
}

function useFunctionality(){
    const initialArr = []; // INITIAL ARRAY BEING ASSIGNED TO REDUCER HOOK
    const [isChanging, setIsChanging] = useState({hover : false, r_empty : false, add : false, change :  {val : false, inp: '', txt :''}}); // STATE FOR HOVERING, RIGHT CONTAINER'S CHILDREN DISPLAY & NEW NOTE ADDITION FUNCTIONALITY
    const [noteList, dispatch] = useReducer(reducer, initialArr); // REDUCER HOOK FOR ADDITION, CHANGE & DELETION OF NOTES
    const inputRef = useRef(''); // REF FOR INPUT FIELD
    const textRef = useRef(''); // REF FOR TEXT AREA
    // let vg;
    useEffect(()=>{
        const Prom = new Promise((resolve, reject )=>{
            if(isChanging.change){
                resolve("Hello");
                // inputRef.current.value = values.input;
                // textRef.current.value = values.text;
            }
        })
        Prom.then((msg)=>{
            inputRef.current.value = isChanging.change.inp;
            textRef.current.value = isChanging.change.txt;
            console.log(msg)
        })
    }, [isChanging.change])

    // function updateRefs(inp, txt){
    //     inputRef
    // }

    function handleChanging(enter=false, maker=false){ // HOVER FUNCTIONALITY CHANGER
        if(!maker){ // FOR HOVER ONLY
            enter ? setIsChanging({...isChanging, hover : true}) : setIsChanging({...isChanging, hover : false});
        }
        else{ // FOR CREATION
            setIsChanging({...isChanging, hover : false});
            handleEmptiness();
        }
    }

    function idGenerator(){ // NOTE'S ID GENERATOR
        const arr = [...noteList];
        function isEmpty(){
            let result = '';
            for(let r=0; r<=arr.length; r++){
                result = arr[r+1] - arr[r] === 1 ? arr[r] : NaN
            }
            return result;
        }
        let prev = isEmpty();
        const na = arr.length ===0 ? 1 : arr[arr.length-1].id+1 ;
        return Object.is(prev,NaN) ? na : prev+=1
    }

    function paraGenerator(inp, txt){ // GENERATING NOTES ENTRY FOR DISPLAY
        let para ;
                switch(true){
                    case (inp && txt !== '' ) :
                        para = inp.slice(0,10);
                    break;
                    case ((inp || txt) !== '' ) :
                        para = inp !== '' ? inp.slice(0,10) : txt.slice(0,10);
                    break;
                    default : 
                        para = null;
                    break;
                }
                console.log(para,inp,txt)
                return para ;
    }

    function handleEmptiness(save=false, values){ // RIGHT CONT'S CHILDREN DISPLAY CHANGER
        if(!save){ // FOR DISPLAY
            setIsChanging({...isChanging, r_empty : true, add : true});
        }
        else{ // FOR ADDITION UPON SAVE CLICKING
            // setIsChanging({...isChanging, r_empty : false, add : false});
            if(isChanging.add){ // NEW NOTE ADDITION 
                setIsChanging({...isChanging, r_empty : false, add : false});
                console.log(noteList);
                const id_num = idGenerator();
                const  para = paraGenerator(inputRef.current.value, textRef.current.value);
                para !== null ? dispatch({type : "maker", values : {id : id_num, input : inputRef.current.value, text: textRef.current.value, para : para}}) : console.log(null)
            }else{ // PREVIOUS NOTE CHANGE
                setIsChanging({...isChanging, r_empty : true, change : {inp : values.input, txt : values.text, val : true }})
                vg = {inp:values.input, txt :values.text};
                // dispatch({type : "change", values : values, inp : inputRef, txt : textRef})
                // function refSetter(inp,txt){
                //     console.log(inp,txt);
                //     // if(inputRef.current){
                //         inputRef.current.value = inp;
                //     // }
                //     textRef.current.value = txt;
                // }
            }
        }
    }
    function handleDeletion(taskId){
        console.log(taskId)
        dispatch({type : "delete", taskId : taskId});
    }
    return {isChanging, handleChanging, noteList, dispatch, handleEmptiness, handleDeletion, inputRef, textRef}
}

export {Div, Para, Span, Input, Text, useFunctionality};