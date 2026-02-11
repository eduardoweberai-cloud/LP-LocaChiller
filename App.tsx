
import React from 'react';
import HeroSection from './components/HeroSection';
import WhenToRentSection from './components/WhenToRentSection';
import ForWhomSection from './components/ForWhomSection';
import DifferentialsSection from './components/DifferentialsSection';
import AuthoritySection from './components/AuthoritySection';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from './components/Footer';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

const App: React.FC = () => {
  const handleCtaClick = () => {
    const whatsappUrl = "https://api.whatsapp.com/send?phone=5551983046162&text=Ol%C3%A1!%20Estou%20em%20seu%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es";
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen font-sans antialiased text-slate-900 overflow-x-hidden selection:bg-[#f58220] selection:text-white">
      <HeroSection onCtaClick={handleCtaClick} />
      
      <main>
        <WhenToRentSection />
        <ForWhomSection onCtaClick={handleCtaClick} />
        <DifferentialsSection />
        <AuthoritySection />
        <FinalCtaSection onCtaClick={handleCtaClick} />
      </main>
      
      <Footer />
      
      <FloatingWhatsAppButton />

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in-right {
          animation: fadeInRight 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
