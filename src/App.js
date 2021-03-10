import React from 'react';
import './App.css'
import Header from './Header';
import Editor from './Editor';
import Chat from './Chat';

const App = () => {
  return (
    <div className="main_div">
      <Header/>
      <Editor/>
      <Chat/>
    </div>
  )
}

export default App
