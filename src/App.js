import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import BlurBg from './components/BlurBg/BlurBg';
import { useSelector } from 'react-redux';

function App() {

  let showBg = useSelector((data) => data.showBg)

  let appRef = useRef();
  let [bgHeight, setBgHeight] = useState(0);

  useEffect(() => {
    setBgHeight(appRef.current.offsetHeight);
  })

  return (
    <div className="App" ref={appRef}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
      {showBg && <BlurBg bgHeight={bgHeight} />}
    </div>
  );
}

export default App;
