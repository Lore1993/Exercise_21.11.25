
import './App.css'
import './index.css'
import NetflixNavbar from "./components/NetflixNavbar"
import Home from "./components/Home";
import UnderNavBar from "./components/UnderNavBar"
import NetflixFooter from './components/TheFooter';


function App() {
  return (
    <>
  <NetflixNavbar />
  <UnderNavBar/>
  <Home />
  <NetflixFooter/>
      
    
    </>
  );
}

export default App;