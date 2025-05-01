import React from 'react';

export default function SampleArticle() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-sans">
      {/* Mission Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-500 inline-block">
          Our Mission
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          At Habesham Project, our mission is simple yet powerful: to empower young tech enthusiasts, 
          foster innovation, and accelerate Ethiopia's digital transformation.
        </p>
        
        <ul className="space-y-6">
          {[
            {
              title: 'Building a Supportive Tech Community',
              desc: 'We provide mentorship, resources, and guidance to help learners grow in programming, design, AI, and more. Innovators with ideas get the support they need to bring them to life, and businesses benefit from a skilled network ready to contribute to the tech ecosystem.'
            },
            {
              title: 'Providing Digital Solutions for Businesses & Startups',
              desc: 'We develop affordable, high-quality digital tools for Ethiopian companies. From websites and marketing to startup support and investor connections, we help bridge the digital gap and spark real growth.'
            }
          ].map((item, index) => (
            <li key={index} className="bg-blue-50/50 p-5 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Goals Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-green-500 inline-block">
          Our Goals
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Our ultimate goal is to build a thriving tech ecosystem in Ethiopia and Africa. We do this by:
        </p>
        
        <ul className="grid md:grid-cols-2 gap-6">
          {[
            'Creating a Strong Tech Community: A space where developers, designers, and marketers collaborate, learn, and grow. We host competitions, challenges, and encourage peer-to-peer mentorship.',
            'Connecting Startups & Talent: We help entrepreneurs connect with the right tech minds to build and launch their ideas.',
            'Building Impactful Projects: We work on community-driven, open-source projects that address local needs and give members hands-on experience.',
            'Supporting Students: We provide students with a platform to learn, get mentorship, and explore tech career paths.'
          ].map((goal, index) => (
            <li key={index} className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-green-700 mb-2">{goal.split(':')[0]}:</h3>
              <p className="text-gray-700">{goal.split(':')[1]}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Community Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-purple-500 inline-block">
          Our Community
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          At Habesham Project, we've built a vibrant, collaborative community that focuses on practical learning, growth, and impact.
        </p>
        
        <ul className="space-y-4">
          {[
            'Knowledge Sharing: Through Telegram groups, live workshops, and expert-led sessions, we promote learning and open dialogue.',
            'Hands-on Projects: We work on real-world applications, open-source tools, and initiatives that solve real problems.',
            'Competitions: Hackathons, coding challenges, and startup contests make learning fun and rewarding.',
            "Future Plans: We're planning structured mentorship, weekly Q&A sessions, and career support programs to further empower our members."
          ].map((point, index) => (
            <li key={index} className="flex items-start">
              <span className="flex-shrink-0 bg-purple-100 text-purple-800 rounded-full p-2 mr-3 mt-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
              <div>
                <h3 className="font-semibold text-purple-800">{point.split(':')[0]}:</h3>
                <p className="text-gray-700">{point.split(':')[1]}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Work & Services Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-amber-500 inline-block">
          Our Work & Services
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          We provide real solutions that bring ideas to life:
        </p>
        
        <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-6 rounded-xl">
          <ul className="space-y-4">
            {[
              'Digital Solutions: Websites, mobile apps, automation tools, and branding support — custom-built for Ethiopian businesses and startups.',
              'Empowering Entrepreneurs: We help our community members turn their ideas into real startups, offering development, marketing, and networking support.',
              'Community-Driven Innovation: We support members who want to launch collaborative projects with real-world impact.',
              "Flexible, Custom Services: Whether it's a SaaS platform, enterprise system, or IoT integration, we build what our clients and community need."
            ].map((service, index) => (
              <li key={index} className="flex">
                <span className="text-amber-600 mr-2">•</span>
                <div>
                  <h3 className="font-semibold text-amber-800 inline">{service.split(':')[0]}:</h3>
                  <p className="text-gray-700 inline">{service.split(':')[1]}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Join Section */}
      <section className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-500 inline-block">
          How to Join & Work With Us
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Joining Habesham Project is easy:
        </p>
        
        <ul className="space-y-4 mb-8">
          {[
            'Join the Community: Connect via Telegram to discuss, share, and learn.',
            'Contribute to Projects: Propose or join real-world tech projects and build together.',
            'Collaborate With Us: We partner with startups and businesses to create impactful digital solutions.',
            'Support the Mission: Sponsor, mentor, donate, or contribute in any way you can.'
          ].map((step, index) => (
            <li key={index} className="flex items-start">
              <span className="bg-gray-200 text-gray-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                {index + 1}
              </span>
              <div>
                <h3 className="font-semibold text-gray-800">{step.split(':')[0]}:</h3>
                <p className="text-gray-700">{step.split(':')[1]}</p>
              </div>
            </li>
          ))}
        </ul>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Get in touch</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="text-gray-700">Email: [Your Email Here]</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Telegram: [Your Telegram Handle Here]</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="text-gray-700">Phone: [Your Phone Number Here]</span>
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
}