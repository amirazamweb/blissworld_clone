import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import BlurBg from './components/BlurBg/BlurBg';
import { useSelector } from 'react-redux';
import OrderPopUp from './components/OrderPopUp/OrderPopUp';

function App() {

  let { showBg, showOrderPopUp } = useSelector((data) => {
    return { showBg: data.showBg, showOrderPopUp: data.showOrderPopUp }
  })

  let appRef = useRef();
  let [bgHeight, setBgHeight] = useState(0);

  useEffect(() => {
    setBgHeight(appRef.current.offsetHeight);
  }, [showBg])

  return (
    <div className="App" ref={appRef}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
      {showBg && <BlurBg bgHeight={bgHeight} />}
      {showOrderPopUp && <OrderPopUp />}
    </div>
  );
}

export default App;
