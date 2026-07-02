import React from "react";
import TeamMember from "./TeamMember";

import {
  FaShieldAlt,
  FaAward,
  FaLightbulb,
  FaUsers,
  FaHandshake,
  FaUserTie,
} from "react-icons/fa";

const expertise = [
  "Luxury villa construction",
  "Modern home design",
  "Smart home technology",
  "Property buying/selling advisory",
  "Property insurance",
];

const team = [
  { name: "Ahmed Khan", role: "Founder & CEO", image: "/assets/images/team/team1.jpg" },
  { name: "Sara Malik", role: "Lead Architect", image: "/assets/images/team/team2.jpg" },
  { name: "Bilal Asif", role: "Property Advisor", image: "/assets/images/team/team3.jpg" },
  { name: "Hina Raza", role: "Customer Relations", image: "/assets/images/team/team4.jpg" },
];

const values = [
  {
    icon: <FaShieldAlt />,
    title: "Trust",
    description: "We build trust through honesty and integrity.",
  },
  {
    icon: <FaAward />,
    title: "Quality",
    description: "We are committed to delivering the highest quality.",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovation",
    description: "We embrace innovation and modern solutions.",
  },
  {
    icon: <FaUsers />,
    title: "Customer Satisfaction",
    description: "Our customers are our top priority.",
  },
  {
    icon: <FaHandshake />,
    title: "Transparency",
    description: "We believe in clear and transparent deals.",
  },
  {
    icon: <FaUserTie />,
    title: "Professionalism",
    description: "We maintain high standards of professionalism.",
  },
];

const AboutUs = () => {
  return (
    <section className="bg-[#F5F0EB]">
      {/* Hero / Intro */}
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <p className="text-sm font-semibold tracking-widest text-[#C9A84C] mb-3">
          ABOUT US
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1A2A3A] mb-6">
          Building Trust, One Home at a Time
        </h1>
        <p className="text-[#2D3748] max-w-2xl mx-auto leading-relaxed">
          Dream Home is a premier real estate agency dedicated to helping
          families and investors find, build, and secure their ideal
          properties — with honesty, transparency, and expert guidance every
          step of the way.
        </p>
      </div>

      {/* Our Story */}
    <div className="max-w-6xl mx-auto px-6 pb-20">
     <div className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_4px_12px_rgba(0,0,0,0.08)] grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
      <p className="text-sm font-semibold tracking-widest text-[#C9A84C] mb-3">
        OUR STORY
        </p>
        <h3 className="font-serif text-3xl font-bold text-[#1A2A3A] mb-4">
        A Journey Built on Trust
       </h3>
        <p className="text-[#2D3748] leading-relaxed mb-4">
         Dream Home began with a simple goal — to make real estate
          transparent, reliable, and stress-free for every family and
         investor. What started as a small team of property experts has
         grown into a trusted platform connecting people with the homes
         and investments they deserve.
      </p>
      <p className="text-[#2D3748] leading-relaxed">
        Today, we combine local market expertise with modern technology
        to guide our clients through every step — from finding the
        right property to closing the deal with complete confidence.
      </p>
    </div>
    <div className="rounded-2xl overflow-hiddenh-64 md:h-80">
      <img
         src="/assets/images/about/ourstory.jpg"
         alt="Our Story-Dream Home team"
         className="w-full h-full object-cover"
       />
    </div>
    </div>
    </div>

      {/* Mission & Vision */}
      <div className="max-w-6xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-8 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
          <h3 className="font-serif text-2xl font-bold text-[#1A2A3A] mb-3">
            Our Mission
          </h3>
          <p className="text-[#2D3748] leading-relaxed">
            To simplify the real estate journey by connecting buyers and
            investors with quality properties through trusted advisory,
            modern technology, and complete transparency.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
          <h3 className="font-serif text-2xl font-bold text-[#1A2A3A] mb-3">
            Our Vision
          </h3>
          <p className="text-[#2D3748] leading-relaxed">
            To become the most trusted name in real estate across Pakistan,
            UAE, and the UK — known for smart homes, ethical dealings, and
            client satisfaction.
          </p>
        </div>
      </div>

      {/* Expertise */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <h3 className="font-serif text-3xl font-bold text-[#1A2A3A] text-center mb-10">
          Our Expertise
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-center gap-3"
            >
              <span className="bg-[#C9A84C] text-[#1A2A3A] rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">
                ✓
              </span>
              <p className="text-[#2D3748] font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <h3 className="font-serif text-3xl font-bold text-[#1A2A3A] text-center mb-10">
          Meet Our Team
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>

      {/* Our Values */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
      <div className="text-center mb-12">
        <h3 className="font-serif text-3xl font-bold text-[#1A2A3A]">
          Our Values
        </h3>
      <div className="w-12 h-[3px] bg-[#C9A84C] mx-auto mt-3"></div>
     </div>

     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">
      {values.map((value, index) => (
      <div
        key={index}
        className="group relative bg-white rounded-xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
      >
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

        <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#1A2A3A] to-[#2C3E50] flex items-center justify-center text-[#C9A84C] text-2xl group-hover:scale-110 transition-transform duration-300">
          {value.icon}
        </div>

        <h4 className="font-semibold text-[#1A2A3A] text-sm mb-2">
          {value.title}
        </h4>
        <p className="text-xs text-[#1A2A3A] leading-relaxed">
          {value.description}
        </p>
      </div>
    ))}
    </div>
    </div>
    </section>
  );
};

export default AboutUs;