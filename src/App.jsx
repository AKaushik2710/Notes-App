// import { useState } from 'react'
import Div from './Components/Div'
import Left_Container from './Components/Left_Container';
import Right_Container from './Components/Right_Container';
import { useFunctionality } from './Components/Functionality';
import './App.css'

function App() {
  const {isChanging, handleChanging, noteList, dispatch} = useFunctionality();
  const functionality = [isChanging, handleChanging, noteList, dispatch];
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
