export const BRANDING = {
    // Company/Product Identity
    company: {
      name: 'Fabio Inc',
      legalName: 'Fabio Corporation Ltd',
    },
    
    product: {
      name: 'fabio-saas',
      displayName: 'Fabio SaaS',
      description: 'Your SaaS Platform Description',
      slogan: 'Build Better, Build Faster',
    },
  
    // Contact & Social
    contact: {
      email: 'support@fabio-saas.com',
      sales: 'sales@fabio-saas.com',
    },
  
    // URLs and domains
    urls: {
      main: 'fabio-saas.com',
      app: 'app.fabio-saas.com',
      docs: 'docs.fabio-saas.com',
      social: {
        twitter: 'https://twitter.com/fabio-saas',
        github: 'https://github.com/fabio-saas',
      }
    },
  
    // Visual Identity
    visual: {
      colors: {
        primary: '#4F46E5',
        secondary: '#7C3AED',
        accent: '#F59E0B',
      },
      logo: {
        default: '/images/logo.svg',
        dark: '/images/logo-dark.svg',
        icon: '/images/icon.svg',
      },
      favicon: '/icons/favicon.ico',
      icons: {
        sizes: {
          small: '/icons/android-chrome-192x192.png',
          large: '/icons/android-chrome-512x512.png',
        },
        apple: '/icons/apple-touch-icon.png',
        favicon16: '/icons/favicon-16x16.png',
        favicon32: '/icons/favicon-32x32.png',
        msTile: '/icons/mstile-150x150.png',
        safari: '/icons/safari-pinned-tab.svg',
      }
    },
  
    // Repository & Documentation
    repository: {
      url: 'https://github.com/fabio-inc/fabio-saas',
      branch: 'main',
      docs: {
        url: 'https://docs.fabio-saas.com',
      }
    },
  
    // Marketing & Analytics
    marketing: {
      utm: {
        source: 'docs',
        medium: 'referral',
        campaign: 'Fabio SaaS',
        term: 'Fabio SaaS Platform',
      },
    },
  
    // External Links
    links: {
      website: {
        label: 'Fabio SaaS Website',
        url: (utm = true) => {
          const baseUrl = `https://${BRANDING.urls.main}/platform`;
          if (!utm) return baseUrl;
          return `${baseUrl}?utm_source=${BRANDING.marketing.utm.source}&utm_medium=${BRANDING.marketing.utm.medium}&utm_campaign=${BRANDING.marketing.utm.campaign}&utm_term=${BRANDING.marketing.utm.term}`;
        },
      },
      repository: {
        label: 'GitHub Repository',
        url: 'https://github.com/fabio-inc/fabio-saas',
      },
      documentation: {
        label: 'Documentation',
        url: 'https://docs.fabio-saas.com',
      }
    },
  } 
  