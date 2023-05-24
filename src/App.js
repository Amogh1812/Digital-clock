import logo from './logo.svg';
import './App.css';
import Time from './time';
import Navbar from './navbar';
import StopWatch from './stopwatch';
import WC from './worldclock';
import Alarm from './alarm';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Time/>} />
        <Route path='/stopwatch' element={<StopWatch/>} />
        <Route path='/worldclock' element={<WC/>} />
        <Route path='/alarm' element={<Alarm/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
