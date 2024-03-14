import logo from './logo.svg';
import './App.css';
import CleanHours from './Components/CleanHours';
import { useState } from 'react';

function App() {
  const [showCleanHours, setShowCleanHours] = useState(null);


  return (
    <div className="App">
      <CleanHours className='CleanHours'/>
    </div>
  );
}

export default App;
