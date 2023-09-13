import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Body from './components/body/body';
import {BrowserRouter} from "react-router-dom"

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Body/>
        <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
