import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';

export const Hero = (): ReactElement => {
  const intl = useIntl();

  return (
    <div className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full">
        <div className="relative h-full max-w-7xl mx-auto">
          <svg
            className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">
                {intl.formatMessage({
                  defaultMessage: "Build your SaaS",
                  id: "landing.hero.title.first"
                })}
              </span>{' '}
              <span className="block text-indigo-600 xl:inline">
                {intl.formatMessage({
                  defaultMessage: "Faster and Easier",
                  id: "landing.hero.title.second"
                })}
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              {intl.formatMessage({
                defaultMessage: "Create your SaaS product with our comprehensive toolkit.",
                id: "landing.hero.description"
              })}
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link
                  to="/signup"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  {intl.formatMessage({
                    defaultMessage: "Get Started",
                    id: "landing.hero.cta.primary"
                  })}
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link
                  to="#features"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  {intl.formatMessage({
                    defaultMessage: "Learn More",
                    id: "landing.hero.cta.secondary"
                  })}
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
