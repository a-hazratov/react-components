import logo from './logo.svg';
import './App.css';
import StarRating from './Components/star-rating/StarRating';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Some react components</p>
      </header>
      <StarRating/>
    </div>
  );
}

export default App;
