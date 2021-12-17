import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Pages/Homepage';
import Images from './components/Images';


function App() {
  return (
    <div className='main'>
     <Navbar />
     <Homepage />
     <Images />
    </div>
  );
}


export default App;
