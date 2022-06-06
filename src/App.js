import logo from './logo.svg';
import './App.css';
import StarRating from './Components/star-rating/StarRating';
import LoginUser from './Components/LoginUser';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Some react components</p>
      </header>
      <StarRating/>
      <LoginUser/>
    </div>
  );
}

export default App;
