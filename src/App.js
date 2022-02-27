import { useEffect } from 'react';
import WebFont from 'webfontloader';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Noto Sans", 'Tangerine','Hanalei Fill'],
      },
    });
  }, []);

  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
