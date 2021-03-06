import './App.css';
import Header from "./Header.js";
// import Topic_list from "./Topic_list";
import {useStateValue} from './StateProvider';
// import {auth} from './Firebase';
import './Firebase'
import Login from './Login';
function App() {

  const [{user}, dispatch]=useStateValue();
  const userId = sessionStorage.getItem('userId');
  return (
    <div className="App">
      <>
      {!userId?(<Login/>):
      (
        <>
        <div className="top">
          <Header/>
        </div>
        {/* <div className="middle">
        <Topic_list/>
        </div> */}
        </>
      )}
    </>
    </div>
  );
}
export default App;
