import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { CertificationPage } from './pages/CertificationPage';
import { ContactPage } from './pages/ContactPage';
import { QuotePage } from './pages/QuotePage';
import { PortfolioPage } from './pages/PortfolioPage';
import { LegalTranslationPage } from './pages/services/LegalTranslationPage';
import { MedicalTranslationPage } from './pages/services/MedicalTranslationPage';
import { TechnicalTranslationPage } from './pages/services/TechnicalTranslationPage';
import { BusinessTranslationPage } from './pages/services/BusinessTranslationPage';

function App() {
  return (
    <Suspense fallback={<div className="h-screen w-screen flex items-center justify-center">Loading...</div>}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/legal" element={<LegalTranslationPage />} />
              <Route path="/services/medical" element={<MedicalTranslationPage />} />
              <Route path="/services/technical" element={<TechnicalTranslationPage />} />
              <Route path="/services/business" element={<BusinessTranslationPage />} />
              <Route path="/certification" element={<CertificationPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/quote" element={<QuotePage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Suspense>
  );
}

export default App;