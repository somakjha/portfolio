import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import './App.scss'
import './styles/global/_prereq.scss'
import Projects from './components/Projects';
import Card from './components/Card';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      {/* <Card/> */}
      
    </div>
  );
}

export default App;
