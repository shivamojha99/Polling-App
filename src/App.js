import './App.css';
import Header from "./Header.js";
import Topic_list from "./Topic_list";
function App() {
  return (
    <div className="App">
      
          <div className="top">
            <Header/>
          </div>
          <div className="middle">
          <Topic_list/>
          </div>
    </div>
  );
}

export default App;
