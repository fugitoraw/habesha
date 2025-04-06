import React from 'react'

export default function SampleArticle() {
  return (
    <>
      <article>
        <section>
          <h2>Our Mission</h2>
          <p>At Habesham Project, our mission is simple yet powerful: to empower young tech enthusiasts, foster innovation, and accelerate Ethiopia’s digital transformation.</p>
          <ul>
            {[
              {
                title: 'Building a Supportive Tech Community:',
                desc: 'We provide mentorship, resources, and guidance to help learners grow in programming, design, AI, and more. Innovators with ideas get the support they need to bring them to life, and businesses benefit from a skilled network ready to contribute to the tech ecosystem.'
              },
              {
                title: 'Providing Digital Solutions for Businesses & Startups:',
                desc: 'We develop affordable, high-quality digital tools for Ethiopian companies. From websites and marketing to startup support and investor connections, we help bridge the digital gap and spark real growth.'
              }
            ].map((item, index) => (
              <li key={index}>
                <strong>{item.title}</strong>
                <p>{item.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Our Goals</h2>
          <p>Our ultimate goal is to build a thriving tech ecosystem in Ethiopia and Africa. We do this by:</p>
          <ul>
            {[
              'Creating a Strong Tech Community: A space where developers, designers, and marketers collaborate, learn, and grow. We host competitions, challenges, and encourage peer-to-peer mentorship.',
              'Connecting Startups & Talent: We help entrepreneurs connect with the right tech minds to build and launch their ideas.',
              'Building Impactful Projects: We work on community-driven, open-source projects that address local needs and give members hands-on experience.',
              'Supporting Students: We provide students with a platform to learn, get mentorship, and explore tech career paths.'
            ].map((goal, index) => (
              <li key={index}>
                <strong>{goal.split(':')[0]}:</strong>
                <p>{goal.split(':')[1]}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Our Community</h2>
          <p>At Habesham Project, we’ve built a vibrant, collaborative community that focuses on practical learning, growth, and impact.</p>
          <ul>
            {[
              'Knowledge Sharing: Through Telegram groups, live workshops, and expert-led sessions, we promote learning and open dialogue.',
              'Hands-on Projects: We work on real-world applications, open-source tools, and initiatives that solve real problems.',
              'Competitions: Hackathons, coding challenges, and startup contests make learning fun and rewarding.',
              'Future Plans: We’re planning structured mentorship, weekly Q&A sessions, and career support programs to further empower our members.'
            ].map((point, index) => (
              <li key={index}>
                <strong>{point.split(':')[0]}:</strong>
                <p>{point.split(':')[1]}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Our Work & Services</h2>
          <p>We provide real solutions that bring ideas to life:</p>
          <ul>
            {[
              'Digital Solutions: Websites, mobile apps, automation tools, and branding support — custom-built for Ethiopian businesses and startups.',
              'Empowering Entrepreneurs: We help our community members turn their ideas into real startups, offering development, marketing, and networking support.',
              'Community-Driven Innovation: We support members who want to launch collaborative projects with real-world impact.',
              'Flexible, Custom Services: Whether it’s a SaaS platform, enterprise system, or IoT integration, we build what our clients and community need.'
            ].map((service, index) => (
              <li key={index}>
                <strong>{service.split(':')[0]}:</strong>
                <p>{service.split(':')[1]}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>How to Join & Work With Us</h2>
          <p>Joining Habesham Project is easy:</p>
          <ul>
            {[
              'Join the Community: Connect via Telegram to discuss, share, and learn.',
              'Contribute to Projects: Propose or join real-world tech projects and build together.',
              'Collaborate With Us: We partner with startups and businesses to create impactful digital solutions.',
              'Support the Mission: Sponsor, mentor, donate, or contribute in any way you can.'
            ].map((step, index) => (
              <li key={index}>
                <strong>{step.split(':')[0]}:</strong>
                <p>{step.split(':')[1]}</p>
              </li>
            ))}
          </ul>
          <p>
            <strong>Get in touch:</strong><br />
            Email: [Your Email Here]<br />
            Telegram: [Your Telegram Handle Here]<br />
            Phone: [Your Phone Number Here]
          </p>
        </section>
      </article>
    </>
  )
}
