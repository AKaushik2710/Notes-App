// Whole App'sFunctionality would be stored here
import Div from "./Div";
import Para from "./Para";
import Span from "./Span";
import { Input, Text } from "./Modifier";
import { useReducer, useState, useRef, useEffect, act } from "react";

function reducer(noteList, action){ // REDUCER FUNCTION FOR useReducer HOOK
    switch (action.type){
        case "maker" :
            return [...noteList, action.values];
        case "delete" :
            return noteList.filter(note=> note.id !== action.taskId);
        case "change" : 
        noteList.map(note => {
            if(note.id === action.values.id && action.para !== null){
                note.input = action.values.input;
                note.text = action.values.text;
                note.para = action.values.para;
            }
        })
        console.log(noteList);
            return noteList;
        default : {
            throw new Error("Something is Wrong!!!");
        }
    }
}

function reducerFolder(folders, action){
    switch(action.type){
        case "add" :
            return [...folders, action.values]
        case "delete" :
            return folders.filter(folder => folder.id !== action.id);
        case "change" :
            folders.map(folder =>{
                if(folder.id === action.values.id){
                    folder.para = action.values.para;
                }
            })
            return folders;
        case "file_change" : 
            folders.map(folder => {
                if(folder.id === action.id){
                    folder.files = [...folder.files, action.files]
                }
            })
            return folders;
    }
}
function useFunctionality(){
    const initialArr = []; // INITIAL ARRAY BEING ASSIGNED TO REDUCER HOOK
    const [choices, setChoices] = useState({files : true, folder_files : false, choice : false, change : {val : false, id : '', para : '', files : []}});
    const [folders, dispatchFolders] = useReducer(reducerFolder, initialArr);
    const [isChanging, setIsChanging] = useState({hover : false, r_empty : false, add : false, change :  {val : false, inp: '', txt :'', id : null}}); // STATE FOR HOVERING, RIGHT CONTAINER'S CHILDREN DISPLAY & NEW NOTE ADDITION FUNCTIONALITY
    const [noteList, dispatch] = useReducer(reducer, initialArr); // REDUCER HOOK FOR ADDITION, CHANGE & DELETION OF NOTES
    const [folder_files, setFolderFiles] = useState([])
    const inputRef = useRef(''); // REF FOR INPUT FIELD
    const textRef = useRef(''); // REF FOR TEXT AREA
    let files;
    // let vg;
    useEffect(()=>{console.log(folder_files)})
    useEffect(()=>{
        if(isChanging.change.val){
            inputRef.current.value = isChanging.change.inp;
            textRef.current.value = isChanging.change.txt;
        }
    }, [isChanging.change])
    useEffect(()=>{
        if(choices.change.val){
            inputRef.current.value = choices.change.para;
        }
    }, [choices.change])
    function handleChanging(enter=false, maker=false){ // HOVER FUNCTIONALITY CHANGER
        if(!maker){ // FOR HOVER ONLY
            enter ? setIsChanging({...isChanging, hover : true}) : setIsChanging({...isChanging, hover : false});
        }
        else{ // FOR CREATION
            setIsChanging({...isChanging, hover : false});
            handleEmptiness();
        }
    }

    function idGenerator(notes){ // NOTE'S ID GENERATOR
        const arr = [...notes];
        const result = arr.length !== 0 ? arr[arr.length -1].id + 1 : 1
        return result;
    }

    function paraGenerator(inp, txt){ // GENERATING NOTES ENTRY FOR DISPLAY
        let para ;
                switch(true){
                    case (inp && txt !== '' ) :
                        para = inp.slice(0,15);
                    break;
                    case ((inp || txt) !== '' ) :
                        para = inp !== '' ? inp.slice(0,15) : txt.slice(0,15);
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
                const id_num = idGenerator(noteList);
                const  para = paraGenerator(inputRef.current.value, textRef.current.value);
                para !== null ? dispatch({type : "maker", values : {id : id_num, input : inputRef.current.value, text: textRef.current.value, para : para}}) : console.log(null)
            }else{ // PREVIOUS NOTE CHANGE
                if(!isChanging.change.val){
                    setIsChanging({...isChanging, r_empty : true, change : {inp : values.input, txt : values.text, val : true, id : values.id}});
                }
                else{
                    setIsChanging({...isChanging, r_empty : false, change : {inp : '', txt : '', val : false, id : null}});
                    const  para = paraGenerator(inputRef.current.value, textRef.current.value);
                    dispatch({type : "change", values : {id : isChanging.change.id, input : inputRef.current.value, text : textRef.current.value, para : para}});
                }
            }
        }
    }

    function handleDeletion(taskId){
        if(taskId === isChanging.change.id){
            setIsChanging({...isChanging, r_empty : false, change : {inp : '', txt : '', val : false, id : null}});
        }
        dispatch({type : "delete", taskId : taskId});
    }
    
    function handleFolderDisplay(save=false, changer=false, value){
        if(changer){
            setIsChanging({...isChanging, r_empty : true});
            setChoices({...choices, change : {val : true, id : value.id, para : value.para, files : [value.folder_files]}})
        }
        else{
            if(!save){
                const idFold = idGenerator(folders);
                setIsChanging({...isChanging, r_empty : true});
                setChoices({...choices, change : {val : false, id : idFold, para :  '', files : []}})
            }
            else{
                setIsChanging({...isChanging, r_empty : false});
                const para = paraGenerator(inputRef.current.value, '');
                if(choices.change.val){
                    setChoices({...choices, change : {val : false, id : '', para : ''}});
                    dispatchFolders({type : "change", values : {id : choices.change.id, para : inputRef.current.value}}) 
                }
                else{
                    dispatchFolders({type : "add", values : {id : "fold"+choices.change.id, para : para, files : files}});
                }

            }
        }
    }
    
    function handleFileAddition(obj){
        switch (obj.type){
            case "display" : 
                setChoices({...choices, folder_files : obj.val})
                break;
            case "add" :
                // const folderId = obj.val.id;
                // const check = obj.val.check;
                // console.log("okhyui")
                // setFolderFiles(folder_files.map(file =>{
                //     if(file.id === obj.val.id){
                //         console.log("got it",file.checked)
                //         return {...file, checked : obj.val.check};
                //     }else{
                //         return file;
                //     }
                // }))
                // break;
                setFolderFiles(prevFolderFiles => prevFolderFiles.map(file => {
                    if (file.id === obj.val.id) {
                      console.log("got it", file.checked);
                      return { ...file, checked: obj.val.check };
                    } else {
                      return file;
                    }
                  }));
                  break;
            case "save" : 
                setChoices({...choices, folder_files : obj.val})
                dispatchFolders({type : "file_change", id : choices.change.id, files : folder_files.filter(file=> file.checked)});
                setFolderFiles(folder_files.map(file => {return {...file, checked : false }}))
        }
    }
    function handleFolderDeletion(taskId){ 
        dispatchFolders({type : "delete", id : taskId});
    }
    function handleChoices(choiceVal = true, files=choices.files) {
        choices.files === files ? null : setIsChanging({...isChanging, r_empty : false});
        setChoices(prevChoices => ({
            ...prevChoices,
            files: files, // Directly set based on files argument
            choice: choiceVal ? !prevChoices.choice : false, // Update choice accordingly
        }));
        const arr = noteList.map(note=> note.checked = false)
        setFolderFiles(noteList.map(note=> {return {...note, checked : false}}))
    }
    
    return {isChanging, choices, inputRef, textRef, noteList, folders,folder_files, handleChanging, dispatch, handleEmptiness, handleDeletion, handleChoices, handleFolderDisplay,handleFolderDeletion, handleFileAddition}
}

export {Div, Para, Span, Input, Text, useFunctionality};