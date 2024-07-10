import React from 'react';
import { Logo } from "../assets";
import { Footer } from "../containers";

const Authentification = () => {
  return (
    <div className="auth-section">
      {/* top section */}
      <img src={Logo} className="w-8 h-auto object-contain" alt="" />
      
      {/* main section */}
      <div className="w-full flex flex-1 flex-col items-center justify-center gap-6"></div>
    
      {/* footer section */}
      <Footer />
    </div>
    )
}

export default Authentification