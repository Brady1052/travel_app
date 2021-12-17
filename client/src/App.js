import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Pages/Homepage';
import Images from './components/Images';
import Visited from './components/Pages/Visited';

function App() {
  return (
    <div className='main'>
     <Navbar />
     <Homepage />
     <Images />
     <Visited />
    </div>
  );
}


export default App;
