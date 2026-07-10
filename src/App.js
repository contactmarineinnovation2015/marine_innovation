import logo from './logo.svg';
import './App.css';
import ContactUs from './components/contact-us';
import Navbar from './components/navigation';
import Products from './components/products';
import Component2 from './components/header2';
import Component3 from './components/header3';
import Footer from './components/footer';
import LayoutSection from './components/util/layout';
import ContactForm from './components/util/form';
import Services from './components/services';
import Promotions from './components/promotion';
import { useEffect, useRef, useState } from "react";
import { Box } from '@mui/material';
import PartnersList from './components/util/list/PartnersList';
import { Route, useLocation } from 'wouter';
import Home from './components/home';
import FeaturedPromotionsList from './components/util/list/FeaturedPromotionList';
import PromotionsList from './components/util/list/PromotionsList';
import ProductsList from './components/util/list/ProductsList';
import ServicesList from './components/util/list/ServicesList';
import AboutUs from './components/about-us';
import Team from './components/header3';
import WebsiteChatbotWidget from './components/Chatbot';


function App() {


  const [location] = useLocation(); // current path

  const [currentPage, setCurrentPage] = useState('home');

  // useEffect(() => {

  // }, [currentPage])

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const featuredpromotionsRef = useRef(null);
  const promotionsRef = useRef(null);
    const header2Ref = useRef(null);
        const header3Ref = useRef(null);


  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollTo = (ref) => {
    if (!ref.current) return;

    const yOffset = -75; // AppBar height
    const y =
      ref.current.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="App" style={{maxWidth: '100%', backgroundColor: '#fff'}}>
      {
        location === '/' ?
        <></> :
        <Navbar onNavigate={scrollTo} refs={{
              contactRef,
              aboutRef,
              servicesRef,
              contactRef,
              featuredpromotionsRef,
              promotionsRef,
              header2Ref,
              header3Ref
            }} />
      }
      <Route path="/" component={Home} />
      <Route path="/partners" component={PartnersList} />
      <Route path={'/postings'} component={FeaturedPromotionsList}/>
 <Route path={'/promotions'} component={PromotionsList}/>
      <Route path={'/products'} component={ProductsList} />
      <Route path={'/services'} component={ServicesList} />
      <Route path={'/about-us'} component={AboutUs} />
      <Route path={'/contact-us'} component={ContactUs} />
      <Route path={'/team'} component={Team} />
<WebsiteChatbotWidget></WebsiteChatbotWidget>
    <Footer />
      {/* <Navbar onNavigate={scrollTo} refs={{
        contactRef,
        aboutRef,
        servicesRef,
        contactRef,
        promotionsRef,
        header2Ref,
        header3Ref
      }} />
      {
        currentPage === 'partners' ?
        <PartnersList /> :
        <>
          <LayoutSection ref={aboutRef} />
      <Products ref={servicesRef} />
      <Services />
      <Promotions ref={promotionsRef} />
      <Component2 ref={header2Ref} setCurrentPage={setCurrentPage} />
      <Component3 ref={header3Ref}  />
      <ContactUs ref={contactRef} /> 
        </>
      }
      <Route path="/partner" component={PartnersList}>

      </Route> */}
      {/* <PartnersList /> */}
      {/* <LayoutSection ref={aboutRef} />
      <Products ref={servicesRef} />
      <Services />
      <Promotions ref={promotionsRef} />
      <Component2 ref={header2Ref} />
      <Component3 ref={header3Ref}  />
      <ContactUs ref={contactRef} />  */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
