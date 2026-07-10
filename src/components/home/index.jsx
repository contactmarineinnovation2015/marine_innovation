import ContactUs from '../contact-us';
import Navbar from '../navigation';
import Products from '../products';
import Component2 from '../header2';
import Component3 from '../header3';
import Footer from '../footer';
import LayoutSection from '../util/layout';
import ContactForm from '../util/form';
import Services from '../services';
import Promotions from '../promotion';
import { useEffect, useRef, useState } from "react";
import { Box } from '@mui/material';
import PartnersList from '../util/list/PartnersList';
import "../../App.css"
import WebsiteChatbotWidget from '../Chatbot';

function Home() {


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
      <LayoutSection ref={aboutRef} />
      <Products ref={servicesRef} />
      <Services />
      <Promotions ref={promotionsRef} />
      <Component2 ref={header2Ref} />
      <Component3 ref={header3Ref} allMembers={false}  />
      <ContactUs ref={contactRef} /> 
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

export default Home;
