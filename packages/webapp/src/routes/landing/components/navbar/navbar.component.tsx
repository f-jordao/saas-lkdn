import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

export const Navbar = (): ReactElement => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <img className="h-8 w-auto" src="/logo.svg" alt="Logo" />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="#features" className="text-gray-600 hover:text-gray-900">
              <FormattedMessage defaultMessage="Features" id="landing.nav.features" />
            </Link>
            <Link to="#pricing" className="text-gray-600 hover:text-gray-900">
              <FormattedMessage defaultMessage="Pricing" id="landing.nav.pricing" />
            </Link>
            <Link to="#blog" className="text-gray-600 hover:text-gray-900">
              <FormattedMessage defaultMessage="Blog" id="landing.nav.blog" />
            </Link>
            <Link to="#contact" className="text-gray-600 hover:text-gray-900">
              <FormattedMessage defaultMessage="Contact" id="landing.nav.contact" />
            </Link>
            <Link 
              to="/login" 
              className="text-gray-600 hover:text-gray-900"
            >
              <FormattedMessage defaultMessage="Login" id="landing.nav.login" />
            </Link>
            <Link 
              to="/signup" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <FormattedMessage defaultMessage="Get Started" id="landing.nav.getStarted" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}; 