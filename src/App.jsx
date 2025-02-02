// import { useState } from 'react'
import Div from './Components/Div'
import Left_Container from './Components/Left_Container';
import Right_Container from './Components/Right_Container';
import { useFunctionality } from './Components/Functionality';
import './App.css'
import Chooser from './Components/Folder';

function App() {
  /*
    isChanging => HOVER SPECIFYING OBJECT
    handleChanging => HOVER MANIPULATION FUNCTION
    noteList => LIST OF NOTES BEING ADDED
    handleEmptiness => DISPLAY CHANGING FUNCTION OF RIGHT DIV CHILDREN
    inputRef => REF FOR INPUT FIELD
    textRef => REF FOR TEXTAREA
    */
  const {isChanging, choices, noteList, inputRef, textRef, handleChanging, handleEmptiness,handleDeletion, handleChoices} = useFunctionality();
  const functionality = {isChanging, choices, handleChanging, noteList,handleDeletion, handleEmptiness, handleChoices, inputRef, textRef};
  return (
    <>
      <Div id="parent" cn="parent" clickHandler={()=>handleChoices(false, choices.files)} >
        {choices.choice ? <Chooser functionality={functionality}></Chooser> : null}
        <Left_Container functionality={functionality} />
        <Right_Container functionality={functionality} />
      </Div>
    </>
  )
}

export default App
