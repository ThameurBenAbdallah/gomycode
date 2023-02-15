import './App.css';
import Profile from './Components/Profile/Profile.jsx';
import myPhoto from './img/myPhoto.jpeg'





function App() {
  
  
    let name = "Thameur Ben Abdallah";
    let profession = 'Engineer';
    let bio = ' 38 years old freelance devolopper'

    const onClickAlert =  (e) => {
      e.preventDefault();
      alert(`Hello, ${name}!`);
    };
  return (
    
    
    <div className="App">
      <header className="App-header">
      <Profile fullName= {name} profession = {profession} bio = {bio} onClickHandler= {onClickAlert }>{myPhoto}</Profile>
      </header>
    </div>
  );
  
}

export default App;

