import { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

const blogPosts = [
  {
    title: 'landing.blog.post1.title',
    description: 'landing.blog.post1.description',
    link: '/blog/post1',
  },
  {
    title: 'landing.blog.post2.title',
    description: 'landing.blog.post2.description',
    link: '/blog/post2',
  },
  {
    title: 'landing.blog.post3.title',
    description: 'landing.blog.post3.description',
    link: '/blog/post3',
  },
];

export const Blog = (): ReactElement => {
  return (
    <div id="blog" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-center">
          <FormattedMessage defaultMessage="landing.blog.headline" id="landing.blog.headline" />
        </h2>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <a href={post.link} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      <FormattedMessage defaultMessage={post.title} id={post.title} />
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      <FormattedMessage defaultMessage={post.description} id={post.description} />
                    </p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 