import logo from './logo.svg';
import './App.css';
import SearchComp from './components/searchComponent';
import backgroundImage from './backgroundPic.png'
//style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover'}}
function App() {
  return (
    <div className="App">
      <SearchComp />
    </div>
  );
}

export default App;
