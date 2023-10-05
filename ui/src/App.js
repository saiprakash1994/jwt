import logo from './logo.svg';
import './App1.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/SignUp';
import DashBoard from './components/DashBoard';
import Update from './components/Update';
import Delete from './components/Delete';
import DayilyStatus from './components/DayilyStatus';
import Leaves from './components/Leaves';
import Messages from './components/Messages';
import Task from './components/Task';
import axios from 'axios';
import ReactPlayer from 'react-player'

function App() {
    const [url, setUrl] = useState()

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login></Login>} ></Route>
        <Route path='/signup' element={<SignUp></SignUp>} ></Route>
        <Route path='/dash' element={<DashBoard></DashBoard>}></Route>
        <Route path='/update' element={<Update></Update>}></Route>
        <Route path='/delete' element={<Delete></Delete>}></Route>
        <Route path='/dsu' element={<DayilyStatus></DayilyStatus>}></Route>
        <Route path='/leave' element={<Leaves></Leaves>}></Route>
        <Route path='/message' element={<Messages></Messages>}></Route>
        <Route path='/task' element={<Task></Task>}></Route>
        

      </Routes>
      
      </BrowserRouter>
          <input placeholder='url' onChange={(e:any)=>{setUrl(e.target.value)}}></input>
      <iframe src={url}></iframe>
      <ReactPlayer
        url={url}
        
  config={{
    youtube: {
      playerVars: {

        preload: "auto",

        autoplay: true,

    }
    },
    
  }}
/>
    </div>
  );
}

export default App;
