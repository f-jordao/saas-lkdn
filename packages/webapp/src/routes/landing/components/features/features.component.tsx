import { ReactElement } from 'react';
import { useIntl } from 'react-intl';

export const Features = (): ReactElement => {
  const intl = useIntl();

  const features = [
    {
      name: intl.formatMessage({
        defaultMessage: "Authentication",
        id: "landing.features.auth.title"
      }),
      description: intl.formatMessage({
        defaultMessage: "Complete authentication system with email verification and password reset.",
        id: "landing.features.auth.description"
      }),
    },
    {
      name: intl.formatMessage({
        defaultMessage: "Subscriptions",
        id: "landing.features.subscriptions.title"
      }),
      description: intl.formatMessage({
        defaultMessage: "Stripe integration with subscription management and usage-based billing.",
        id: "landing.features.subscriptions.description"
      }),
    },
    // Add other features...
  ];

  return (
    <div className="py-12 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            {intl.formatMessage({
              defaultMessage: "Features",
              id: "landing.features.heading"
            })}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {intl.formatMessage({
              defaultMessage: "Everything you need to build your SaaS",
              id: "landing.features.subheading"
            })}
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    {/* Icon can be added here */}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}; 