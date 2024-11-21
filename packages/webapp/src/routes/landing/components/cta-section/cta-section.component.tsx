import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';

export const CTASection = (): ReactElement => {
  const intl = useIntl();

  return (
    <div className="bg-indigo-700">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">
            {intl.formatMessage({
              defaultMessage: "Ready to get started?",
              id: "landing.cta.heading"
            })}
          </span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-indigo-200">
          {intl.formatMessage({
            defaultMessage: "Start building your SaaS application today.",
            id: "landing.cta.description"
          })}
        </p>
        <Link
          to="/signup"
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
        >
          {intl.formatMessage({
            defaultMessage: "Sign up for free",
            id: "landing.cta.button"
          })}
        </Link>
      </div>
    </div>
  );
}; 