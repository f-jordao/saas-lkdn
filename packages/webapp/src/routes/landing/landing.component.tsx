import { Suspense } from 'react';
import { IntlProvider } from 'react-intl';
import enMessages from '@sb/webapp-core/src/translations/en.json';
import { Hero } from './components/hero/hero.component';
import { Features } from './components/features/features.component';
import { Pricing } from './components/pricing/pricing.component';
import { CTASection } from './components/cta-section/cta-section.component';
import { Footer } from './components/footer/footer.component';
import { Contact } from './components/contact/contact.component';
import { useBranding } from '@sb/webapp-core/hooks';
import { Helmet } from 'react-helmet-async';

export const Landing = () => {
  const { product, visual } = useBranding();
  
  return (
    <>
      <Helmet>
        <title>{product.displayName}</title>
        <meta name="description" content={product.description} />
      </Helmet>
      <Suspense fallback={<div>Loading...</div>}>
        <IntlProvider locale="en" messages={enMessages}>
          <div>
            <Hero />
            <Features />
            <Pricing />
            <CTASection />
            <Footer />
            <Contact />
          </div>
        </IntlProvider>
      </Suspense>
    </>
  );
};

