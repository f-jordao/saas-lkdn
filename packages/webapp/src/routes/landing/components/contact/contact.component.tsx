import { ReactElement } from 'react';
import { useIntl } from 'react-intl';

export const Contact = (): ReactElement => {
  const intl = useIntl();

  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {intl.formatMessage({
              defaultMessage: "Contact Us",
              id: "landing.contact.heading"
            })}
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            {intl.formatMessage({
              defaultMessage: "Have questions? We'd love to hear from you.",
              id: "landing.contact.subheading"
            })}
          </p>
        </div>
        <div className="mt-12">
          <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                {intl.formatMessage({
                  defaultMessage: "First name",
                  id: "landing.contact.form.firstName.label"
                })}
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  autoComplete="given-name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  placeholder={intl.formatMessage({
                    defaultMessage: "Enter your first name",
                    id: "landing.contact.form.firstName.placeholder"
                  })}
                />
              </div>
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                {intl.formatMessage({
                  defaultMessage: "Last name",
                  id: "landing.contact.form.lastName.label"
                })}
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  autoComplete="family-name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  placeholder={intl.formatMessage({
                    defaultMessage: "Enter your last name",
                    id: "landing.contact.form.lastName.placeholder"
                  })}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                {intl.formatMessage({
                  defaultMessage: "Email",
                  id: "landing.contact.form.email.label"
                })}
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  placeholder={intl.formatMessage({
                    defaultMessage: "Enter your email",
                    id: "landing.contact.form.email.placeholder"
                  })}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                {intl.formatMessage({
                  defaultMessage: "Message",
                  id: "landing.contact.form.message.label"
                })}
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  placeholder={intl.formatMessage({
                    defaultMessage: "Enter your message",
                    id: "landing.contact.form.message.placeholder"
                  })}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {intl.formatMessage({
                  defaultMessage: "Send Message",
                  id: "landing.contact.form.submit"
                })}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}; 