import logo from './logo.svg';
import './App.css';
import StarRating from './Components/star-rating/StarRating';
import LoginUser from './Components/LoginUser';
import List from './Components/List'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Some react components</p>
      </header>
      <StarRating/>
      <LoginUser/>
      <List/>
    </div>
  );
}

export default App;
