import { ReactElement } from 'react';
import { useIntl } from 'react-intl';

export const Pricing = (): ReactElement => {
  const intl = useIntl();

  const tiers = [
    {
      name: intl.formatMessage({
        defaultMessage: "Starter",
        id: "landing.pricing.starter.title"
      }),
      price: intl.formatMessage({
        defaultMessage: "$0",
        id: "landing.pricing.starter.price"
      }),
      description: intl.formatMessage({
        defaultMessage: "Perfect for side projects and small applications",
        id: "landing.pricing.starter.description"
      }),
      features: [
        intl.formatMessage({
          defaultMessage: "Up to 1,000 users",
          id: "landing.pricing.starter.feature1"
        }),
        // Add other features...
      ],
    },
    // Add other tiers...
  ];

  return (
    <div className="bg-gray-100">
      <div className="pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
              {intl.formatMessage({
                defaultMessage: "Simple, transparent pricing",
                id: "landing.pricing.heading"
              })}
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              {intl.formatMessage({
                defaultMessage: "Choose the plan that fits your needs",
                id: "landing.pricing.subheading"
              })}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-3">
              {tiers.map((tier) => (
                <div key={tier.name} className="pricing-card">
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900">{tier.name}</h3>
                    <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                    <p className="mt-8">
                      <span className="text-4xl font-extrabold text-gray-900">{tier.price}</span>
                    </p>
                    <ul className="mt-6 space-y-4">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex">
                          <span className="text-sm text-gray-500">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 