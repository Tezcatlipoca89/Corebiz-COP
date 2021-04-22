import { useState } from "react";
import logo from './logo.svg';
import './App.css';

//componentes
import Header from './components/Header';
import Banner from './components/Banner';
import ResultList from './components/ResultList';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  const [word, setWord] = useState("");
  return (
    <div className="App">
      <Header setWord={setWord} />
      <Banner />
      <ResultList word={word} />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
