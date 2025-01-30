// import { useState } from 'react'
import Div from './Components/Div'
import Left_Container from './Components/Left_Container';
import Right_Container from './Components/Right_Container';
import { useFunctionality } from './Components/Functionality';
import './App.css'

function App() {
  /*
    isChanging => HOVER SPECIFYING OBJECT
    handleChanging => HOVER MANIPULATION FUNCTION
    noteList => LIST OF NOTES BEING ADDED
    handleEmptiness => DISPLAY CHANGING FUNCTION OF RIGHT DIV CHILDREN
    inputRef => REF FOR INPUT FIELD
    textRef => REF FOR TEXTAREA
    */
  const {isChanging, handleChanging, noteList, handleEmptiness, inputRef, textRef} = useFunctionality();
  const functionality = [isChanging, handleChanging, noteList, handleEmptiness, inputRef, textRef];
  return (
    <>
      <Div id="parent" cn="parent" >
        <Left_Container functionality={functionality} />
        <Right_Container functionality={functionality} />
      </Div>
    </>
  )
}

export default App
