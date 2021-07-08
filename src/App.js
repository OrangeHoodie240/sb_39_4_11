import React from 'react'; 
import ReactDOM from 'react-dom';
import './App.css'; 
import EightBall from './EightBall';


const App = ()=>{
  return <EightBall /> 
};


ReactDOM.render(<App />, document.getElementById('root')); 
export default App;