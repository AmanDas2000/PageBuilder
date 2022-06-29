import './App.css';
import React, { createContext, useReducer } from 'react';
import Grid from './components/Grid';
import Sidebar from './components/Sidebar';
import { reducer, init } from './reducer';


export const globalContext = createContext();


function App() {
  const [context, dispatch] = useReducer(reducer, init);
  return (
    <globalContext.Provider value={{ context, dispatch }}>
      <div className="App">
        <Grid className="gridSection" />
        <Sidebar toggle={context.isOpen} />
      </div>
    </globalContext.Provider>
  );
}



export default App;
