import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import BestSellers from './pages/BestSellers/BestSellers';
import Skincare from './pages/Skincare/Skincare';
import BodyAndHaircare from './pages/BodyAndHaircare/BodyAndHaircare';
import SetsAndKits from './pages/SetsAndKits/SetsAndKits';
import Sale from './pages/Sale/Sale';
import FooterPages from './pages/FooterPages/FooterPages';
import Accessibility from './pages/FooterPages/Accessibility/Accessibility';
import FindABlissNearYou from './pages/FooterPages/FindABlissNearYou/FindABlissNearYou';
import WhoWeAre from './pages/FooterPages/WhoWeAre/WhoWeAre';
import AllCollections from './pages/FooterPages/AllCollections/AllCollections';
import Contact from './pages/FooterPages/Contact/Contact';
import Shipping from './pages/FooterPages/Shipping/Shipping';
import Returns from './pages/FooterPages/Returns/Returns';
import OrderingPayment from './pages/FooterPages/OrderingPayment/OrderingPayment';
import PrivacyPolicy from './pages/FooterPages/PrivacyPolicy/PrivacyPolicy';
import TermsConditions from './pages/FooterPages/TermsConditions/TermsConditions';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
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
        <Route path='/best-sellers' element={<BestSellers />} />
        <Route path='/skincare' element={<Skincare />} />
        <Route path='/body-and-haircare' element={<BodyAndHaircare />} />
        <Route path='/sets-and-kits' element={<SetsAndKits />} />
        <Route path='/sale' element={<Sale />} />
        <Route path='/pages/' element={<FooterPages />}>
          <Route path='accessibility' element={<Accessibility />} />
          <Route path='find-a-bliss-near-you' element={<FindABlissNearYou />} />
          <Route path='who-we-are' element={<WhoWeAre />} />
          <Route path='collections' element={<AllCollections />} />
          <Route path='contact' element={<Contact />} />
          <Route path='shipping' element={<Shipping />} />
          <Route path='returns' element={<Returns />} />
          <Route path='ordering-payment' element={<OrderingPayment />} />
          <Route path='privacy-policy' element={<PrivacyPolicy />} />
          <Route path='terms-conditions' element={<TermsConditions />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
      {showBg && <BlurBg bgHeight={bgHeight} />}
      {showOrderPopUp && <OrderPopUp />}
    </div>
  );
}

export default App;
