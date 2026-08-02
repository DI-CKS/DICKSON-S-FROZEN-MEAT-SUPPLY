import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ProductCatalog } from './components/ProductCatalog';
import { WholesaleCalculator } from './components/WholesaleCalculator';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSection } from './components/AboutSection';
import { Testimonials } from './components/Testimonials';
import { QuoteSection } from './components/QuoteSection';
import { QuoteSuccessModal } from './components/QuoteSuccessModal';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { Product } from './types';

export default function App() {
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<Product | null>(null);
  const [calculationSummaryForQuote, setCalculationSummaryForQuote] = useState<string>('');

  // Modal State
  const [successModalData, setSuccessModalData] = useState<{
    referenceId: string;
    customerName: string;
    orderSummary: string;
  } | null>(null);

  const scrollToQuoteSection = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProducts = () => {
    const section = document.getElementById('products');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProductForQuote = (product: Product) => {
    setSelectedProductForQuote(product);
    setCalculationSummaryForQuote('');
    scrollToQuoteSection();
  };

  const handleApplyCalculationToQuote = (summary: string) => {
    setCalculationSummaryForQuote(summary);
    setSelectedProductForQuote(null);
    scrollToQuoteSection();
  };

  const handleQuoteSubmitted = (refId: string, name: string, summary: string) => {
    setSuccessModalData({
      referenceId: refId,
      customerName: name,
      orderSummary: summary,
    });
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-orange-600 selection:text-white antialiased">
      {/* Top Navbar */}
      <Navbar onOpenQuote={scrollToQuoteSection} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenQuote={scrollToQuoteSection}
          onExploreProducts={scrollToProducts}
        />

        {/* Trust Metrics & Bar */}
        <TrustBar />

        {/* Product Catalog Grid */}
        <ProductCatalog onSelectProductForQuote={handleSelectProductForQuote} />

        {/* Interactive B2B Order & Freight Calculator */}
        <WholesaleCalculator onApplyToQuote={handleApplyCalculationToQuote} />

        {/* Why Choose Us - 4 Feature Pillars */}
        <WhyChooseUs />

        {/* About Dickson's Frozen Meat Supply */}
        <AboutSection />

        {/* Social Proof & Testimonials */}
        <Testimonials />

        {/* B2B Quote Inquiry Form */}
        <QuoteSection
          initialProduct={selectedProductForQuote}
          initialSummary={calculationSummaryForQuote}
          onSuccessSubmitted={handleQuoteSubmitted}
        />

        {/* Accordion FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Success Confirmation Modal */}
      {successModalData && (
        <QuoteSuccessModal
          referenceId={successModalData.referenceId}
          customerName={successModalData.customerName}
          orderSummary={successModalData.orderSummary}
          onClose={() => setSuccessModalData(null)}
        />
      )}
    </div>
  );
}
