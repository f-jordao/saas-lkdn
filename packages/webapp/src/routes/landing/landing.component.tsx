import { Suspense } from 'react';
import { IntlProvider } from 'react-intl';
import enMessages from '@sb/webapp-core/src/translations/en.json';
import { Hero } from './components/hero/hero.component';
import { Features } from './components/features/features.component';
import { Pricing } from './components/pricing/pricing.component';
import { CTASection } from './components/cta-section/cta-section.component';
import { Footer } from './components/footer/footer.component';
import { Contact } from './components/contact/contact.component';

export const Landing = () => {
  return (
    <div>
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
    </div>
  );
};

