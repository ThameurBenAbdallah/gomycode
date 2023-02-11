import './App.css';
import Address from './Components/Profile/Address.js';
import myPhoto from './img/myPhoto.jpeg'
import ProfileImg from './Components/Profile/ProfilePhoto.js';
import FullName from './Components/Profile/FullName.js';

let myFullName ='Thameur BEN ABDALLAH';
let myAddress = 'Sfax';

function App() {
  
  
  return (
    
    <div className="App">
      
      <div>
        <ProfileImg   imgLink = {myPhoto} userName = {myFullName} />    
        </div>
      <div>
        <FullName   name = {myFullName}/>    
        </div>
      
        <Address  address = {myAddress}/>  
        
      
    </div>
  );
}

export default App;
