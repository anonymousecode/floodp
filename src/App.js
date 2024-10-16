import './App.css';
import Header from './components/header'
import Tile1 from './components/tile1'
import Cards from './components/cards';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Tile1/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
