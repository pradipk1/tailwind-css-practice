import './App.css';
import Login from './Components/Login/Login';
import Welcome from './Components/Welcome/Welcome';
import {useSelector} from 'react-redux'

function App() {
  const loginStatus = useSelector((store) => store.isLoggedIn);
  
  return (
    <div className="App">
      {
        loginStatus ? <Welcome /> : <Login />
      }
    </div>
  );
}

export default App;
