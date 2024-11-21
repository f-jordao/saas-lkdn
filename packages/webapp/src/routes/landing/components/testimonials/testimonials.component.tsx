import { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

const testimonials = [
  {
    quote: 'landing.testimonials.quote1',
    name: 'landing.testimonials.name1',
    title: 'landing.testimonials.title1',
  },
  {
    quote: 'landing.testimonials.quote2',
    name: 'landing.testimonials.name2',
    title: 'landing.testimonials.title2',
  },
  {
    quote: 'landing.testimonials.quote3',
    name: 'landing.testimonials.name3',
    title: 'landing.testimonials.title3',
  },
];

export const Testimonials = (): ReactElement => {
  return (
    <div id="testimonials" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-center">
          <FormattedMessage defaultMessage="Testimonials" id="landing.testimonials.headline" />
        </h2>
        <div className="mt-12 space-y-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <blockquote className="mt-6 text-lg text-gray-500">
                <p>
                  <FormattedMessage defaultMessage={testimonial.quote} id={testimonial.quote} />
                </p>
              </blockquote>
              <div className="mt-6">
                <p className="text-base font-medium text-gray-900">
                  <FormattedMessage defaultMessage={testimonial.name} id={testimonial.name} />
                </p>
                <p className="text-base text-gray-500">
                  <FormattedMessage defaultMessage={testimonial.title} id={testimonial.title} />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 