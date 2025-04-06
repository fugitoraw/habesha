import { ArticleLayout } from "@/components/article/ArticleLayout";
import SampleArticle from "@/components/article/SampleArticle";
import React from "react";

const articleSections = [
  {
    heading: "Our Mission",
    text: "At Habesham Project, our mission is simple yet powerful: to empower young tech enthusiasts, foster innovation, and accelerate Ethiopia’s digital transformation. We achieve this through two core pillars:\n\n1. Building a Supportive Tech Community:\nWe provide mentorship, resources, and guidance to help learners grow in programming, design, AI, and more. Innovators with ideas get the support they need to bring them to life, and businesses benefit from a skilled network ready to contribute to the tech ecosystem.\n\n2. Providing Digital Solutions for Businesses & Startups:\nWe develop affordable, high-quality digital tools for Ethiopian companies. From websites and marketing to startup support and investor connections, we help bridge the digital gap and spark real growth."
  },
  {
    heading: "Our Goals",
    text: "Our ultimate goal is to build a thriving tech ecosystem in Ethiopia and Africa. We do this by:\n\n1. Creating a Strong Tech Community:\nA space where developers, designers, and marketers collaborate, learn, and grow. We host competitions, challenges, and encourage peer-to-peer mentorship.\n\n2. Connecting Startups & Talent:\nWe help entrepreneurs connect with the right tech minds to build and launch their ideas.\n\n3. Building Impactful Projects:\nWe work on community-driven, open-source projects that address local needs and give members hands-on experience.\n\n4. Supporting Students:\nWe provide students with a platform to learn, get mentorship, and explore tech career paths."
  },
  {
    heading: "Our Community",
    text: "At Habesham Project, we’ve built a vibrant, collaborative community that focuses on practical learning, growth, and impact.\n\n1. Knowledge Sharing:\nThrough Telegram groups, live workshops, and expert-led sessions, we promote learning and open dialogue.\n\n2. Hands-on Projects:\nWe work on real-world applications, open-source tools, and initiatives that solve real problems.\n\n3. Competitions:\nHackathons, coding challenges, and startup contests make learning fun and rewarding.\n\n4. Future Plans:\nWe’re planning structured mentorship, weekly Q&A sessions, and career support programs to further empower our members."
  },
  {
    heading: "Our Work & Services",
    text: "We provide real solutions that bring ideas to life:\n\n1. Digital Solutions:\nWebsites, mobile apps, automation tools, and branding support—custom-built for Ethiopian businesses and startups.\n\n2. Empowering Entrepreneurs:\nWe help our community members turn their ideas into real startups, offering development, marketing, and networking support.\n\n3. Community-Driven Innovation:\nWe support members who want to launch collaborative projects with real-world impact.\n\n4. Flexible, Custom Services:\nWhether it’s a SaaS platform, enterprise system, or IoT integration, we build what our clients and community need."
  },
  {
    heading: "How to Join & Work With Us",
    text: "Joining Habesham Project is easy:\n\n1. Join the Community:\nConnect via Telegram to discuss, share, and learn.\n\n2. Contribute to Projects:\nPropose or join real-world tech projects and build together.\n\n3. Collaborate With Us:\nWe partner with startups and businesses to create impactful digital solutions.\n\n4. Support the Mission:\nSponsor, mentor, donate, or contribute in any way you can.\n\nGet in touch:\nEmail: [Your Email Here]\nTelegram: [Your Telegram Handle Here]\nPhone: [Your Phone Number Here]"
  }
];


export default function AboutUs() {
  return (
    <ArticleLayout title="About Us">
      <SampleArticle/>
    </ArticleLayout>
  );
}
