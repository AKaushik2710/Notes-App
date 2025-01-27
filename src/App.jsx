// import { useState } from 'react'
import Div from './Components/Div'
import Left_Container from './Components/Left_Container';
import Right_Container from './Components/Right_Container';
import './App.css'

function App() {

  return (
    <>
      <Div id="parent" cn="parent" >
        <Left_Container />
        <Right_Container />
      </Div>
    </>
  )
}

export default App
