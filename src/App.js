import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
const App = (props) => {
  return(
    <div className="app-wrapper">
      <Header/>
      <MainContent store={props.store} state={props.state} dispatch={props.dispatch}/>
    </div>
  );
}

export default App;
